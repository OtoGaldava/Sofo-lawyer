import styles from './links.module.css'

const Links = () => {
    return(
        <div className={styles.section}>
            <h2 className={styles.headerText}>სასარგებლო ბმულები სამართლებრივი ინფორმაციისთვის</h2>

            <div className={styles.wrapper}>
                <a href='https://tcc.court.ge/' className={styles.link}>
                    <img alt='logo of a lawyer' className={styles.img} src='https://tcc.court.ge/Content/img/tcc.png'></img>
                    <h3 className={styles.txt}>თბილისის საქალაქო სასამართლო</h3>
                </a>

                <a href='https://police.ge/' className={styles.link}>
                    <img alt='logo of a police' className={styles.img} src='shshsAdvokati.png'></img>
                    <h3 className={styles.txt}>შინაგან საქმეთა სამინისტრო</h3>
                </a>

                <a href='https://www.supremecourt.ge/' className={styles.link}>
                    <img alt='logo of a advokati' className={styles.img} src='https://www.supremecourt.ge/uploads/files/1/news/axali%20logo.JPG'></img>
                    <h3 className={styles.txt}>საქართველოს უზენაესი სასამართლო</h3>
                </a>

                <a href='https://www.constcourt.ge/ka' className={styles.link}>
                    <img alt='samartleblivi momsaxurebis surati' className={styles.img} src='https://constcourt.ge/image/614x440/61485cd72978c.jpg'></img>
                    <h3 className={styles.txt}>საქართველოს საკონსტიტუციო სასამართლო</h3>
                </a>

                <a href='https://auction.tbilisi.gov.ge/' className={styles.link}>
                    <img alt='logo sasamartlo' className={styles.img} src='tbilisiSamartali.png'></img>
                    <h3 className={styles.txt}>ქონების მართვის სააგენტო</h3>
                </a>
            </div>
        </div>
    )
}

export default Links;