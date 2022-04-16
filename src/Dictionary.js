import React, {useState} from 'react';
import Results from "./Results";
import axios from 'axios';
import Photos from "./Photos";
import "./dictionary.css";


export default function Dictionary(props) {
  let [Keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    //console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function handleKeywordChange(event) {
    //console.log (event.target.value)
    setKeyword(event.target.value);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  //used https://dictionaryapi.dev/ to get dictionary API
  function Search(event) {
    //event.preventDefault();
    //alert(`​🧙​ let me think of a defintion for "${Keyword}"`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${Keyword}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelsApiKey =
      "563492ad6f917000010000010f4ef6026f5e473789284cdb614a7228";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${Keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function load() {
    setLoaded(true);
    Search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word would you like to conjure?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">
            suggested words: magic, wizard, spell...
          </div>
        </section> 
        <Results results={results} />
       <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}