import "./SimpleGallery.scss";
import "../../styles/buttons.scss";

function SimpleGallery({galleryTitle, gallery}) {
    return (
        <section className="gallery">
            <h3 className="gallery__title">{galleryTitle}</h3>
            <div className="gallery__container">
                {gallery.map((item) => (
                    <div className="gallery__card">
                    <img src={item.image_url} className="gallery__image"/>
                    <h4 className="gallery__name">{item.creation_name}</h4>
                    <p className="gallery__tag">{item.username}</p>
                </div>
                ))}
            </div>

            <div className="gallery__buttons">
                <button className="button button__primary gallery__button">Load More</button>
            </div>
        </section>
    )
}

export default SimpleGallery;