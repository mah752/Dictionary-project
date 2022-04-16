import React from 'react';
import "./Phonetic.css";
import ReactAudioPlayer from "react-audio-player";

const Phonetic = (props) => {
  return (
    <div className="Phonetic">
      {props.phonetic.text}
      <ReactAudioPlayer src={props.phonetic.audio} controls />
    </div>
  );
};

export default Phonetic