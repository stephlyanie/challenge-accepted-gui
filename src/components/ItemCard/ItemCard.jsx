import "./ChallengeCard.scss";
import "../../styles/buttons.scss";


function ChallengeCard() {
    return (
        <section className="challenge">
            <div className="challenge__image-container">
                <img src={require("../../assets/images/placeholder-3.webp")} className="challenge__image"/>
                <div className="challenge__creator">
                    <div className="challenge__creator-container">
                        <figure className="challenge__creator-image-container">
                            <img src={require("../../assets/images/placeholder-3.webp")} className="challenge__creator-image" />
                        </figure>
                        <p className="challenge__creator-name">Username</p>
                    </div>
                </div>
            </div>
            <div className="challenge__details">
                <h3 className="challenge__details-title">Challenge Title</h3>
                <div className="challenge__details-tags">
                    <p className="challenge__details-tag">Category</p>
                    <p className="challenge__details-tag">Type</p>
                </div>
                <p className="challenge__details-description">Cheesecake oat cake jelly-o pie bear claw halvah sesame snaps sweet roll. Jelly-o dessert bonbon muffin chocolate oat cake. Carrot cake cupcake sweet caramels oat cake.

</p>
                <div className="challenge__details-buttons">
                    <button className="button button__primary">Create</button>
                    <button className="button">Learn</button>
                </div>
            </div>
        </section>
    );
}

export default ChallengeCard;
