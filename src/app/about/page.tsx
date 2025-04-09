import styles from './about.module.css'
import Image from 'next/image';

type Props = {
    classname: string;
}

const About = (props: Props) => {
    let style = 'noPadding'

    if (props.classname == undefined) {
        style = 'container'
    }

    return(
        <div className={styles.section}>
            <div className={styles[style]}>

                <div className={styles.knowledge}>

                    <Image className={styles.pcImage} alt='' width='400' height='700' src='/Sofo-lawyer/best.jpg'></Image>            
                    <img className={styles.mobImage} src='/Sofo-lawyer/best.jpg'></img>          
                    <div className={styles.textContainer}>
                        <div className={styles.headerText}>განათლება</div>
                        <div className={styles.text}>
                            <p className={styles.paragraph}>
                                სოფიო ბერძენიშვილმა დაამთვრა ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო
                                უნივერსიტეტის იურიდიული.ფაკულტეტი
                                სპეციალობა - სამართალმცოდნეობა.
                            </p>

                            <p className={styles.paragraph}>2006 წელს ივანე ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტის მიერ მას მიენიჭა მაგისტრის ხარისხი სამმართალმცოდნეობაში</p>                            
                            <p className={styles.paragraph}>სოფიო ბერძენიშვილს გავლილი აქვს ივ. ჯავახიშვილის სახელობის თბილისის სახელმწიფო უნივერსიტეტის კომპიუტერული სწავლების ცენრტი ,, გარანტი” - ს სასწავლო კურსი</p>
                        </div>

                        <div className={styles.headerText}>დამატებით ტრენინგები</div>
                        <div className={styles.text}>
                            <p className={styles.paragraph}>
                            სამოქალაქო სამართლის განხრით –სსიპ ადვოკატთა ასოციაციის სასწავლო ცენტრი;
                            </p>

                            <p className={styles.paragraph}>
                                ადვოკატთა პროფესიული ეთიკა – სსიპ ადვოკატთა ასოციაციის სასწავლო ცენტრი;
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
                        <div className={styles.headerText}>სამუშაო გამოცდილება</div>
                        <div className={styles.text}>
                            <p className={styles.paragraph}>
                                სოფიო ბერძენიშვილს გააჩნია 18 წლიანი საადვოკატო საქმიანობის გამოცდილება.
                                სოფიო ბერძენიშვილი 2008 წლიდან არის საქართველოს ადვოკატთა ასოციაციის წევრი (სერთიფიცირებული ადვოკატი სამოქალაქო და ადმინისტრაციულ სამართალში); 
                                იგი ასევე  გახლავთ დამატებითი სპეციალიზირებული ბავშვთა უფლებების დაცვაში
                            </p>

                            <p className={styles.paragraph}>12.2012 წლიდან-2024 წალმდე წარმოადგენდა საადვოკატო ბიურო „მიგრიაული და პარტნიორების” ადვოკატს</p>                            
                            <p className={styles.paragraph}>მას ასევე გააჩნია გამოცდილება მიკროსაფინასო და საბანკო სექტრორში.</p>                            
                            <p className={styles.paragraph}>ხოლო 2025 წელს დააფუძნა სოფიო ბერძენიშვილის საადვოკატო ბიურო და ეწევა კერძო საადვოკატო საქმიანობას სამოქალაქო და ადმინისტრაციულ სამართალში,</p>                            
                            <p className={styles.paragraph}>სოფიო ბერძენიშვილი სადვოკატო ბიურო გთავაზობთ სრულ საადვოკატო მომსახურებას აქ დაგხვდებათ თქვენთვის მისაღები და კომფორრტული გარემო, სადაც მიიღებთ კვალიფიციურ მომსახურებს. სოფიო ბერძენიშვილის ბიურო აქტიურად თანამშრომლობს კვალიფიციურ ნოტარიუსებთან, თარჯიმნებთან, ექპერტებთან  </p>
                        </div>
                    </div>
                    <Image className={styles.pcImage} alt='' width='400' height='650' src='/Sofo-lawyer/zoomed.png'></Image> 
                    <img className={styles.mobImage} src='/Sofo-lawyer/zoomed.png'></img>          
                </div>
            </div>
        </div>
    );
}

export default About;