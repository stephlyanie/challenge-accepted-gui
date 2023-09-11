import { useEffect, useState } from "react";
import axios from "axios";

import ItemCard from "../../components/ItemCard/ItemCard";

// List of challenges page
function ChallengesPage() {
  // Stores data of single challenge or creation from axios call to database
  const [data, setData] = useState([]);

  // Identifies that the page is a challenge
  const isChallenge = true;

  // Pulls data of single challenge from database
  useEffect(() => {
    axios
      .get("http://localhost:8080/challenges")
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

export default ChallengesPage;
