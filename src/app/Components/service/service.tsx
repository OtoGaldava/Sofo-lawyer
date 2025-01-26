import styles from './service.module.css'

type Props = {
    title: string
    flex?: boolean
}

const Service = (props: Props) => {
    return(
        <div className={props.flex? styles['flex'] : styles['wrapper']}>{props.title}</div>
    );
}

export default Service;