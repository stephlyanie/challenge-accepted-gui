import { Link } from "react-router-dom";

import "./ItemCard.scss";
import "../../styles/buttons.scss";

import { ReactComponent as Create } from "../../assets/images/create.svg";

// Component for list of challenges and creations pages
function ItemCard({ data, isChallenge }) {
  // Renders to page
  return (
    <section>
      {data.map((item) => (
        <div key={item.id} className="item">
          <div className="item__image-box">
          <Link
            to={
              isChallenge
                ? `/challenges/${item.id}`
                : `/challenges/${item.challenge_id}`
            }

            className="item__link"
          >
              <img src={item.image_url} alt={data.name} className="item__image" />
            </Link>
          </div>
          <div className="item__details">
            <Link
              to={
                isChallenge
                  ? `/challenges/${item.id}`
                  : `/challenges/${item.challenge_id}`
              }

              className="item__link"
            >
              <h3 className="item__details-title">{item.name}</h3>
            </Link>
            <div className="item__details-tags">
              <p
                className={
                  // Will display if loaded as a creation card, otherwise will be set to display:none
                  item.challenge
                    ? "item__details-tag"
                    : "item__details-tag hidden"
                }
              >
                {item.challenge ? item.challenge : ""}
              </p>
              <p
                className={
                  item.challenge
                    ? "item__details-tag hidden"
                    : "item__details-tag"
                }
              >
                {item.category}
              </p>
              <p
                className={
                  item.challenge
                    ? "item__details-tag hidden"
                    : "item__details-tag"
                }
              >
                {item.type}
              </p>
            </div>
            <p className="item__details-user">Created by {item.username}</p>
          </div>
          <Link
            to={
              isChallenge
                ? `/challenges/${item.id}/create`
                : `/challenges/${item.challenge_id}/create`
            }

            className="item__link"
          >
            <Create className="item__icon" />
          </Link>
        </div>
      ))}
    </section>
  );
}

export default ItemCard;

// {data.map((item) => (
//   <div key={item.id} className="item">
//     <div className="item__creator">
//       <div className="item__creator-container">
//         <figure className="item__creator-image-container">
//           <img src={item.profile_pic} alt={item.username} className="item__creator-image" />
//         </figure>
//         <p className="item__creator-name">{item.username}</p>
//       </div>
//     </div>
//     <div className="item__container">
//       <img src={item.image_url} alt={data.name} className="item__image" />

//       <div className="item__details">
//         <h3 className="item__details-title">{item.name}</h3>
//         <div className="item__details-tags">
//           <p
//             className={
//               // Will display if loaded as a creation card, otherwise will be set to display:none
//               item.challenge
//                 ? "item__details-tag"
//                 : "item__details-tag hidden"
//             }
//           >
//             {item.challenge ? item.challenge : ""}
//           </p>
//           <p className="item__details-tag">{item.category}</p>
//           <p className="item__details-tag">{item.type}</p>
//         </div>
//         <p className="item__details-description">{item.description}</p>
//         <div className="item__details-buttons">
//           {/* Sets link according to whether item card is used for a challenge or a creation */}
//           <Link
//             to={
//               isChallenge
//                 ? `/challenges/${item.id}/create`
//                 : `/challenges/${item.challenge_id}/create`
//             }
//           >
//             <button className="button button__primary">Create</button>
//           </Link>

//           {/* Sets link according to whether item card is used for a challenge or a creation */}
//           <Link
//             to={
//               isChallenge
//                 ? `/challenges/${item.id}`
//                 : `/creations/${item.id}`
//             }
//           >
//             <button className="button">Learn</button>
//           </Link>
//         </div>
//       </div>
//     </div>
//   </div>
// ))}
