import './Button.css';

const Button = ({title, handleClick}) => {
    return(
        <button onClick={handleClick} className="btn">{title}</button>
    )
}
export default Button