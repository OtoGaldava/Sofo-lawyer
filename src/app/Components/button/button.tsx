import styles from './button.module.css'

type Props = {
    title: string,
    href: string
}

const Button = (props: Props) => {
    return(
        <a className={styles.main} href={props.href}>{props.title}</a>
    );
}

export default Button