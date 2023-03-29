import React from "react";
import "../../assets/";
import "./ExerciseItem.css";

const ExerciseItem = ({ item, addToList }) => {
  const { name, id, info, image, age, time } = item;
  return (
    <>
      <div className="card">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="text">
          <h3 className="title">{name}</h3>
          <p className="description">{info.slice(0, 70)}.. </p>
          <p className="age">For Age: {age}+</p>
          <p className="time">Time required: {time}s </p>
        </div>
        <button
          onClick={() => {
            addToList(item);
          }}
          className="primary-btn"
          id="primary-btn"
        >
          Add to list
        </button>
      </div>
    </>
  );
};

export default ExerciseItem;
