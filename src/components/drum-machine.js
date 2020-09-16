import React, { useState } from "react";
import Drumpad from "./drum-pad";

const DrumMachine = (props) => {
  // STATE
  const keyboard = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  return (
    <div id="drum-machine">
      <div className="drum-pads">
        {keyboard.map((letter, idx) => (
          <Drumpad letter={letter} key={idx} />
        ))}
      </div>

      <div id="display">
        <button>
          <i className="fas fa-minus"></i>
        </button>
        <div className="screen">KIT ONE</div>
        <button>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default DrumMachine;
