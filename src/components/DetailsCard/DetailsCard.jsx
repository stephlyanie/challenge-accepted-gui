import "./DetailsCard.scss";
import "../../styles/buttons.scss";


function DetailsCard() {
    return (
        <section className="details">
            <div className="details__creator">
                <figure className="details__creator-image-container">
                    <img src={require("../../assets/images/placeholder-3.webp")} className="details__creator-image" />
                </figure>
                <p className="details__creator-name">Username</p>
            </div>
            <h3 className="details__title">Challenge Title</h3>
            <div className="details__tags">
                <p className="details__tag">Category</p>
                <p className="details__tag">Type</p>
            </div>
            <div className="details__image-container">
                <img src={require("../../assets/images/placeholder-3.webp")} className="details__image"/>
            </div>
                <div className="details__container">
                    <p className="details__description">Cheesecake oat cake jelly-o pie bear claw halvah sesame snaps sweet roll. Jelly-o dessert bonbon muffin chocolate oat cake. Carrot cake cupcake sweet caramels oat cake.</p>
                    <div className="details__buttons">
                        <button className="button button__primary details__button">Create</button>
                    </div>
            </div>
        </section>
    );
}

export default DetailsCard;