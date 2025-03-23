import { useState } from 'react';
import styles from './menuDisplay.module.css'

type Props = {
    visible: string;
}


const MenuDisplay = (props: Props) => {
    return(
        <div className={`${styles['main']} ${styles[props.visible]}`}>
            <div className={styles.wrapper}>
                <a className={styles.href} href='/about'>ჩვენ შესახებ</a>
                <a className={styles.href} href='/services'>სერვისი</a>
                <a className={styles.href} href='/contacts'>კონტაქტი</a>
            </div>
        </div>
    );
}

export default MenuDisplay;