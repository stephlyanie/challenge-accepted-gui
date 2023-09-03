import "./ItemCard.scss";
import "../../styles/buttons.scss";

function ItemCard({ data }) {
  return (
    <section>
      {/* Maps through axios data to create item cards of each challenge*/}
      {data.map((item) => (
        <div key={item.id} className="item">
            <div className="item__creator">
              <div className="item__creator-container">
                <figure className="item__creator-image-container">
                  <img
                    src={require("../../assets/images/placeholder-3.webp")}
                    className="item__creator-image"
                  />
                </figure>
                <p className="item__creator-name">{item.username}</p>
              </div>
            </div>
          <div className="item__container">
            <img src={item.image_url} className="item__image" />
          
            <div className="item__details">
                <h3 className="item__details-title">{item.name}</h3>
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
                <p className="item__details-tag">{item.category}</p>
                <p className="item__details-tag">{item.type}</p>
                </div>
                <p className="item__details-description">{item.description}</p>
                <div className="item__details-buttons">
                <button className="button button__primary">Create</button>
                <button className="button">Learn</button>
                </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ItemCard;
