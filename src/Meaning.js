import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
    return (
        <div className="Meaning">
                <h4>{props.meaning.partOfSpeech}</h4>
                {props.meaning.definitions.map(function (definition, index) {
                    return(
                        <div className="Definition" key={index}>
                            {definition.definition}
                            <br />
                            <em className="example">{definition.example}</em>
                        </div>
                    )
                })}
        </div>
    )
}