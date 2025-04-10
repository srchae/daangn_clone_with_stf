import { AlignJustify, Bell, ChevronDown, MapPin, Search } from "lucide-react";
import styled from "styled-components";

import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";

import { CategoryFilter } from "../components/CategoryFilter";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 16px;
  gap: 16px;
`;

const MainHeader = styled.header`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`;

const IconsWrapper = styled.div`
  display: flex;
  gap: 16px;
  svg {
    width: 24px;
    height: 24px;
    cursor: pointer;
    color: #262626;
  }
`;

const SetLocationButton = styled.button`
  border: none;
  background: #f4f4f4;
  font-size: 16px;
  align-items: center;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  gap: 3px;
  font-weight: 500;

  svg {
    width: 20px;
    height: 20px;
    color: #262626;
  }
`;

export const MainActivity: ActivityComponentType = () => {
  return (
    <AppScreen>
      <MainContainer>
        <MainHeader>
          <SetLocationButton>
            <MapPin />
            마곡동
            <ChevronDown />
          </SetLocationButton>
          <IconsWrapper>
            <AlignJustify />
            <Search />
            <Bell />
          </IconsWrapper>
        </MainHeader>
        <CategoryFilter />
      </MainContainer>
    </AppScreen>
  );
};

export default MainActivity;
