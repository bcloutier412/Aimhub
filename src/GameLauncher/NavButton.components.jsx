import styles from './NavButton.module.css'

export default function NavButton({ text, src, activeStyle }) {
    return (
        <div className={styles.button} style={{backgroundColor: activeStyle}}>
        <img alt={`${text} icon`} src={src}/>
        {text}
        </div>
    )
}