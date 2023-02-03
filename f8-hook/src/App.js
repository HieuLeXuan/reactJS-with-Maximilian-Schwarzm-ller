import { useState } from "react";
import "./App.css";
import UserEffect from "./components/UseEffect/UseEffect";

import TodoList from "./components/UseState/TodoList";

function App() {
  const [toggle, setToggle] = useState(false);

  const mountHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <button onClick={mountHandler}>Mount</button>
      {/* <TodoList />  */}
      {toggle && <UserEffect />}
    </>
  );
}

export default App;
