import styles from './about.module.css'
import Image from 'next/image';

const About = () => {
    return(
        <div className={styles.section}>
            <div className={styles.container}>

                <div className={styles.knowledge}>

                    <img className={styles.pcImage} alt='ადვოკატის ფოტო' src='/Sofo-lawyer/lawyer.jpg'></img>            
                    <img className={styles.mobImage} src="/Sofo-lawyer/lawyer.jpg" alt="Best Image" />          
                    <div className={styles.textContainer}>
                        <h2 className={styles.headerText}>განათლება</h2>
                        <div className={styles.text}>
                            <p className={styles.paragraph}>
                                სოფიო ბერძენიშვილმა დაამთვრა ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო
                                უნივერსიტეტის იურიდიული.ფაკულტეტი
                                სპეციალობა - სამართალმცოდნეობა.
                            </p>

                            <p className={styles.paragraph}>2006 წელს ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტის მიერ მას მიენიჭა მაგისტრის ხარისხი სამმართალმცოდნეობაში</p>                            
                            <p className={styles.paragraph}>სოფიო ბერძენიშვილს გავლილი აქვს ივ. ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტის კომპიუტერული სწავლების ცენრტი ,, გარანტი” - ს სასწავლო კურსი</p>
                        </div>

                        <h2 className={styles.headerText}>დამატებით ტრენინგები</h2>
                        <div className={styles.text}>
                            <p className={styles.paragraph}>
                            სამოქალაქო სამართლის განხრით –სსიპ ადვოკატთა ასოციაციის სასწავლო ცენტრი;
                            </p>

                            <p className={styles.paragraph}>
                                ადვოკატთა პროფესიული ეთიკა - სსიპ ადვოკატთა ასოციაციის სასწავლო ცენტრი;
                                ადვოკატის პროფესიული ეთიკა და მისი სამართლებრივი ასპექტები, საქართველოს ადვოკატები დამოუკიდებელი პროფესიისათვის;
                                ადამიანის ძირითადი უფელებები და თავისუფლებები, ევროპული კონვენციის და ქართული კანონმდებლობის ანალიზი;
                                არარსრუწლოვანთა მართლმსაჯულება
                                ადვოკატის როლი მედიაციის პროცესში
                                დისკრიმინცია შრომით უფლებებში და შრომითი ხელშეკრულების შეწყვეტა    
                            </p>                            
                        </div>
                    </div>
                </div>
                
                <div className={styles.knowledge}>
                    <div className={styles.textContainer}>
                        <h2 className={styles.headerText}>სამუშაო გამოცდილება</h2>
                        <div className={styles.text}>
                            <p className={styles.paragraph}>
                                სოფიო ბერძენიშვილს გააჩნია 18 წლიანი საადვოკატო საქმიანობის გამოცდილება.
                                სოფიო ბერძენიშვილი 2008 წლიდან არის საქართველოს ადვოკატთა ასოციაციის წევრი (სერთიფიცირებული ადვოკატი სამოქალაქო და ადმინისტრაციულ სამართალში); 
                                იგი ასევე  გახლავთ დამატებითი სპეციალიზირებული ბავშვთა უფლებების დაცვაში
                            </p>

                            <p className={styles.paragraph}>12.2012 წლიდან-2024 წალმდე წარმოადგენდა საადვოკატო ბიურო „მიგრიაული და პარტნიორების” ადვოკატს</p>                            
                            <p className={styles.paragraph}>მას ასევე გააჩნია გამოცდილება მიკროსაფინასო და საბანკო სექტრორში.</p>                            
                            <p className={styles.paragraph}>ხოლო 2025 წელს დააფუძნა სოფიო ბერძენიშვილის საადვოკატო ბიურო და ეწევა კერძო საადვოკატო საქმიანობას სამოქალაქო და ადმინისტრაციულ სამართალში,</p>                            
                        </div>
                    </div>
                    <Image className={styles.pcImage} alt='პროფესიონალი ადვოკატი - სოფო ბერძენიშვილი და საადვოკატო ბიურო' width='400' height='650' src='/Sofo-lawyer/advokati.png'></Image> 
                    <img className={styles.mobImage} src="/Sofo-lawyer/advokati.png" alt="პროფესიონალი advokati - სოფო ბერძენიშვილი და saadvokato biuro" />          
                </div>
            </div>
        </div>
    );
}

export default About;