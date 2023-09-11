import { useEffect, useState } from "react";
import axios from "axios";

import ItemCard from "../../components/ItemCard/ItemCard";

// List of creations page
function CreationsPage() {
  // Stores data of single challenge or creation from axios call to database
  const [data, setData] = useState([]);

  // Identifies that the page is not a challenge
  const isChallenge = false;

  // Pulls data of single creation from database
  useEffect(() => {
    axios
      .get("http://localhost:8080/creations")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Renders to page
  return (
    <div>
      <ItemCard data={data} isChallenge={isChallenge} />
    </div>
  );
}

export default CreationsPage;
