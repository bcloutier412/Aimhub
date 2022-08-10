import './NavButton.css'
export default function NavButton({ text, src }) {
    return (
        <div className="button">
        <img alt={`${text} icon`} src={src}/>
        {text}
        </div>
    )
}