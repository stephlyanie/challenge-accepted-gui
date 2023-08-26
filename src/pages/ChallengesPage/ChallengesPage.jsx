import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ItemCard from "../../components/ItemCard/ItemCard";

function ChallengesPage() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8080/challenges')
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])


    return (
        <div>
            <ItemCard data={data} />
        </div>
    )
};

export default ChallengesPage;