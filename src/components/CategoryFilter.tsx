import { useState } from "react";

import styled from "styled-components";

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 8px;
  scroll-width: none;
  -ms-overflow-style: none;
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Chip = styled.button<{ selected?: boolean }>`
  padding: 8px 16px;
  border: 1px solid rgb(223, 223, 223);
  border-radius: 20px;
  background-color: #fff;
  // color: #333;
  min-width: fit-content;

  font-weight: ${(props) => (props.selected ? "bold" : "normal")};
`;

const categories = [
  "굿즈",
  "플스",
  "닌텐도",
  "다이슨",
  "캠핑",
  "포토카드",
  "에어팟",
  "스타벅스",
  "달력",
];

export const CategoryFilter = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <ScrollContainer>
      {categories.map((category) => (
        <Chip
          key={category}
          selected={selected === category}
          onClick={() => setSelected(category)}
        >
          {category}
        </Chip>
      ))}
    </ScrollContainer>
  );
};
