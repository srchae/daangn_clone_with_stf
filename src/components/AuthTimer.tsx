import { useEffect, useState } from "react";

import styled from "styled-components";

const StyledTimer = styled.div`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 12px;
`;

export const AuthTimer = ({
  duration = 300,
  onExpire,
}: {
  duration?: number;
  onExpire?: () => void;
}) => {
  const [time, setTime] = useState(duration);

  useEffect(() => {
    if (time === 0) {
      if (onExpire) {
        onExpire();
      }
      return;
    }

    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const formatTime = (seconds: number) => {
    const minute = String(Math.floor(seconds / 60)).padStart(2, "0");
    const second = String(seconds % 60).padStart(2, "0");
    return `${minute}:${second}`;
  };

  return <StyledTimer>{formatTime(time)}</StyledTimer>;
};
