import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
  padding: 2rem 1.5rem;
  box-shadow: 2px 2px 2px 2px;
  width: 450px;
  margin: 10px auto;
  border-radius: 10px;
`;

const Users = (props) => {
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);



  return (
    <Div onClick={props.userHandler}>
      <ul>
        {posts.map((item) => (
          <li
            key={item.id}
            style={{
              textAlign: "center",
              listStyle: "none",
              fontWeight: "10px",
              lineHeight: "45px",
            }}
          >
            {item.name}
            {item.email}
          </li>
        ))}
      </ul>
   
    </Div>
  );
};

export default Users;
