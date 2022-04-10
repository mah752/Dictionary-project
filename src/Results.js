import React from 'react';
import Meaning from "./Meaning";

const Results = (props) => {
  if (props.results) {
    return (
      <div className="Results">
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default Results