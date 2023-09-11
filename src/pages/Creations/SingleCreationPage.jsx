import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import DetailsCard from "../../components/DetailsCard/DetailsCard";
import SimpleGallery from "../../components/SimpleGallery/SimpleGallery";

// Single creation page
function SingleCreationPage() {
  // Captures creation id from url and saves in variable
  const { creationId } = useParams();

  // Stores data of single challenge or creation from axios call to database
  const [data, setData] = useState([]);

  // Stores user Id to create gallery of creations by same user
  const [userId, setUserId] = useState();

  // Stores data of related creations from axios call to database
  const [gallery, setGallery] = useState([]);

  // Sets gallery title
  const [galleryTitle, setGalleryTitle] = useState(``); // Stores gallery title to pass to simple gallery component

  // Sets filter id to be able to filter the featured item
  const filterId = creationId;

  // Pulls data of single creation from database
  useEffect(() => {
    axios
      .get(`http://localhost:8080/creations/${creationId}`)
      .then((res) => {
        setData(res.data[0]);
        setUserId(res.data[0].created_by_id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Pulls data of all creations made by same user
  useEffect(() => {
    axios
      .get(`http://localhost:8080/users/${userId}/creations`)
      .then((res) => {
        setGallery(res.data);
        setGalleryTitle(`More creations by ${data.username}`);
        // To do filter out current creation
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userId]);

  // Renders to page
  return (
    <div>
      <DetailsCard data={data} />

      {/* If there other creations by same user, show a gallery */}
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

export default SingleCreationPage;
