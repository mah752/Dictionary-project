import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

const Meaning = (props) => {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">{definition.definition}</div>
            <em className="example">{definition.example}</em>
            <div className="synonyms"> 
            <p>
              <Synonyms synonyms={definition.synonyms} />
              <Synonyms synonyms={props.meaning.synonyms} />
            </p>
            </div>
          </div>
        );
      })}
      
    </div>
  );
};

export default Meaning;