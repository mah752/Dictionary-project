import React from 'react';
import "./Synonym.css";


const Synonyms = (props) => {
  if (props.synonyms) {
    return (
      <div className="syn"><ul className="Synonyms">
      
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul></div>
    );
  } else {
    return null;
  }
};

export default Synonyms;