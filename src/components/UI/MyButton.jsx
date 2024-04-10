import React from 'react';
import { Link } from 'react-router-dom'
import styles from "./MyButton.module.css"

const MyButton = (props) => {
    return (
        <Link to={props.to} className={styles.center}>
            <button className={styles.button}>
                {props.children}
            </button>
        </Link>
    );
};

export default MyButton;