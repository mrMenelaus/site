import React from "react";
import styles from "./Example.module.css"
function Example({number,condition,desition,answer}){
    return (
        <div className={styles.block}>
            <div className={styles.wrapper}>
                <h1 className={styles.condition}>Пример {number}</h1>
                <div className={styles.content}>{condition}</div>
            </div>
            <div className={styles.wrapper}>
                <h2 className={styles.desition}>
                    Решение
                </h2>
                <div className={styles.content}>{desition}</div>
            </div>
            <h3>
                <span className={styles.answer}>Ответ: <span className={styles.answer_body}>{answer}</span></span>.
            </h3>
        </div>
    )
}

export default Example;