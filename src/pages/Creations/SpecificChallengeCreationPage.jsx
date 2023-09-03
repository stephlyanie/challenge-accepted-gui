import { useRef } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import CreationForm from "../../components/Forms/CreationForm";

function SpecificChallengeCreationPage() {
    const formRef = useRef();
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
        .catch((error) => (
            console.error(error)
        ))
      };

    return (
        <div>
            <CreationForm challengeId={challengeId} formRef={formRef} handleSubmit={handleSubmit} />
            <Link to="/create/challenge">Create Something Else</Link>
        </div>
    )
};

export default SpecificChallengeCreationPage;