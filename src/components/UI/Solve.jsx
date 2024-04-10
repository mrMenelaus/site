import React, { useState } from "react";
import styles from "./Solve.module.css"

function Solve({number,children,answer}){
    const [open,setOpen] = useState(false)
    return (
        <div className={styles.block}>
           <div className={styles.wrapper}>
               <h1>
                Задача {number}
               </h1>
               <div className={styles.content}>
                {children }
               </div>
           </div>
            <div className={styles.wrapper}>
                <button className={styles.button} onClick={()=>{setOpen(open?false:true)}}>
                    {open?"Скрыть ответ":"Показать ответ"}
                </button>
                {
                    open?<h2 className={styles.answer}>Ответ: <span className={styles.answer_body}>{answer}</span>.</h2>:null
                }
            </div>
        </div>
    )
}

export default Solve;