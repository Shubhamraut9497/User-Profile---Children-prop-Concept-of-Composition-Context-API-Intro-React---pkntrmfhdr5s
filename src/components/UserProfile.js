import { useContext } from "react";
import React from "react";
import { UserContext } from "./App";

const UserProfile = () => {
  const name = useContext(UserContext.name);
  const age = useContext(UserContext.age);
  return (
    <>
      <h1 id="name">Name:- {name}</h1>
      <h1 id="age">Age:- {age}</h1>
    </>
  );
};

export { UserProfile };
