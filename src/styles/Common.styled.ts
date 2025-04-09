import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 40px 20px;
  box-sizing: border-box;
  /* height: 80vh; */
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  color: #222;
  width: 100%;
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
