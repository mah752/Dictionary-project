import React from 'react';
import "./Synonym.css";


const Synonyms = (props) => {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
      
        {props.synonyms.map(function (synonym, index) {
          return <div className="syn"><li key={index}>{synonym}</li></div>;
        })}
      </ul>
    );
  } else {
    return null;
  }
};

export default Synonyms;