import Service from '../Components/service/service';
import styles from './services.module.css'

const Services = () => {
    return(
        <div className={styles.section}>
            <div className={styles.wrapper}>

                <div className={styles.contentWrapper}>
                    <div className={styles.subTitleWrapper}>
                        <div className={styles.line}></div>
                        <h3 className={styles.subTitle}>პროფესიონალური საქმიანობა</h3>
                        <div className={styles.line}></div>
                    </div>

                    <h3 className={styles.title}>სერვისები</h3>
                </div>

                <div className={styles.servicesWrapper}>
                    <Service title={'სამოქალაქო საქმიანობა'}></Service>
                    <Service title={'სამოქალაქო საქმიანობა'}></Service>
                    <Service title={'სამოქალაქო საქმიანობა'}></Service>
                    <Service title={'სამოქალაქო საქმიანობა'}></Service>
                    <Service title={'სამოქალაქო საქმიანობა'}></Service>
                    <Service title={'სამოქალაქო საქმიანობა'}></Service>
                    <Service title={'სამოქალაქო საქმიანობა'}></Service>
                    <Service title={'სამოქალაქო საქმიანობა'}></Service>
                    <Service title={'სამოქალაქო საქმიანობა'}></Service>
                    <Service title={'სამოქალაქო საქმიანობა'}></Service>
                    <Service title={'სამოქალაქო საქმიანობა'} flex={true}></Service>
                </div>
            </div>
        </div>
    );
}

export default Services;