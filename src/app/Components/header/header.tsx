"use client"
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './header.module.css'
import Button from '../button/button';
import Image from 'next/image';
import BurgerMenu from '../burgerMenu/burgerMenu';
import MenuDisplay from '../burgerMenu/menu/menuDisplay';
import { useRouter } from 'next/router';

const Header = () => {
    const [scrolled, setScrolled] = useState(false)
    const [menu, setMenu] = useState('false')
    const [visible, setVisible] = useState('invisible')

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

    function changeButton() {
        if (menu == 'false') {
            setMenu('true')
            setVisible('visible')
        } else {
            setMenu('false')
            setVisible('invisible')
        }
    }

    function handleClick () {
        window.location.href = '/'
    }

    return(
        <>
            <div className={ `${styles["navigation"]} ${styles['Pc']} ${scrolled? styles["sticky"] : ''}`}>

                <Image onClick={handleClick} className={styles.logo} src={'/logo-side.png'} alt='' height={100} width={230}></Image>

                <div className={styles.wrapper}>
                    <div className={styles.listWrapper}>
                        <a className={styles.href} href='/about'>ჩვენ შესახებ</a>
                        <a className={styles.href} href='/services'>სერვისი</a>
                        <a className={styles.href} href='/contacts'>კონტაქტი</a>
                    </div>

                    <div className={styles.buttonWrapper}>
                        <Button title='კონსულტაცია' href={'/contacts'}></Button>
                    </div>
                </div>
            </div>

            <div className={ `${styles["navigation"]} ${styles['Mobile']} ${scrolled? styles["sticky"] : ''}`}>
                <div className={styles.mobWrapper}>
                    <Image onClick={handleClick} className={styles.logo} src={'logo-side.png'} alt='' height={100} width={230}></Image>

                    <div className={styles.button} onClick={changeButton}>
                        <BurgerMenu xMark={menu}></BurgerMenu>
                    </div>  
                </div>

                <MenuDisplay visible={visible}></MenuDisplay>
            </div>
        </>
    );
}

export default Header
