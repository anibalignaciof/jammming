import React from "react";
import TrackList from "./Tracklist";
import styles from "../css/Playlist.module.css"

function Playlist(props) {
    return (
        <div className="PlayList">
            <h2>{props.name}</h2>
            <TrackList tracks={props.tracklist} />
        </div>
    );

};

export default Playlist;