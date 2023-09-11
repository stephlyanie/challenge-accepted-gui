import { Link } from "react-router-dom";

import "./SimpleGallery.scss";
import "../../styles/buttons.scss";

// Gallery component for showcasing related challenges/creations
function SimpleGallery({ galleryTitle, gallery, filterId }) {
  // Renders to page
  return (
    <section className="gallery">
      <h3 className="gallery__title">{galleryTitle}</h3>
      <div className="gallery__container">
        {gallery
          // Filters the featured item
          .filter((item) => filterId !== item.id)
          // Maps through items to create gallery cards
          .map((item) => (
            <div className="gallery__card">
              {/* Sets the url based on type of gallery */}
              <Link
                to={
                  item.creation_id
                    ? `/creations/${item.creation_id}`
                    : item.challenge
                    ? `/creations/${item.id}`
                    : `/challenges/${item.id}`
                }
                className="gallery__name-link"
                reloadDocument
              >
                <img
                  src={item.image_url}
                  alt={item.name}
                  className="gallery__image"
                />
              </Link>
              <Link
                to={
                  item.creation_id
                    ? `/creations/${item.creation_id}`
                    : item.challenge
                    ? `/creations/${item.id}`
                    : `/challenges/${item.id}`
                }
                className="gallery__name-link"
                reloadDocument
              >
                <h4 className="gallery__name">
                  {item.creation_name ? item.creation_name : item.name}
                </h4>
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
