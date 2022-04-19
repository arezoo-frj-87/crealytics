import React from "react";

export default function Image(props) {
    return (
        <div>
            <img src={props.imageSource} className={"image"}
                 alt={"product image"} loading={"lazy"}
                 decoding="async" aria-label={"image"}
                 onError={(e) => e.target.src = "https://via.placeholder.com/300/eed9c4/000000/?text=No-Image"}/>
        </div>
    )
}

