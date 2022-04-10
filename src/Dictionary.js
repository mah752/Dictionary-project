import React, {useState} from 'react'
import "./dictionary.css"

const Dictionary = () => {
     let [Keyword, setKeyword]= useState ("");
     
     function Search (event) {
        event.preventDefault();
        alert(`​🧙​ let me think of a defintion for "${Keyword}"`);
    }
    function handleKeywordChange(event){
        //console.log (event.target.value)
        setKeyword (event.target.value);
    }
  return (
    <div>
        <h2>Let's conjour up a definition for that word...</h2>
        <div className="form">
            <form onSubmit={Search}>
            <input type="search" autofocus={true} onChange={handleKeywordChange}></input>
        </form>
        </div>
    </div>
  )
}

export default Dictionary