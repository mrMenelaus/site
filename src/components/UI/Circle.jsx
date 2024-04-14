import React from "react";
import styles from "./Circle.module.css"

function Circle() {
    return (
        <div className={styles.box}>
            <h1 className={styles.first}>
                1
            </h1>
            <h1 className={styles.second}>
                2
            </h1>
            <h1 className={styles.third}>
                3
            </h1>
        </div>
    )
}

export default Circle;