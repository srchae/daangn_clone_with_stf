import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";
import { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../GlobalStyle";
import * as S from "../styles/Common.styled";

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
    outline: 2px solid #ff6f0f;
  }
`;

const LoginActivity: ActivityComponentType = () => {
  const [phone, setPhone] = useState("");
  const [isInputVisible, setInputVisible] = useState(false);

  const isValidPhone = /^010\d{8}$/.test(phone.replace(/\D/g, ""));

  return (
    <AppScreen appBar={{ title: "" }}>
      <S.Container>
        <GlobalStyle />
        <S.Content>
          <S.Title>휴대폰 번호를 인증해주세요.</S.Title>
          <InputField
            type="tel"
            inputMode="numeric"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          {isValidPhone && !isInputVisible && (
            <FindIdText>
              휴대폰 번호가 변경되었나요?{" "}
              <LinkText>이메일로 계정 찾기</LinkText>
            </FindIdText>
          )}
          {isValidPhone && isInputVisible && (
            <LinkText>인증번호가 오지 않나요?</LinkText>
          )}
          {isValidPhone && isInputVisible && <S.Button>완료</S.Button>}
          {isValidPhone && !isInputVisible && (
            <S.Button onClick={() => setInputVisible(true)}>확인</S.Button>
          )}
        </S.Content>
      </S.Container>
    </AppScreen>
  );
};

export default LoginActivity;
