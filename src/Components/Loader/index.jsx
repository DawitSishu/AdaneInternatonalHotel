import React from "react";
import "./style.css";

const index = () => {
  return (
    <div className="main-loader">
      {/* <div className="pyramid-loader">
        <div className="wrapper">
          <span className="side side1"></span>
          <span className="side side2"></span>
          <span className="side side3"></span>
          <span className="side side4"></span>
          <span className="shadow"></span>
        </div>
      </div> */}
      <div className="cube-loader">
        <div className="cube-top"></div>
        <div className="cube-wrapper">
          <span style={{ "--i": 0 }} className="cube-span"></span>
          <span style={{ "--i": 1 }} className="cube-span"></span>
          <span style={{ "--i": 2 }} className="cube-span"></span>
          <span style={{ "--i": 3 }} className="cube-span"></span>
        </div>
      </div>
      <div className="loader">
        <div className="scanner">
          <span>Loading...</span>
        </div>
      </div>
    </div>
  );
};

export default index;
