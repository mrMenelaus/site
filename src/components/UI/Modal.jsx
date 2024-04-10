import React from 'react';
import styles from "./Modal.module.css"


const Modal = ({children,visible,setVisible,header}) => {
    const classList = [styles.modal]
    if (visible) classList.push(styles.active)
    const close = ()=>setVisible(false)
    return (
        <div className={classList.join(" ")} onClick={close}>
            <div className={styles.content} onClick={(e)=>{e.stopPropagation()}}>
                <div className={styles.header}>
                    <h1>{header}</h1>
                    <button className={styles.close} onClick={close}>✖</button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;