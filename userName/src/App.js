import { useState } from "react";
import AddNewUser from "./components/Users/AddNewUser";
import AllUsersList from "./components/Users/AllUsersList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (nName, nAge) => {
    setUsersList((oldUserList) => {
      return [
        ...oldUserList,
        { name: nName, age: nAge, id: Math.random().toString() },
      ];
    });
  };
  return (
    <div>
      <AddNewUser onAddingUser={addUserHandler}></AddNewUser>
      <AllUsersList users={usersList}></AllUsersList>
    </div>
  );
}

export default App;
