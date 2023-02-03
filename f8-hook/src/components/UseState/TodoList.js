import React, { useState } from "react";

const TodoList = () => {
  console.log(localStorage.getItem("jobs"));

  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState(JSON.parse(localStorage.getItem("jobs")));

  const addJobHandler = () => {
    setJobs(() => {
      localStorage.setItem("jobs", JSON.stringify([...jobs, job]));
      setJob("");
      return [...jobs, job];
    });
  };

  return (
    <div style={{ margin: 20 }}>
      <input type="text" value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={addJobHandler}>Add</button>

      <ul>
        {jobs.map((job, i) => (
          <li key={i}>{job}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
