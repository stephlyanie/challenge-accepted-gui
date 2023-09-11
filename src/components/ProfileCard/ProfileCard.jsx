import "./ProfileCard.scss";
import "../../styles/buttons.scss";

// Component for profile pages
function ProfileCard({ data }) {
  // Renders to page
  return (
    <section className="profile">
      <h3 className="profile__name">
        {data.first_name} {data.last_name}
      </h3>
      <p className="profile__username">{data.username}</p>
      <img src={data.image_url} className="profile__image" />
    </section>
  );
}

export default ProfileCard;
