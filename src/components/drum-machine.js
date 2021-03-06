import React, { useEffect, useState } from "react";
import Drumpad from "./drum-pad";

const DrumMachine = (props) => {
  const kits = {
    1: {
      name: "Heater Kit",
      kit: [
        {
          keyCode: 81,
          keyTrigger: "Q",
          id: "Heater-1",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
        },
        {
          keyCode: 87,
          keyTrigger: "W",
          id: "Heater-2",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
        },
        {
          keyCode: 69,
          keyTrigger: "E",
          id: "Heater-3",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
        },
        {
          keyCode: 65,
          keyTrigger: "A",
          id: "Heater-4",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
        },
        {
          keyCode: 83,
          keyTrigger: "S",
          id: "Clap",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
        },
        {
          keyCode: 68,
          keyTrigger: "D",
          id: "Open-HH",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
        },
        {
          keyCode: 90,
          keyTrigger: "Z",
          id: "Kick-n'-Hat",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
        },
        {
          keyCode: 88,
          keyTrigger: "X",
          id: "Kick",
          url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
        },
        {
          keyCode: 67,
          keyTrigger: "C",
          id: "Closed-HH",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
        },
      ],
    },
    2: {
      name: "Piano Kit",
      kit: [
        {
          keyCode: 81,
          keyTrigger: "Q",
          id: "Chord-1",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
        },
        {
          keyCode: 87,
          keyTrigger: "W",
          id: "Chord-2",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
        },
        {
          keyCode: 69,
          keyTrigger: "E",
          id: "Chord-3",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
        },
        {
          keyCode: 65,
          keyTrigger: "A",
          id: "Shaker",
          url:
            "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
        },
        {
          keyCode: 83,
          keyTrigger: "S",
          id: "Open-HH",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
        },
        {
          keyCode: 68,
          keyTrigger: "D",
          id: "Closed-HH",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
        },
        {
          keyCode: 90,
          keyTrigger: "Z",
          id: "Punchy-Kick",
          url: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
        },
        {
          keyCode: 88,
          keyTrigger: "X",
          id: "Side-Stick",
          url: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
        },
        {
          keyCode: 67,
          keyTrigger: "C",
          id: "Snare",
          url: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
        },
      ],
    },
  };

  const [kitNumber, setKitNumber] = useState(1);
  const [kit, setKit] = useState(kits[kitNumber]);
  const [pad, setPad] = useState("Pad Name");

  useEffect(() => {
    setKit(kits[kitNumber]);
  }, [kitNumber]);

  const handleButton = (e) => {
    // console.log(e.currentTarget.value);
    switch (e.currentTarget.value) {
      case "minus":
        if (kitNumber !== 1) {
          setKitNumber(kitNumber - 1);
          break;
        }
        break;
      case "plus":
        if (kitNumber < 2) {
          setKitNumber(kitNumber + 1);
          break;
        }
        break;
      default:
        break;
    }
  };

  return (
    <div id="drum-machine">
      <div className="drum-pads">
        {kit.kit.map((sample, idx) => (
          <Drumpad
            sample={sample}
            letter={sample.keyTrigger}
            audio={sample.url}
            key={idx}
            setPad={setPad}
          />
        ))}
      </div>

      <div id="display">
        <div className="logo">
          <i className="fab fa-react"></i>
          <p>Dr.Umpad</p>
        </div>
        <button value="minus" onClick={handleButton}>
          <i className="fas fa-minus"></i>
        </button>
        <div className="screen">
          <p id="kit-name">{kit.name}</p>
          <p id="pad-name">{pad}</p>
        </div>
        <button value="plus" onClick={handleButton}>
          <i className="fas fa-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default DrumMachine;
