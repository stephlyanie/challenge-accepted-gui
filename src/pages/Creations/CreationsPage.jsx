import { useEffect, useState } from "react";
import axios from "axios";

import ItemCard from "../../components/ItemCard/ItemCard";

function CreationsPage() {

    const [data, setData] = useState([]);
    const isChallenge = false;

    useEffect(() => {
        axios
            .get('http://localhost:8080/creations')
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])


    return (
        <div>
            <ItemCard data={data} isChallenge={isChallenge} />
        </div>
    )
};

export default CreationsPage;