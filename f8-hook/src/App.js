import { useState } from "react";
import "./App.css";
import UserEffect2 from "./components/UseEffect/UseEffect2";
import UseReducer from "./components/UseReducer/UseReducer";

import TodoList from "./components/UseState/TodoList";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div style={{ margin: 20 }}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {/* <TodoList />  */}
      {/* {show && <UserEffect2 />} */}
      <UseReducer />
    </div>
  );
}

export default App;
