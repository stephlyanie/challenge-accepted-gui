import "./SimpleGallery.scss";
import "../../styles/buttons.scss";

function SimpleGallery() {
    return (
        <section className="gallery">
            <h3 className="gallery__title">Title</h3>
            <div className="gallery__container">
                <div className="gallery__card">
                    <img src={require("../../assets/images/placeholder-3.webp")} className="gallery__image"/>
                    <h4 className="gallery__name">Name</h4>
                    <p className="gallery__tag">Username</p>
                </div>
                <div className="gallery__card">
                    <img src={require("../../assets/images/placeholder-3.webp")} className="gallery__image"/>
                    <h4 className="gallery__name">Name</h4>
                    <p className="gallery__tag">Username</p>
                </div>
                <div className="gallery__card">
                    <img src={require("../../assets/images/placeholder-3.webp")} className="gallery__image"/>
                    <h4 className="gallery__name">Name</h4>
                    <p className="gallery__tag">Username</p>
                </div>
            </div>

            <div className="gallery__buttons">
                <button className="button button__primary gallery__button">Load More</button>
            </div>
        </section>
    )
}

export default SimpleGallery;