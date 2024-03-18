import React from "react";
import "./Registration.css";
import { FaUser, FaLock } from "react-icons/fa";

const Registration = () => {
  return (
    <div className="wrapper">
      <form action="/Login">
        <h1>Registor</h1>
        <div className="input-box">
          <input type="text" placeholder="Name" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="number" placeholder="Age" required />
          <FaUser className="icon" />
        </div>

        <div className="input-box">
          <input type="text" placeholder="Create Username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Create Password" required />
          <FaLock className="icon" />
        </div>

        <button type="submit">Registor</button>
      </form>
    </div>
  );
};

export default Registration;
