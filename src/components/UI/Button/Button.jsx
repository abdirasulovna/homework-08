import React from "react";
import styled from "styled-components";

const Button = ({ children, bgColor, disabled, onClick }) => {
  return (
    <StyledButton bgColor={bgColor} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: ${(props) => (props.bgColor ? "#50015f" : "violet")};
  font: inherit;
  background: #700170;
  padding: 0.5rem 1.5rem;
  color: white;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border-radius: 20px;

  :disabled {
    background-color: gray;
  }
`;
export default Button;
