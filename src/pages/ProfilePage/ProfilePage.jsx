import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import ProfileCard from "../../components/ProfileCard/ProfileCard";
import SimpleGallery from "../../components/SimpleGallery/SimpleGallery";

function ProfilePage() {

    const { userId } = useParams();
    const [data, setData] = useState([]);
    const [gallery, setGallery] = useState([]);
    const [galleryTitle, setGalleryTitle] = useState(``);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/users/${userId}`)
            .then((res) => {
                setData(res.data[0]);
                setGalleryTitle(`Creations by ${res.data[0].username}`)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    useEffect(() => {
        axios
        .get(`http://localhost:8080/users/${userId}/creations`)
        .then((res) => {
            setGallery(res.data)
        })
        .catch((error) => {
            console.log(error);
        })
    }, []);

    // useEffect(() => {
    //     axios
    //     .get(`http://localhost:8080/users/${userId}/challenges`)
    //     .then((res) => {
    //         setChallenges(res.data);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     })
    // }, []);

    return (
        <div>
            <ProfileCard data={data} />
            <div className="">
                <button id="creations">Creations</button>
                <button id="challenges">Challenges</button>
                {gallery.length > 0 ? <SimpleGallery galleryTitle={galleryTitle} gallery={gallery} /> : <p>None here yet.</p>}
            </div>
        </div>
    )
};

export default ProfilePage;