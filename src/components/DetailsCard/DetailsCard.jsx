import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ReactComponent as Edit } from "../../assets/images/pencil.svg";
import { ReactComponent as Delete } from "../../assets/images/trash.svg";

import "./DetailsCard.scss";
import "../../styles/buttons.scss";

import PlusButton from "../Buttons/PlusButton";
import DropdownMenu from "../Menus/DropdownMenu";

// Component to show details of a challenge or creation
function DetailsCard({ data }) {
  const navigate = useNavigate();

  // Button handler to delete the creation or challenge
  const handleDelete = () => {
    // If there is "challenge" data in the response
    // (i.e. if the data is from a creation
    //   -- if it were a challenge, the challenge name would be under "name" rather than "challenge")
    // Set the axios url to creations
    if (data.challenge) {
      axios
        .delete(`https://challenge-accepted-b63b428b2200.herokuapp.com/creations/${data.id}`)
        .then(() => {
          setTimeout(() => {
            navigate("/creations");
          }, 1500);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // If there is no "challenge" data in the response
    // (i.e. if the data is from a challenge)
    // Set the axios url to challenges
    if (!data.challenge) {
      axios
        .delete(`https://challenge-accepted-b63b428b2200.herokuapp.com/challenges/${data.id}`)
        .then(() => {
          setTimeout(() => {
            navigate("/challenges");
          }, 1500);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  // Renders to page
  return (
    <section className="details">
        <div className="details__image-container">
          <div className="details__plus-button">
            <PlusButton
              to={
                data.challenge
                  ? `/challenges/${data.challenge_id}/create`
                  : `/challenges/${data.id}/create`
              }
            />
          </div>
          <img
            src={data.image_url}
            alt={data.name}
            className="details__image"
          />
        </div>
            <h2 className="details__title">{data.name}</h2>
            <p className="details__profile-name">Created by {data.username}</p>
            <div className="details__tags">
              <p
                // Will display if loaded as a creation card, otherwise will be set to display:none
                className={
                  data.challenge
                    ? "item__details-tag"
                    : "item__details-tag hidden"
                }
              >
                {data.challenge}
              </p>
              <p className="details__tag">{data.category}</p>
              <p className="details__tag">{data.type}</p>
            </div>

            <div className="details__description-container">
              <p className="details__description">{data.description}</p>
            </div>
        
      <div className="details__buttons">
          {/* Sets appropriate url based on whether the page is a creation or a challenge */}
          <Link
            className="details__button-link"
            to={
              data.challenge
                ? `/challenges/${data.challenge_id}/create`
                : `/challenges/${data.id}/create`
            }
          >
            <button className="button button__primary details__button">
              Make this Challenge
            </button>
          </Link>
          <DropdownMenu />
        </div>
    </section>
  );
}

export default DetailsCard;
