import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css"
import Results from "./Results";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
   function handleResponse(response) {
       setResults(response.data[0]);
   }
    function search(event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(apiUrl).then(handleResponse);
    }
    function handleSubmit(event) {
        setKeyword (event.target.value);

    }
    return(
        <div className="Dictionary">
            <div className="row">
                <div className="col-9">
                    <form 
                    id="search-form" 
                    className="input-group mb-3"
                    onSubmit={search}
                    >
                        <input
                            id="search-input"
                            type="search"
                            className="form-control citySearch"
                            placeholder="Search..."
                            autoComplete="off"
                            autoFocus="on"
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
}
