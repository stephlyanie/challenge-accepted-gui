import { useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import CreationForm from "../../components/Forms/CreationForm";

function SpecificChallengeCreationPage() {
    const formRef = useRef();
    const navigate = useNavigate();
    const { challengeId } = useParams();

    const handleSubmit = (event) => {
        event.preventDefault();

        const { name, description, username } = formRef.current;
        
        axios
        .post('http://localhost:8080/creations', {
            name: name.value,
            description: description.value,
            created_by_id: username.id,
            challenge_id: challengeId
        })
        .then((res) => {
            navigate(`/creations/${res.data}`)
            navigate(0)
        })
        .catch((error) => (
            console.error(error)
        ))
      };

    return (
        <div>
            <CreationForm challengeId={challengeId} formRef={formRef} handleSubmit={handleSubmit} />
            <div className="button__container">
                <Link to="/create/creation" className="button">Create Something Else</Link>
            </div>
        </div>
    )
};

export default SpecificChallengeCreationPage;