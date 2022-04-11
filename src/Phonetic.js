import React from 'react';
import "./Phonetic.css"

const Phonetic = (props) => {
  return(
    <div className="Phonetic">
      {props.phonetic.text}
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        {" "}
        Listen
      </a>
    </div>
  );
};

export default Phonetic