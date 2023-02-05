import React, { useReducer, useRef } from "react";

// initial state
// actions
// reducer
// dispath

//TODO: Down/Up
// // Init state
// const initState = 0;

// // Actions
// const UP_ACTION = "up";
// const DOWN_ACTION = "down";

// // Reducer
// const reducer = (state, action) => {
//   switch (action) {
//     case UP_ACTION:
//       return state + 1;
//     case DOWN_ACTION:
//       return state - 1;
//     default:
//       throw new Error("Invalid action");
//   }
// };

//TODO: Todo App
const initState = {
  job: "",
  jobs: [],
};

const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJob = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};

let newState;
const reducer = (state, action) => {
  console.log("prev state: ", state);

  switch (action.type) {
    case SET_JOB:
      newState = { ...state, job: action.payload };
      break;
    case ADD_JOB:
      newState = { ...state, jobs: [...state.jobs, action.payload] };
      break;
    default:
      throw new Error("Invalid actions!");
  }
  console.log("new state: ", newState);
  return newState;
};

const UseReducer = () => {
  //TODO: Down/Up
  //   const [count, dispath] = useReducer(reducer, initState);
  //   return (
  //     <div>
  //       {count}
  //       <button onClick={() => dispath(DOWN_ACTION)}>Down</button>
  //       <button onClick={() => dispath(UP_ACTION)}>Up</button>
  //     </div>
  //   );

  //TODO: Todo App
  const [state, dispath] = useReducer(reducer, initState);
  const { job, jobs } = state;
  const inputRef = useRef();

  const submitHandler = () => {
    dispath(addJob(job));
    dispath(setJob(""));
    inputRef.current.focus();
  };

  return (
    <div style={{ padding: "0 20px" }}>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        placeholder="Enter todo..."
        value={job}
        onChange={(e) => {
          dispath(setJob(e.target.value));
        }}
      />
      <button onClick={submitHandler}>Add</button>
      <ul>
        {jobs.map((job, i) => (
          <li key={i}>{job} &times;</li>
        ))}
      </ul>
    </div>
  );
};

export default UseReducer;
