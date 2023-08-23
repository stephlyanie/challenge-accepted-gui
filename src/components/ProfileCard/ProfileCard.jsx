import "./ProfileCard.scss";
import "../../styles/buttons.scss";


function ProfileCard() {
    return (
        <section className="profile">
            <h3 className="profile__name">FirstName LastName</h3>
            <p className="profile__username">Username</p>
            <img src={require("../../assets/images/placeholder-3.webp")} className="profile__image"/>
        </section>
    );
}

export default ProfileCard;
