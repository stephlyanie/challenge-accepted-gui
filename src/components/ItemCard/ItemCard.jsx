import "./ItemCard.scss";
import "../../styles/buttons.scss";


function ItemCard() {
    return (
        <section className="item">
            <div className="item__image-container">
                <img src={require("../../assets/images/placeholder-3.webp")} className="item__image"/>
                <div className="item__creator">
                    <div className="item__creator-container">
                        <figure className="item__creator-image-container">
                            <img src={require("../../assets/images/placeholder-3.webp")} className="item__creator-image" />
                        </figure>
                        <p className="item__creator-name">Username</p>
                    </div>
                </div>
            </div>
            <div className="item__details">
                <h3 className="item__details-title">Challenge Title</h3>
                <div className="item__details-tags">
                    <p className="item__details-tag">Category</p>
                    <p className="item__details-tag">Type</p>
                </div>
                <p className="item__details-description">Cheesecake oat cake jelly-o pie bear claw halvah sesame snaps sweet roll. Jelly-o dessert bonbon muffin chocolate oat cake. Carrot cake cupcake sweet caramels oat cake.

</p>
                <div className="item__details-buttons">
                    <button className="button button__primary">Create</button>
                    <button className="button">Learn</button>
                </div>
            </div>
        </section>
    );
}

export default ItemCard;
