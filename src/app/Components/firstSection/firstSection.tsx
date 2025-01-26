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
                            <div className={styles.name}>სოფო ბერძენიშვილი</div>
                        </div>

                        <div className={styles.mainTxt}>თქვენი პარტნიორი სამართლებრივ საკითხებში</div>
                    </div>

                    <div className={styles.experience}>18 წლიანი გამოცდილება</div>

                    <div className={styles.buttonWrapper}>
                        <Button href='/contacts' title='კონსულტაცია'></Button>
                        <InvisButton href='' title='ჩვენ შესახებ'></InvisButton>
                    </div>
                </div>
            </div>

            <div className={styles.image}>
                <Image src={'/best.jpg'} alt={''} width={400} height={700}></Image>
            </div>
        </div>
    );
}

export default Section;