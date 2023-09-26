// Styles
import "./Reel.scss";

// Icons
import { ReactComponent as Left } from "../../assets/images/chevron-left.svg";
import { ReactComponent as Right } from "../../assets/images/chevron-right.svg";
import ItemCard from "../ItemCard/ItemCard";

function Reel({ data }) {
    
    return (
        <section className="reel">
            <Left className="reel__icon" />
            <div className="reel__container">
                {data.map((item) => (
                    <div key={item.id} className="reel__container">
                        <p className="reel__title">{item.name}</p>
                    </div>
                ))}
            </div>
            <Right className="reel__icon" />
        </section>
    );
}

export default Reel;