import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import ProfileCard from "../../components/ProfileCard/ProfileCard";

function ProfilePage() {

    const [data, setData] = useState([]);
    const { userId } = useParams();

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


    return (
        <div>
            <ProfileCard data={data} />
        </div>
    )
};

export default ProfilePage;