import { Link, useParams } from "react-router-dom";

import "./SimpleGallery.scss";
import "../../styles/buttons.scss";

function SimpleGallery({ galleryTitle, gallery, filterId }) {

    // console.log("filterId: " + filterId)
    // const filteredGallery = gallery.filter((item) =>  filterId !== item.id)
    // console.log("filteredGallery: " + filteredGallery)

  return (
    <section className="gallery">
      <h3 className="gallery__title">{galleryTitle}</h3>
      <div className="gallery__container">
        {gallery
          // Filters the featured item
          .filter((item) =>  filterId !== item.id)
          // Maps through items to create gallery cards
          .map((item) => (
            <div className="gallery__card">
              <img src={item.image_url} className="gallery__image" />

              {/* Sets the url based on whether it's a creation or a challenge (challenges will not have item.challenge) */}
              <Link
                to={
                  item.challenge
                    ? `/creations/${item.id}`
                    : `/challenges/${item.id}`
                }
                className="gallery__name-link"
                reloadDocument
              >
                <h4 className="gallery__name">{item.creation_name}</h4>
              </Link>

              <p className="gallery__tag">{item.username}</p>
            </div>
          ))}
      </div>

      <div className="gallery__buttons">
        <button className="button button__primary gallery__button">
          Load More
        </button>
      </div>
    </section>
  );
}

export default SimpleGallery;
