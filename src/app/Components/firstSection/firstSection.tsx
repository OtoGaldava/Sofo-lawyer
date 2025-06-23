import Image from 'next/image';
import Button from '../button/button';
import InvisButton from '../invisButton/button';
import styles from './firstSection.module.css'

const Section = () => {
    return(
        <div className={styles.section}>
            <div className={styles.main}>
                <div className={styles.content}>
                    <div className={styles.logo}></div>

                    <div className={styles.mainTxtWrapper}>
                        <div className={styles.nameWrapper}>
                            <div className={styles.line}></div>
                            <div className={styles.name}>სოფიო ბერძენიშვილი</div>
                        </div>

                        <h1 className={styles.mainTxt}>თქვენი სანდო ადვოკატი იურიდიულ საკითხებში</h1>
                    </div>

                    <div className={styles.experience}>18 წლიანი გამოცდილება</div>

                    <div className={styles.buttonWrapper}>
                        <Button href='/contacts' title='კონსულტაცია'></Button>
                        <InvisButton href='/about' title='ჩვენ შესახებ'></InvisButton>
                    </div>
                </div>
            </div>

            <div className={styles.image}>
                <img className={styles.pcImage} src={'/lawyer.webp'} alt={'Advokati tbilisshi - პროფესიონალი ადვოკატი თბილისში სამართლებრივი კონსულტაციისთვის'}></img>
            </div>

            <div className={styles.mobile}>
                <img className={styles.mobImage} src={'/lawyer.webp'} alt={'პროფესიონალი ადვოკატი - სამართლებრივი დახმარება თბილისში'}></img>
            </div>
        </div>
    );
}

export default Section;