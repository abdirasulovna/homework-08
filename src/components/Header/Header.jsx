import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

const StyledHeader = styled.header`
  background-color: #700170;
  padding: 20px 15px;
  color: white;
`;

const Header = (props) => {
  return (
    <StyledHeader>
      <h1>A Typical Page</h1>
      {props.isAuth && (
        <Navigation
          logoutHandler={props.logoutHandler}
          startTimer={props.startTimer}
          userHandler={props.userHandler}
        />
      )}
    </StyledHeader>
  );
};

export default Header;
