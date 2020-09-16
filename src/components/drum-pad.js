import React, { useEffect } from "react";

const Drumpad = (props) => {
  const playSound = () => {
    const sound = document.getElementById(props.sample.keyTrigger);
    sound.currentTime = 0;
    sound.play();
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key.toUpperCase() === props.letter) {
        playSound();
      }
    });
  });

  return (
    <div className="drum-pad" onClick={playSound}>
      <p>{props.letter}</p>
      <div className="light-indicator"></div>
      <audio className="clip" id={props.letter} src={props.audio} />
    </div>
  );
};

export default Drumpad;
