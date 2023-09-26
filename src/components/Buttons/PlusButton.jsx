import { Link } from "react-router-dom";
import "./PlusButton.scss";
import { ReactComponent as PlusIcon } from "../../assets/images/create.svg";


function PlusButton( {to} ) {
    return (
        <Link to={to} className="plus-button">
            <button className="plus-button__container">
                <PlusIcon className="plus-button__icon" />
            </button>
        </Link>
    )
}

export default PlusButton;
