import React from "react";

const Drumpad = (props) => {
  return (
    <div className="drum-pad">
      <p>{props.letter}</p>
      <div className="light-indicator"></div>
    </div>
  );
};

export default Drumpad;
