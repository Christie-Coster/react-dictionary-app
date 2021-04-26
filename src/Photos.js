import React from "react";

export default function Photos(props) {
    if (props.photos) {
        return (
            <div className="Photos">
                {props.photos.map(function (photo, index) {
                    return (
                        <img key="index"src= {photo.src.tiny} alt="keyword" className="img-fluid"/>
                    )
                })}
            </div>
        )
        
} else { 
    return null;
}
}