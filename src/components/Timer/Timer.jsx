import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyleTimer = styled.div`
  padding: 2rem 1.5rem;
  box-shadow: 2.5px 2px 2px 2px;
  width: 450px;
  margin: 10px auto;
  border-radius: 10px;
  text-align: center;
`;

const Timer = () => {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    if (timer >= 60) return;
    const id = setInterval(() => {
      setTimer(() => timer + 1);
    }, 500);
    return () => {
      clearInterval(id);
    };
  }, [timer]);
  console.log(timer);
  return (
    <StyleTimer>
      <h1>Timer: {timer}</h1>
    </StyleTimer>
  );
};
export default Timer;
