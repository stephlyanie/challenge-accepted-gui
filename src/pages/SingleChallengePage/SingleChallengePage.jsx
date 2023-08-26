import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import DetailsCard from "../../components/DetailsCard/DetailsCard";

function SingleChallengePage() {

    const [data, setData] = useState([]);
    const { challengeId } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8080/challenges/${challengeId}`)
            .then((res) => {
                console.log(res.data)
                setData(res.data[0]);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])


    return (
        <div>
            <DetailsCard data={data} />
        </div>
    )
};

export default SingleChallengePage;