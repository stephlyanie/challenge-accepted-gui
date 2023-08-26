import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import DetailsCard from "../../components/DetailsCard/DetailsCard";

function SingleCreationPage() {

    const [data, setData] = useState([]);
    const { creationId } = useParams();

    useEffect(() => {
        axios
            .get(`http://localhost:8080/creations/${creationId}`)
            .then((res) => {
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

export default SingleCreationPage;