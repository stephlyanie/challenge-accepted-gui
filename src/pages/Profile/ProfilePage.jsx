import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import "./ProfilePage.scss";

import ProfileCard from "../../components/ProfileCard/ProfileCard";
import SimpleGallery from "../../components/SimpleGallery/SimpleGallery";

// Profile page (placeholder profile = brains)
function ProfilePage() {
  const { userId } = useParams(); // Pulls userId from URL

  // Sets filter id so that nothing is filtered in simple gallery
  const filterId = !userId;

  //
  // Profile Component
  //

  const [data, setData] = useState([]); // Stores profile data to pass to profile component

  useEffect(() => {
    axios
      .get(`http://localhost:8080/users/${userId}`)
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //
  // Simple Gallery Component
  //

  const [gallery, setGallery] = useState([]); // Stores creations or challenges data from single user and passes to simple gallery component
  const [galleryTitle, setGalleryTitle] = useState(null); // Stores gallery title to pass to simple gallery component
  const [activeTab, setActiveTab] = useState("creations"); // Stores the gallery creations tab as true/false

  // Calls database to set the simple gallery to challenges or creations data from user ID
  // Listens for creationsTab and challengesTab changes

  useEffect(() => {
    // If the challenges tab is true (challenges button clicked)
    // Sets the simple gallery data as list of challenges from the user
    // Does not set a gallery title
    if (activeTab === "challenges") {
      axios
        .get(`http://localhost:8080/users/${userId}/challenges`)
        .then((res) => {
          setGallery(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // On load and if the creations tab is true (creations button clicked)
    // Sets the simple gallery data as list of creations from the user
    // Does not set a gallery title
    if (activeTab === "creations") {
      axios
        .get(`http://localhost:8080/users/${userId}/creations`)
        .then((res) => {
          setGallery(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [activeTab]);

  const [creationsClass, setCreationsClass] = useState(
    "button profile-gallery__tab-button button__primary"
  );
  const [challengesClass, setChallengesClass] = useState(
    "button profile-gallery__tab-button"
  );

  // Button handler sets active tab to creations
  const handleCreationsTab = () => {
    setActiveTab("creations");
    setCreationsClass("button profile-gallery__tab-button button__primary");
    setChallengesClass("button profile-gallery__tab-button");
  };

  // Button handler sets active tab to challenges
  const handleChallengesTab = () => {
    setActiveTab("challenges");
    setCreationsClass("button profile-gallery__tab-button");
    setChallengesClass("button profile-gallery__tab-button button__primary");
  };

  // Renders to Page
  return (
    <div>
      {/* Profile Component */}
      <ProfileCard data={data} />

      <div className="profile-gallery">
        {/* Gallery Tab Buttons */}
        <button
          id="creations"
          className={creationsClass}
          onClick={handleCreationsTab}
        >
          Creations
        </button>
        <button
          id="challenges"
          className={challengesClass}
          onClick={handleChallengesTab}
        >
          Challenges
        </button>

        {/* Simple Gallery Component */}
        {gallery.length > 1 ? (
          <SimpleGallery
            galleryTitle={galleryTitle}
            gallery={gallery}
            filterId={filterId}
          />
        ) : (
          <p className="profile-gallery__none">None here yet.</p>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
