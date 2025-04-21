import Service from '../Components/service/service';
import styles from './services.module.css'

const Services = () => {
    return(
        <div className={styles.section}>
            <div className={styles.wrapper}>

                <div className={styles.contentWrapper}>
                    <h2 className={styles.title}>მომსახურების სფერო</h2>
                </div>

                <div className={styles.servicesWrapper}>
                    <Service title={'მემკვიდრეობის სამართალი'}></Service>
                    <Service title={'შრომის სამართალი'}></Service>
                    <Service title={'საოჯახო სამართალი'}></Service>
                    <Service title={'ვალდებულებითი სამართალი'}></Service>
                    <Service title={'სახელშეკრულებლო სამართალი'}></Service>
                    <Service title={'საბანკო სამართალი'}></Service>
                    <Service title={'ადმინისტრაციული სამართალი'}></Service>
                    <Service title={'მოქალაქეობის მიღება/მინიჭება'}></Service>
                    <Service title={'უძრავი ქონების პრივატიზაცია'}></Service>
                    <Service title={'ბინადრობის ნებართვები'}></Service>
                    <Service title={'არასრულწლოვნების საკითხები'} flex={true}></Service>
                </div>
            </div>
        </div>
    );
}

export default Services;