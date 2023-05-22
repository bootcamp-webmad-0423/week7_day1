import './Button.css'

const Button = ({ text, link }) => {

    return <a className="Button" href={link}>{text}</a>
}

export default Button