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
    const filterId = creationId;

    useEffect(() => {
        axios
            .get(`http://localhost:8080/creations/${creationId}`)
            .then((res) => {
                setData(res.data[0]);
                setUserId(res.data[0].created_by_id)
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
                console.log(res.data)

                setGalleryTitle(`More creations by ${data.username}`)
                // To do filter out current creation
            })
            .then(() => {
                console.log("gallery: " + gallery)
            })
            .catch((error) => {
                console.log(error);
            })
    }, [userId])


    return (
        <div>
            <DetailsCard data={data} />
            {gallery.length > 0 ? <SimpleGallery galleryTitle={galleryTitle} gallery={gallery} filterId={filterId} /> : null}
        </div>
    )
};

export default SingleCreationPage;