import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import Button from "../UI/Button/Button";
import { Card } from "../UI/Card/Card";

const Login = ({ loginHandler }) => {
  const [enteredEmail, setenteredEmail] = useState("");
  const [enteredPassword, setEnterePassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const emailChangeHandler = (e) => {
    setenteredEmail(e.target.value);
    setIsEmailValid(enteredEmail.includes("@"));
  };
  const passwordChangeHandler = (e) => {
    setEnterePassword(e.target.value);
    setIsPasswordValid(enteredPassword.trim().length >= 5);
  };

  useEffect(() => {
    setIsFormValid(isEmailValid && isPasswordValid);
  }, [isEmailValid, isPasswordValid]);

  const submitHandler = (e) => {
    e.preventDefault();
    loginHandler();
  };

  return (
    <Card>
      <form>
        <StyledInputContainer>
          <label htmlFor="">Email :</label>
          <StyledInput
            type="email"
            onChange={emailChangeHandler}
            value={enteredEmail}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <label htmlFor="">Password :</label>
          <StyledInput
            type="password"
            onChange={passwordChangeHandler}
            value={enteredPassword}
          />
        </StyledInputContainer>
        <ButtonContainer>
          <Button
            bgColor={"success"}
            disabled={!isFormValid}
            onClick={submitHandler}
          >
            login
          </Button>
        </ButtonContainer>
      </form>
    </Card>
  );
};

const StyledInputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const StyledInput = styled.input`
  width: 300px;
  outline: none;
  border-radius: 2px;
`;
const ButtonContainer = styled.div`
  width: 300px;
  text-align: center;
  outline: none;
`;
export default Login;
