import styles from './button.module.css'

type Props = {
    title: string,
    href: string
}

const InvisButton = (props: Props) => {
    return(
        <a className={styles.main} href={props.href}>{props.title}</a>
    );
}

export default InvisButton