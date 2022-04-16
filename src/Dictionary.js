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
      <h2>Let's conjure up a definition</h2>
      <form onSubmit={Search}>
          <div className="d-flex">
            <div className="flex-grow-1">
              <input 
                type="search"
                onChange={handleKeywordChange}
                className="form-control"
                placeholder="Type a word..."
              />
            </div>
            <div className="mx-1">
              <button
                value="Search"
                className="btn mx-1 px-4  text-center"
                type="submit"
              >
               Define
              </button>
            </div>
          </div>
        </form>
        <div className="hint">Suggested words: code, sunset, yoga...</div>
      <Results results={results} />
      </div>
  );
}

export default Dictionary
