// Styles
import "./HomePage.scss";

import { useEffect, useState } from "react";
import axios from "axios";

// Components
import Reel from "../../components/Reel/Reel";
import ItemCard from "../../components/ItemCard/ItemCard";

function HomePage() {
  const [reelData, setReelData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/categories")
      .then((res) => {
        setReelData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //
  // Item Card Component
  //

  const [itemData, setItemData] = useState([]);
  const [activeTab, setActiveTab] = useState("challenges"); // Stores the gallery creations tab as true/false

  // Calls database to set the simple gallery to challenges or creations data from user ID
  // Listens for creationsTab and challengesTab changes

  useEffect(() => {
    // On load and if the challenges tab is true (challenges button clicked)
    // Sets the item data as list of challenges 
    if (activeTab === "challenges") {
      axios
        .get(`http://localhost:8080/challenges`)
        .then((res) => {
          setItemData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // If creations tab is true (creations button clicked)
    // Sets the simple gallery data as list of creations 
    if (activeTab === "creations") {
      axios
        .get(`http://localhost:8080/creations`)
        .then((res) => {
          setItemData(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [activeTab]);

  const [creationsClass, setCreationsClass] = useState(
    "button home__tab-button"
  );

  const [challengesClass, setChallengesClass] = useState(
    "button home__tab-button button__primary"
  );

  // Button handler sets active tab to creations
  const handleCreationsTab = () => {
    setActiveTab("creations");
    setCreationsClass("button home__tab-button button__primary");
    setChallengesClass("button home__tab-button");
  };

  // Button handler sets active tab to challenges
  const handleChallengesTab = () => {
    setActiveTab("challenges");
    setCreationsClass("button home__tab-button");
    setChallengesClass("button home__tab-button button__primary");
  };

  return (
    <section className="home">
      <Reel data={reelData} />

      <div className="home__gallery">
        {/* Gallery Tab Buttons */}
        <div className="home__gallery-buttons">
            <button
            id="challenges"
            className={challengesClass}
            onClick={handleChallengesTab}
            >
            Challenges
            </button>
            <button
            id="creations"
            className={creationsClass}
            onClick={handleCreationsTab}
            >
            Creations
            </button>
        </div>

        {/* Simple Gallery Component */}
        <ItemCard data={itemData} />
      </div>
    </section>
  );
}

export default HomePage;
