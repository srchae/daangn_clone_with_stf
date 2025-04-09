import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";

import GlobalStyle from "../GlobalStyle";
import { useFlow } from "../stackflow/stackflow";
import * as S from "../styles/Common.styled";
import { LoginLink, LoginText } from "../styles/features/Begin.styled";

const BeginActivity: ActivityComponentType = () => {
  const { push } = useFlow();

  const handleBegin = () => {
    push("LoginActivity", {});
  };

  return (
    <AppScreen>
      <S.Container>
        <GlobalStyle />
        <S.Content>
          <S.Title>당신 근처의 당근</S.Title>
          <S.SubText>
            동네라서 가능한 모든 것
            <br />
            지금 내 동네를 선택하고 시작해보세요!
          </S.SubText>
        </S.Content>

        <S.Footer>
          <S.Button>시작하기</S.Button>
          <LoginText>
            이미 계정이 있나요?{" "}
            <LoginLink onClick={handleBegin}>로그인</LoginLink>
          </LoginText>
        </S.Footer>
      </S.Container>
    </AppScreen>
  );
};

export default BeginActivity;
