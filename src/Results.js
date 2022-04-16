import React from 'react';
import Phonetic from './Phonetic';
import Meaning from "./Meaning";
import "./results.css";
//import Synonyms from "./Synonyms";

export default function Results(props) {
  if (props.results) {
     if (props.results) {
    return (
      <div className="Results">
        <section className="parent">
             <div className="child"> <h2 className="theword">{props.results.word}</h2></div>
             <div className="child"> {props.results.phonetics.map(function(phonetic, index) {
                return (
                     <div key={index}>
                    <Phonetic phonetic={phonetic} /></div>
                );
              })}</div>
        </section>
        <section className="definitions-content">
          {props.results.meanings.map(function(meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
}
