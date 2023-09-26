import React from "react";
import styles from "../css/Tracklist.module.css"
import Track from "./Track"

function TrackList(props) {
    return(
        <div className="TrackList">
            { props.tracks.map(track => { 
                        return <Track track={track} key={track.id} />;
                    })}
        </div>
    );

};

export default TrackList;