import { Link } from "react-router-dom";
import { ReactComponent as Edit } from "../../assets/images/pencil.svg";
import { ReactComponent as Delete } from "../../assets/images/trash.svg";

import "./DetailsCard.scss";
import "../../styles/buttons.scss";

function DetailsCard({ data }) {
  const handleDelete = () => {

  };

  return (
    <section className="details">
      <div className="details__creator">
        <div className="details__profile">
          <figure className="details__creator-image-container">
            <img
              src={data.profile_pic}
              className="details__creator-image"
            />
          </figure>
          <p className="details__creator-name">{data.username}</p>
        </div>
        <div className="details__actions">
          <Link to="edit">
            <Edit className="details__actions-edit" />
          </Link>
          <button className="button__icon" onClick={handleDelete}>
            <Delete className="details__actions-delete"/>
          </button>
        </div>
      </div>
      <h2 className="details__title">{data.name}</h2>
      <div className="details__tags">
        <p
        // Will display if loaded as a creation card, otherwise will be set to display:none
          className={
            data.challenge ? "item__details-tag" : "item__details-tag hidden"
          }
        >
          {data.challenge}
        </p>
        <p className="details__tag">{data.category}</p>
        <p className="details__tag">{data.type}</p>
      </div>
      <div className="details__image-container">
        <img src={data.image_url} className="details__image" />
      </div>
      <div className="details__container">
        <p className="details__description">{data.description}</p>
        <div className="details__buttons">
          <Link to={data.challenge ? `/challenges/${data.challenge_id}/create` : `/challenges/${data.id}/create`}>
              <button className="button button__primary">Create</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DetailsCard;
