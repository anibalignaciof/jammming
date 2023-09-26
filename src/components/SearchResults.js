import React from "react";
import styles from "../css/SearchResults.module.css";
import TrackList from "./Tracklist";

function SearchResults(props) {

    return (
        <div className="SearchResults">
            <h2>Search Results</h2>
            <TrackList tracks={props.tracklist} />
        </div>
    );

};

export default SearchResults;