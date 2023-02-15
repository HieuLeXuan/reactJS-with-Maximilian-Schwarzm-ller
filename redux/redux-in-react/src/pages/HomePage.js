import React from "react";
import HobbyList from "../components/home/HobbyList";
import { useDispatch, useSelector } from "react-redux";
import { addNewHobby, setActiveHobby } from "../actions/hobby";

const randomNumber = () => {
  return 1000 + Math.trunc(Math.random() * 9000);
};

const HomePage = (props) => {
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeId = useSelector((state) => state.hobby.activeId);
  const dispatch = useDispatch();

  const handleAddHobby = () => {
    // random a hobby object
    const newHobby = {
      id: randomNumber(),
      title: `Hobby ${randomNumber()}`,
    };
    // dispatch action to add a new hobby to redux store
    const action = addNewHobby(newHobby);
    dispatch(action);
  };

  const handleHobbyClick = (hobby) => {
    const action = setActiveHobby(hobby);
    dispatch(action);
  };

  return (
    <div className="home-page">
      <h1>REDUX - Home page</h1>
      <button onClick={handleAddHobby}>Random hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        activeId={activeId}
        onHobbyClick={handleHobbyClick}
      />
    </div>
  );
};

export default HomePage;
