import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

const Meaning = (props) => {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
<div className="synonyms">
<Synonyms synonyms={props.meaning.synonyms} />
  </div>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">{definition.definition}</div>
            <em className="example">{definition.example}</em>
            
            
         



</div>
        );
      })}
      
    </div>
  );
};

export default Meaning;
