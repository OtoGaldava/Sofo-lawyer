import Link from 'next/link';
import styles from './button.module.css'

type Props = {
    title: string,
    href: string
}

const InvisButton = (props: Props) => {
    return(
        <Link href={props.href} className={styles.main}>{props.title}</Link>
    );
}

export default InvisButton