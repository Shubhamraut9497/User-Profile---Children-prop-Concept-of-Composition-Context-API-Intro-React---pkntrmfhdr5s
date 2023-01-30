import { useContext } from "react";
import React from "react";
import { UserContext } from "./App";

const UserProfile = () => {
  const val = useContext(UserContext);
  
  return (
    <>
      <h1 id="name">Name:- {val.name}</h1>
      <h1 id="age">Age:- {val.age}</h1>
    </>
  );
};

export { UserProfile };
