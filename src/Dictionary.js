import React, {useState} from 'react';
import Results from "./Results";
import axios from 'axios';
import "./dictionary.css";


const Dictionary = () => {
  let [Keyword, setKeyword] = useState("");
  let [results, setResults]=useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  //used https://dictionaryapi.dev/ to get dictionary API
  function Search(event) {
    event.preventDefault();
    //alert(`​🧙​ let me think of a defintion for "${Keyword}"`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${Keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    //console.log (event.target.value)
    setKeyword(event.target.value);
    
  }
  return (
    <div className="Dictionary">
      <h2>Let's conjour up a definition for that word...</h2>
      <div className="form">
        <form onSubmit={Search}>
          <input type="search" onChange={handleKeywordChange}></input>
        </form>
  
        <Results results={results}/>
      </div>
    </div>
  );
}

export default Dictionary
