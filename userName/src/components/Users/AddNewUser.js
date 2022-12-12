import React, { useState } from "react";

import RC from "../UI Card/RC";
import Button from "../UI Card/Button";
import classes from "./AddNewUser.module.css";
import DisplayError from "../UI Card/DisplayError";

const AddNewUser = (props) => {
  const [userName, setUserName] = useState("");
  const [newAge, setNewAge] = useState("");
  const [newError, setNewError] = useState();

  const addSubmitHandler = (event) => {
    event.preventDefault();
    if (userName.trim().length === 0 || newAge.trim().length === 0) {
      setNewError({
        title: "input is invalid",
        message: "please enter valid inputs",
      });
      return;
    }
    if (+newAge < 1) {
      setNewError({
        title: "input is invalid",
        message: "Age should be > 0",
      });
      return;
    }

    props.onAddingUser(userName, newAge);
    setUserName("");
    setNewAge("");
  };

  const userNameChangeHandler = (event) => {
    setUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setNewAge(event.target.value);
  };

  const errorHandler = () => {
    setNewError(null);
  };

  return (
    <>
      {newError && (
        <DisplayError
          title={newError.title}
          message={newError.message}
          onHandleError={errorHandler}
        />
      )}

      <RC className={classes.input}>
        <form onSubmit={addSubmitHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={userName}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (Years) </label>
          <input
            id="age"
            type="number"
            value={newAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add New User</Button>
        </form>
      </RC>
    </>
  );
};

export default AddNewUser;
