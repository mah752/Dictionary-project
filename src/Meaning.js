import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

const Meaning = (props) => {
  return (
    <div className="Meaning">
      <h3 className="word">{props.meaning.partOfSpeech}</h3>
      <div className="synonyms">
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
      {props.meaning.definitions.map(function(definition, index) {
        if (definition.example) {
          return (
            <div key={index}>
              <p className="definition">
                <span>Definition:</span> {definition.definition}
                <br />
                <em className="example"><span>Example:</span> "{definition.example}"</em>
              </p>

              <hr />
            </div>
          );
        } else {
          return (
            <div key={index}>
              <p className="definition">{definition.definition}</p>
              <hr />
            </div>
          );
        }
      })}
    </div>
  );
};

export default Meaning;
