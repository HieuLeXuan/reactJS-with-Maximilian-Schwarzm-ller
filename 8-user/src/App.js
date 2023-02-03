import { useState } from "react";
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsers((prevUsers) => {
      return [...prevUsers, { name: uName, age: uAge }];
    });
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={users} />
    </>
  );
};

export default App;
