import ContactInfo from '@/app/Components/contactInfo/contactInfo';
import styles from './contacts.module.css'

const Contact = () => {
    return(
        <div className={styles.section}>
            <div className={styles.wrapper}>
                <ContactInfo></ContactInfo>

                <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d744.3719326482862!2d44.76742676960203!3d41.73157169903209!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x404472e64d7ef919%3A0x53d2f786914cb0c1!2zNDMg4YOe4YOU4YOZ4YOY4YOc4YOY4YOhIOGDkuGDkOGDm-GDluGDmOGDoOGDmCwg4YOX4YOR4YOY4YOa4YOY4YOh4YOY!5e0!3m2!1ska!2sge!4v1737888067870!5m2!1ska!2sge" width="600" height="450"></iframe>
            </div>
        </div>
    );
}

export default Contact;