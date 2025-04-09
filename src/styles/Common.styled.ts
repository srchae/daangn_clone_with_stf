import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 40px 20px;
  box-sizing: border-box;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #222;
`;

export const SubText = styled.p`
  font-size: 14px;
  color: #666;
  text-align: center;
  line-height: 1.4;
`;

export const Footer = styled.div`
  width: 100%;
  text-align: center;
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #ff6f0f;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-family: inherit;
`;
