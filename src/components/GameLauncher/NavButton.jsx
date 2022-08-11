import './NavButton.css'
export default function NavButton({ text, src, activeStyle }) {
    return (
        <div className="button" style={{backgroundColor: activeStyle}}>
        <img alt={`${text} icon`} src={src}/>
        {text}
        </div>
    )
}