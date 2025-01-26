"use client"
import { useEffect, useState } from 'react';
import styles from './header.module.css'
import Button from '../button/button';
import Image from 'next/image';

const Header = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        
        const handler = () => {
            if (window.scrollY >= 100) setScrolled(true)
            else setScrolled(false)
        }

        window.addEventListener('scroll', handler)

        return () => {
            window.removeEventListener('scroll', handler)
        }
    }, [])

    function handleClick () {
        window.location.href = '/'
    }

    return(

        <div className={ `${styles["navigation"]} ${scrolled? styles["sticky"] : ''}`}>

            <Image onClick={handleClick} className={styles.logo} src={'/logo-side.png'} alt='' height={100} width={230}></Image>

            <div className={styles.wrapper}>
                <div className={styles.listWrapper}>
                    <a className={styles.href} href=''>ჩვენ შესახებ</a>
                    <a className={styles.href} href='/services'>სერვისი</a>
                    <a className={styles.href} href='/contacts'>კონტაქტი</a>
                </div>

                <div className={styles.buttonWrapper}>
                    <Button title='კონსულტაცია' href={'/contacts'}></Button>
                </div>
            </div>
        </div>
    );
}

export default Header
