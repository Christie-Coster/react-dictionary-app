import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

export default function Results(props) {
    if (props.results) {
        return(
        <div className="Results">
                <h2 className="text-capitalize"> {props.results.word} </h2>
                <p>
                    <a href={props.results.phonetics[0].audio}>
                        🔊
                    </a>
                    {props.results.phonetics[0].text}
                </p>
                {props.results.meanings.map(function (meaning, index) {
                    return (
                        <div key={index}>
                            <Meaning meaning={meaning} />
                        </div>
                    )
                })}
        </div>
    )
} else {
    return null; 
}
}