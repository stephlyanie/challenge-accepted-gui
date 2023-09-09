import { Link } from "react-router-dom";
import "./CreateButton.scss";

function CreateButton({ buttonLink, buttonClass, buttonTitle, buttonText }) {
    return (
        <Link to={buttonLink} className={`create-button create-button__${buttonClass}`}>
            <section className="create-button__container">
                <h2 className="create-button__title">{buttonTitle}</h2>
                <p className="create-button__text">{buttonText}</p>
            </section>
        </Link>
    )
}

export default CreateButton;