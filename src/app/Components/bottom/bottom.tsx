import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './bottom.module.css'
import ContactInfo from '../contactInfo/contactInfo';
import Image from 'next/image';

const Bottom = () => {
    return(
        <div className={styles.section}>
            <div className={styles.sectionWrapper}>

                <div className={styles.branding}>
                    <Image src={'/Logo.png'} alt='' height={250} width={300}></Image>
                    <span className={styles.brandingTxt}>ადვოკატი სოფო ბერძენიშვილი მზად არის გაგიწიოთ მაღალკვალიფიციური, სწრაფი და ხარისხიანი იურიდიული/საადვოკატო მომსახურება.</span>
                </div>

                <div className={styles.pages}>
                    <h4 className={styles.title}>გვერდები</h4>

                    <ul className={styles.ul}>
                        <li className={styles.li}><a className={styles.href} href=''>ჩვენ შესახებ</a></li>
                        <li className={styles.li}><a className={styles.href} href='/services'>სერვისი</a></li>
                        <li className={styles.li}><a className={styles.href} href='/contacts'>კონტაქტი</a></li>
                    </ul>
                </div>

                <div className={styles.pages}>
                    <div className={styles.pages}>
                        <h4 className={styles.title}>დაგვიკავშირდით</h4>
                        <ContactInfo></ContactInfo>
                    </div>

                    <div className={styles.WorkingHours}>
                        <h4 className={styles.title}>სამუშაო საათები</h4>

                        <div className={styles.contactWrapper}>
                            <svg className={styles.phone} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill='#b68c5a' d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
                            <div>ორშაბათი-შაბათი 10:00 - 18:00</div>
                        </div>
                    </div>
                </div>

            </div>

            <div className={styles.powered}>

            </div>
        </div>
    );
}

export default Bottom