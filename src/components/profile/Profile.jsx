import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Profile.css";
const Profile = (props) => {
  const { totalTime, addBreakTime, breaktiome } = props;
  const notify = () => toast(`Your Progress is Amazing 👍`);
  return (
    <>
      <div className="about">
        <img src="../../assets/avatar/mir.JPG" alt="" />
        <div className="genarel-info">
          <h3>Mir Faisal</h3>
          <div className="address">
            <FontAwesomeIcon icon={faLocation} />
            <p>Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
      <div className="body-info">
        <div className="weight">
          <span>
            <h2>72</h2> kg
          </span>
          <span>weight</span>
        </div>
        <div className="height">
          <span>
            <h2>5.8</h2>
          </span>
          <span>height</span>
        </div>
        <div className="Age">
          <span>
            <h2>25</h2>yrs
          </span>
          <span>Age</span>
        </div>
      </div>
      <h2 className="title">Add A Break</h2>
      <div className="break-time" onClick={(e) => addBreakTime(e)}>
        <div className="session">10</div>
        <div className="session">30</div>
        <div className="session">40</div>
        <div className="session">60</div>
      </div>
      <h2 className="title">Exercise Details</h2>
      <div className="total-exercise-time">
        <p>Exercise time</p>
        <p>
          <span>{totalTime}</span> seconds
        </p>
      </div>
      <div className="total-break-time">
        <p> Break time</p>
        <p>
          <span>{breaktiome}</span> seconds
        </p>
      </div>
      <button className="primary-btn" onClick={notify}>
        <h2>Activity Completed</h2>
      </button>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default Profile;
