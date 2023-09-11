import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import DetailsCard from "../../components/DetailsCard/DetailsCard";
import SimpleGallery from "../../components/SimpleGallery/SimpleGallery";

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
      .get(`http://localhost:8080/challenges/${challengeId}`)
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
      .get(`http://localhost:8080/challenges/${challengeId}/creations`)
      .then((res) => {
        setGallery(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Renders to page
  return (
    <div>
      <DetailsCard data={data} />

      {/* If there are related creations, show a gallery */}
      {gallery.length > 0 ? (
        <SimpleGallery
          galleryTitle={galleryTitle}
          gallery={gallery}
          filterId={filterId}
        />
      ) : null}
    </div>
  );
}

export default SingleChallengePage;
