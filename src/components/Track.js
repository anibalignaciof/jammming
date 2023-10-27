import React from "react";
import ButtonPlus from "./ButtonPlus";
import styles from "../css/Track.module.css"

function Track(props) {

    return(
        <div className="Track">
            <h3>{props.track.name}</h3>
            <p>{props.track.artist} / {props.track.album}</p>
            <ButtonPlus name='+'  />
        </div>
    );

};

export default Track;