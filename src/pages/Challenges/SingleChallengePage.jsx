import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import DetailsCard from "../../components/DetailsCard/DetailsCard";
import ItemCard from "../../components/ItemCard/ItemCard";
import SimpleGallery from "../../components/SimpleGallery/SimpleGallery";

import "./SingleChallengePage.scss";

// Landing page for a single challenge
function SingleChallengePage() {
  // Captures challenge id from url and saves in variable
  const { challengeId } = useParams();

  // Stores data of single challenge or creation from axios call to database
  const [data, setData] = useState([]);

  // Stores data of related creations from axios call to database
  const [gallery, setGallery] = useState([]);

  // Sets gallery title
  const galleryTitle = "Related Creations";

  // Sets filter id to be able to filter the featured item
  const filterId = null;


  // Pulls data of single challenge from database
  useEffect(() => {
    axios
      .get(`https://challenge-accepted-b63b428b2200.herokuapp.com/challenges/${challengeId}`)
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Pulls data of all creations made for a specific challenge
  useEffect(() => {
    axios
      .get(`https://challenge-accepted-b63b428b2200.herokuapp.com/challenges/${challengeId}/creations`)
      .then((res) => {
        setGallery(res.data);
        console.log(res.data)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Renders to page
  return (
    <div className="challenge">
      <section className="challenge__details">
        <DetailsCard data={data} />
      </section>
      {/* If there are related creations, show a gallery */}
      <section className="challenge__gallery">
        {gallery.length > 0 ? (
          <ItemCard data={gallery} isChallenge={false} />
        ) : null}
      </section>
    </div>
  );
}

export default SingleChallengePage;
