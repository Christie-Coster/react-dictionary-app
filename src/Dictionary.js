import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css"
import Results from "./Results";


export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

   function handleDictionaryResponse(response) {
       setResults(response.data[0]);
   }
   
   function handlePhotoResponse(response) {
       console.log(response);
       setPhotos(response.data.photos);
   }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        axios.get(apiUrl).then(handleDictionaryResponse);

        let photoApiKey = "563492ad6f917000010000011d58e3ebe8b6476cad97c8032362c4d3"
        let photoApiUrl =   `https://api.pexels.com/v1/search?query=${keyword}&per_page=1`
        //https://www.pexels.com/api/
        let headers= {Authorization : `Bearer ${photoApiKey}`}
        axios.get(photoApiUrl, {headers: headers}).then(handlePhotoResponse);
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
                <Results results={results} photos = {photos}/>
        </div>
    )
} else {
    load();
    return null
}
}
