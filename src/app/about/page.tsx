import styles from './about.module.css'
import Image from 'next/image';

const About = () => {
    return(
        <div className={styles.section}>
            <div className={styles.container}>

                <div className={styles.knowledge}>

                    <img className={styles.pcImage} alt='ადვოკატის ფოტო' src='/lawyer.webp'></img>            
                    <img className={styles.mobImage} src="/lawyer.webp" alt="ადვოკატის ფოტო" />          
                    <div className={styles.textContainer}>
                        <h2 className={styles.headerText}>განათლება</h2>
                        <div className={styles.text}>
                            <p className={styles.paragraph}>
                                სოფიო ბერძენიშვილმა დაამთვრა ივანე ჯავახიშვილის სახელობის 
                                სახელმწიფო უნივერსიტეტის იურიდიული ფაკულტეტი, 
                                სადაც მიიღო სამართალმცოდნეობის სპეციალობა. როგორც ადვოკატი, 
                                სოფიო ბერძენიშვილი უზრუნველყოფს მაღალი ხარისხის იურიდიულ
                                მომსახურებას და სამართლებრივ კონსულტაციებს.
                            </p>

                            <p className={styles.paragraph}>2006 წელს ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტის მიერ მას მიენიჭა მაგისტრის ხარისხი სამმართალმცოდნეობაში</p>                            
                            <p className={styles.paragraph}>სოფიო ბერძენიშვილს გავლილი აქვს ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტის კომპიუტერული სწავლების ცენრტი ,, გარანტი” - ს სასწავლო კურსი</p>
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
                                იგი ასევე  გახლავთ დამატებითი სპეციალიზირებული ბავშვთა უფლებების დაცვაში და აქტიურად აწვდის იურიდიულ მომსახურებას თავისი კლიენტებს.
                            </p>

                            <p className={styles.paragraph}>12.2012 წლიდან-2024 წლამდე წარმოადგენდა საადვოკატო ბიურო „მიგრიაული და პარტნიორების” ადვოკატს</p>                            
                            <p className={styles.paragraph}>მას ასევე გააჩნია გამოცდილება მიკროსაფინასო და საბანკო სექტრორში.</p>                            
                            <p className={styles.paragraph}>ხოლო 2025 წელს დააფუძნა სოფიო ბერძენიშვილის საადვოკატო ბიურო და ეწევა კერძო საადვოკატო საქმიანობას სამოქალაქო და ადმინისტრაციულ სამართალში,</p>                            
                        </div>
                    </div>
                    <Image className={styles.pcImage} alt='პროფესიონალი ადვოკატი - სოფიო ბერძენიშვილი და საადვოკატო ბიურო' width='400' height='650' src='/advokati.png'></Image> 
                    <img className={styles.mobImage} src="/advokati.png" alt="profesionali advokati tbilishi - სოფიო ბერძენიშვილი და saadvokato biuro" />          
                </div>
            </div>
        </div>
    );
}

export default About;