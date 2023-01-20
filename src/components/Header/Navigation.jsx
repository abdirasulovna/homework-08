import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.button`
  font: inherit;
  background: #dd0db0;
  border: 1px solid #dd0db0;
  padding: 0.5rem 1.5rem;
  color: white;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.26);
  border-radius: 20px;
`;
const UlList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
 justify-content: end;
 gap: 15px;
`;

const Navigation = (props) => {
  return (
    <nav>
      <UlList>
        <li>
          <ButtonStyle onClick={props.userHandler}>Users</ButtonStyle>
        </li>

        <li>
          <ButtonStyle onClick={props.startTimer}>Timer</ButtonStyle>
        </li>

        <li>
          <ButtonStyle onClick={props.logoutHandler}>Logout</ButtonStyle>
        </li>
      </UlList>
    </nav>
  );
};

export default Navigation;
