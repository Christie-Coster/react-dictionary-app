import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms"

export default function Meaning(props) {
    return (
        <div className="Meaning">
                <h4>{props.meaning.partOfSpeech}</h4>
                {props.meaning.definitions.map(function (definition, index) {
                    return(
                        <div className="Definition" key={index}>
                            <strong>Definition:</strong> {definition.definition}
                            <br />
                            <em className="example">
                                <strong>Example:</strong> {definition.example}
                            </em>
                            <br />
                            <Synonyms synonyms = {definition.synonyms}/>
                        </div>
                    )
                })}
        </div>
    )
}