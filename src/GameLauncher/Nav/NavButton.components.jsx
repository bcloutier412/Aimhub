import styles from './NavButton.module.css'

/*
    Nav Button
        @Desc: This component will display and style a button based on props
        @Param: text: The text of the button
                src: The src for the button img
                activeStyle: This prop will either be a color value or null based on if the button is active
*/
export default function NavButton({ text, iconClass, activeStyle }) {
    return (
        <div className={styles.button} style={{backgroundColor: activeStyle}}>
        <i className={iconClass} style={{marginRight: '10px'}}></i>
        {text}
        </div>
    )
}