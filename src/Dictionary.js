import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css"
import Results from "./Results";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
   function handleResponse(response) {
       setResults(response.data[0]);
   }
    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(apiUrl).then(handleResponse);
    }
    function showDefault(event) {
        event.preventDefault();
        search();
    }
    function load() {
        setLoaded(true);
        search();
    }
    function handleSubmit(event) {
        setKeyword (event.target.value);
    }

    if (loaded) {
    return(
        <div className="Dictionary">
            <div className="row">
                <div className="col-9">
                    <form 
                    id="search-form" 
                    className="input-group mb-3"
                    onSubmit={showDefault}
                    >
                        <input
                            id="search-input"
                            type="search"
                            className="form-control citySearch"
                            placeholder="Search..."
                            autoComplete="off"
                            onChange = {handleSubmit}
                        />
                        <button className="btn searchButton">
                            <span role="img" aria-label="search">
                            🔍
                            </span>
                        </button>
                    </form>
                </div>
                <Results results={results}/>
            </div>
        </div>
    )
} else {
    load();
    return null
}
}
