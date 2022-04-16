import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from "react-audio-player";

const Phonetic = (props) => {
  if (props.phonetic && props.phonetic.audio) {
    return (
      <div className="Phonetic">
        {props.phonetic.text}
        <ReactAudioPlayer src={props.phonetic.audio} controls />
      </div>
    );
  }
  return null;
};

export default Phonetic;
