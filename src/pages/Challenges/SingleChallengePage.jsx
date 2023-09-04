import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import DetailsCard from "../../components/DetailsCard/DetailsCard";
import SimpleGallery from "../../components/SimpleGallery/SimpleGallery";

function SingleChallengePage() {

    const { challengeId } = useParams();
    const [data, setData] = useState([]);
    const [gallery, setGallery] = useState([]);
    const galleryTitle = "Related Creations";
    const filterId = null;

    useEffect(() => {
        axios
            .get(`http://localhost:8080/challenges/${challengeId}`)
            .then((res) => {
                setData(res.data[0]);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    useEffect(() => {
        axios
        .get(`http://localhost:8080/challenges/${challengeId}/creations`)
        .then((res) => {
            setGallery(res.data);
            console.log(res.data)
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])


    return (
        <div>
            <DetailsCard data={data} />
            {gallery.length > 0 ? <SimpleGallery galleryTitle={galleryTitle} gallery={gallery} filterId={filterId} /> : null}
        </div>
    )
};

export default SingleChallengePage;