import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import Photos from "./Photos";

export default function Results(props) {
    if (props.results) {
        return(
        <div className="Results">
            <section>
                <div className= "row">
                <div className="col-6">
                <h2> {props.results.word} </h2>
                {props.results.phonetics.map(function (phonetic, index) {
                    return (
                        <div key={index}>
                            <Phonetics phonetic={phonetic} />
                        </div>
                    )
                })}
                </div>
                <div className= "col-6">
                    <Photos photos={props.photos}/>
                </div>
                </div>
                </section>
                
                
                {props.results.meanings.map(function (meaning, index) {
                    return (
                        <section>
                        <div key={index}>
                            <Meaning meaning={meaning} />
                        </div>
                        </section>
                    )
                })}
                
        </div>
    )
} else {
    return null; 
}
}