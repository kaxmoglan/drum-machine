import React, { useEffect, useState } from "react";

const Drumpad = (props) => {
  // STATE
  const [active, setActive] = useState(false);

  // AUDIO FUNCTIONS
  const playSound = () => {
    const sound = document.getElementById(props.sample.keyTrigger);
    sound.currentTime = 0;
    sound.play();
    props.setPad(props.sample.id);
    setActive(true);
    const pad = document.getElementById(props.letter);
    pad.addEventListener("ended", () => setActive(false));
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key.toUpperCase() === props.letter) {
        playSound();
      }
    });
  });

  return (
    <div className={`drum-pad`} onClick={playSound}>
      <p>{props.letter}</p>
      <div className={`light-indicator active_${active}`}></div>
      <audio className="clip" id={props.letter} src={props.audio} />
    </div>
  );
};

export default Drumpad;
