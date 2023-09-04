import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import ProfileCard from "../../components/ProfileCard/ProfileCard";
import SimpleGallery from "../../components/SimpleGallery/SimpleGallery";

function ProfilePage() {

    const { userId } = useParams(); // Pulls userId from URL
 
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
            })
    }, [])

    
//
// Simple Gallery Component
//

    const [gallery, setGallery] = useState([]); // Stores creations or challenges data from single user and passes to simple gallery component
    const [galleryTitle, setGalleryTitle] = useState(null); // Stores gallery title to pass to simple gallery component
    const [creationsTab, setCreationsTab] = useState(true); // Stores the gallery creations tab as true/false
    const [challengesTab, setChallengesTab] = useState(false); // Stores the gallery challenges tab as true/false

    
    // Calls database to set the simple gallery to challenges or creations data from user ID
    // Listens for creationsTab and challengesTab changes
    
    useEffect(() => {

        // If the challenges tab is true (challenges button clicked)
        // Sets the simple gallery data as list of challenges from the user
        // Does not set a gallery title 
        if (challengesTab) {
            axios
            .get(`http://localhost:8080/users/${userId}/challenges`)
            .then((res) => {
                setGallery(res.data)
            })
            .catch((error) => {
                console.log(error);
            })
        }

        // On load and if the creations tab is true (creations button clicked)
        // Sets the simple gallery data as list of creations from the user
        // Does not set a gallery title 
        axios
        .get(`http://localhost:8080/users/${userId}/creations`)
        .then((res) => {
            setGallery(res.data)
        })
        .catch((error) => {
            console.log(error);
        })
    }, [creationsTab, challengesTab]);

    // Button handler for creations tab
    // Sets creationsTab to true on click
    // Toggles ChallengesTab to false
    const handleCreationsTab = () => {
        setCreationsTab(true);
        setChallengesTab(false);
    }


    // Button handler for challenges tab
    // Sets challengesTab to true on click
    // Toggles CreationsTab to false
    const handleChallengesTab = () => {
        setCreationsTab(false);
        setChallengesTab(true);
    }

//
// Renders to Page
//

    return (
        <div>
            {/* Profile Component */}
            <ProfileCard data={data} />
            
            <div className="profile-gallery">

                {/* Gallery Tab Buttons */}
                <button id="creations" className="button" onClick={handleCreationsTab}>Creations</button>
                <button id="challenges" className="button" onClick={handleChallengesTab}>Challenges</button>
                
                {/* Simple Gallery Component */}
                {gallery.length > 1 ? <SimpleGallery galleryTitle={galleryTitle} gallery={gallery} /> : <p>None here yet.</p>}
            
            </div>
        </div>
    )
};

export default ProfilePage;