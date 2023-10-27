import React from "react";
import styles from "../css/Button.module.css"

function ButtonPlus(props) {
    return(
        <>
            <button onClick={props.onClickHandler}>{props.name}</button>
        </>
    );
};

export default ButtonPlus;