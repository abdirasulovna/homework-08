import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Timer from "./components/Timer/Timer";
import Users from "./components/Users/Users";

function App() {
  const [isLoggenIn, setIsLoggenIn] = useState(false);
  const [timer, setTimer] = useState(false);
  const [user, setUser] = useState(false);
  const loginHandler = () => {
    setIsLoggenIn((prev) => !prev);
  };
  const logoutHandler = () => {
    setIsLoggenIn(false);
  };
  const userHandler = () => {
  setUser(true)
  setTimer(false)
  };
  const startTimer = () => {
   setTimer(true)
   setUser(false)
  };
const login = !user && !timer && isLoggenIn
const showUsers = user && isLoggenIn
const showTimer  = timer && isLoggenIn
  return (
    <div>
      <Header
        isAuth={isLoggenIn}
        logoutHandler={logoutHandler}
        startTimer={startTimer}
        userHandler={userHandler}
      />

      {!isLoggenIn && <Login loginHandler={loginHandler} />}
      {login && <Users/>}
      {showUsers && <Users/>}
      {showTimer && <Timer/>}

    </div>
  );
}

export default App;


