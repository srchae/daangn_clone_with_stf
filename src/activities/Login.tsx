import { useState } from "react";

import styled from "styled-components";

import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";

import { AuthTimer } from "../components/AuthTimer";
// import { AuthTimer } from "../components/authTimer";
import GlobalStyle from "../GlobalStyle";
import { useFlow } from "../stackflow/stackflow";
import * as S from "../styles/Common.styled";
import { autoHyphen } from "../utils/autoHyphen";

const FindIdText = styled.p`
  margin-top: 16px;
  color: #999;
  font-size: 12px;
`;

const LinkText = styled.span`
  color: #999;
  font-weight: 500;
  cursor: pointer;
  text-decoration: underline;
  font-size: 12px;
`;

const InputField = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  padding: 0 16px;
  border: 1px solid #ddd;
  box-sizing: border-box;
  &:focus {
    outline: 1px solid #232323;
  }
  font-family: inherit;
`;

const RetransmitButton = styled.button`
  width: auto;
  border-radius: 4px;
  border: none;
  padding: 6px;
  color: #242424;
  font-size: 12px;
  background-color: ##f8f9fa;
  cursor: pointer;
  font-family: inherit;
  font-weight: 600;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 8px;
  width: 100%;
`;

const LoginActivity: ActivityComponentType = () => {
  const [phone, setPhone] = useState("");
  const [isInputVisible, setInputVisible] = useState(false);
  const [authCode, setAuthCode] = useState("");

  const isValidPhone = /^010\d{8}$/.test(phone.replace(/\D/g, ""));
  const isValidAuthCode = /^(\d{6})$/.test(authCode.replace(/\D/g, ""));

  const { push } = useFlow();

  const handleAuthComplete = () => {
    push("MainActivity", {});
  };

  return (
    <AppScreen appBar={{ title: "" }}>
      <S.Container>
        <GlobalStyle />
        <S.Content>
          {isValidPhone && isInputVisible && (
            <S.Title>인증번호를 입력해 주세요.</S.Title>
          )}
          {!isInputVisible && <S.Title>휴대폰 번호를 입력해 주세요.</S.Title>}
          <InputField
            type="tel"
            inputMode="numeric"
            value={phone}
            onChange={(e) => {
              const formatted = autoHyphen(e.target.value);
              setPhone(formatted);
            }}
          />
          {!isInputVisible && (
            <FindIdText>
              휴대폰 번호가 변경되었나요?{" "}
              <LinkText>이메일로 계정 찾기</LinkText>
            </FindIdText>
          )}
          {isValidPhone && isInputVisible && (
            <InputWrapper>
              <InputField
                value={authCode}
                onChange={(e) => setAuthCode(e.target.value)}
              />
              <AuthTimer
                duration={300}
                onExpire={() => alert("인증코드 유효 시간이 만료되었습니다.")}
              />
            </InputWrapper>
          )}
          {isValidPhone && isInputVisible && (
            <>
              <RetransmitButton>인증번호 재전송</RetransmitButton>
              <LinkText>인증번호가 오지 않나요?</LinkText>
            </>
          )}
          {isValidPhone && isInputVisible && isValidAuthCode && (
            <S.Button onClick={handleAuthComplete}>완료</S.Button>
          )}
          {isValidPhone && !isInputVisible && (
            <S.Button onClick={() => setInputVisible(true)}>확인</S.Button>
          )}
        </S.Content>
      </S.Container>
    </AppScreen>
  );
};

export default LoginActivity;
