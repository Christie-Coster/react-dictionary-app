import React from "react";

export default function Phonetics (props) {
    if (props.phonetic) {
        return (
        <div className="Phonetics">
            <a 
            href={props.phonetic.audio} 
            target="_blank"
            rel="noreferrer"
            >
                
                🔊
            </a>
            {props.phonetic.text}
        </div>
        )
    } else {
        return null;
    }
}