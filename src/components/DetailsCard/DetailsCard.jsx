import { Link } from "react-router-dom";

import "./DetailsCard.scss";
import "../../styles/buttons.scss";

function DetailsCard({ data }) {
  return (
    <section className="details">
      <div className="details__creator">
        <figure className="details__creator-image-container">
          <img
            src={require("../../assets/images/placeholder-3.webp")}
            className="details__creator-image"
          />
        </figure>
        <p className="details__creator-name">{data.username}</p>
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
        <Link to={`/challenges/${data.id}/create`}><button className="button button__primary details__button">
            Create
          </button></Link>
        </div>
      </div>
    </section>
  );
}

export default DetailsCard;
