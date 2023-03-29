import React, { useEffect, useState } from "react";

import { addToLocalDb, getDataFromLocalDb } from "../../utility/localdata";
import ExerciseItem from "../exercise_item/ExerciseItem";
import Profile from "../profile/Profile";
import "./Exercises.css";

const Exercises = () => {
  //declear stae for exercise items data
  const [exerciseItems, setExerciseItems] = useState([]);
  //load data from data.json. This hook has no dependency injection. thas why every reloads self call again.
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setExerciseItems(data));
  }, []);

  //  declear state for add list item
  const [totalTime, setTotalTime] = useState(0);
  // event handerlar for seleted buttun clicked.
  const addToList = (item) => {
    setTotalTime(totalTime + item.time);
  };

  // declear state for break time
  const [breaktime, setBreaktime] = useState(0);
  // event handeling for break Time.
  const addBreakTime = (e) => {
    const secoundElement = e.target.innerText;
    setBreaktime(secoundElement);
    addToLocalDb(secoundElement);
  };

  useEffect(() => {
    const storedTime = getDataFromLocalDb();
    if (storedTime) {
      setBreaktime(storedTime);
    } else {
      setBreaktime(breaktime);
      addToLocalDb(breaktime);
    }
  }, []);
  return (
    <>
      <section id="exercises">
        <div className="container">
          <div className="text">
            <h3 className="hero-text">Select today’s exercise</h3>
          </div>
        </div>
      </section>
      <div id="exercise-items">
        <div className="wrapper">
          {exerciseItems.map((item) => (
            <ExerciseItem key={item.id} item={item} addToList={addToList} />
          ))}
        </div>
        <div className="profile">
          <Profile
            totalTime={totalTime}
            addBreakTime={addBreakTime}
            breaktiome={breaktime}
          />
        </div>
      </div>
    </>
  );
};

export default Exercises;
