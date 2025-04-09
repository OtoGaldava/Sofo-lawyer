import { useState } from 'react';
import styles from './menuDisplay.module.css'
import Link from 'next/link';

type Props = {
    visible: string;
}


const MenuDisplay = (props: Props) => {
    return(
        <div className={`${styles['main']} ${styles[props.visible]}`}>
            <div className={styles.wrapper}>
                <Link href="/about" className={styles.href}>ჩვენ შესახებ</Link>
                <Link href="/services" className={styles.href}>სერვისი</Link>
                <Link href="/contacts" className={styles.href}>კონტაქტი</Link>
            </div>
        </div>
    );
}

export default MenuDisplay;