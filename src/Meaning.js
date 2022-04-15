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
            <p>
            <strong>Definition: </strong>{definition.definition}
            <br/>
            <strong>Example:</strong><em>{definition.example}</em>
            <br/>
            <strong>Synonyms:</strong>
              <Synonyms synonyms={definition.synonyms} />
          </p>
          </div>
        );
      })}
      
    </div>
  );
};

export default Meaning;
