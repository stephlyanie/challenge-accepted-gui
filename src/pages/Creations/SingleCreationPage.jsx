import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import DetailsCard from "../../components/DetailsCard/DetailsCard";
import SimpleGallery from "../../components/SimpleGallery/SimpleGallery";

function SingleCreationPage() {

    const [data, setData] = useState([]);
    const { creationId } = useParams();
    const [userId, setUserId] = useState();
    const [gallery, setGallery] = useState([]);
    const [galleryTitle, setGalleryTitle] = useState(``); // Stores gallery title to pass to simple gallery component

    useEffect(() => {
        axios
            .get(`http://localhost:8080/creations/${creationId}`)
            .then((res) => {
                setData(res.data[0]);
                console.log(res.data[0].created_by_id)
                setUserId(res.data[0].created_by_id)
                console.log(userId)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    useEffect(() => {
        axios
            .get(`http://localhost:8080/users/${userId}/creations`)
            .then((res) => {
                setGallery(res.data);
                setGalleryTitle(`More creations by ${data.username}`)
                // To do filter out current creation
            })
            .catch((error) => {
                console.log(error);
            })
    }, [userId])


    return (
        <div>
            <DetailsCard data={data} />
            {gallery.length > 1 ? <SimpleGallery galleryTitle={galleryTitle} gallery={gallery} /> : <p></p>}
        </div>
    )
};

export default SingleCreationPage;