import { useRef } from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import ChallengeForm from "../../components/Forms/ChallengeForm";

function CreateChallengePage() {
    const formRef = useRef();
    const { challengeId } = useParams();
    console.log(challengeId)

    const handleSubmit = (event) => {
        event.preventDefault();

        const { name, description, username } = formRef.current;
        const typeIndex = event.target.type.selectedIndex;
        
        axios
        .put(`http://localhost:8080/challenges/${challengeId}`, {
            name: name.value,
            description: description.value,
            created_by_id: username.id,
            type_id: event.target.type.childNodes[typeIndex].id
        })
        .catch((error) => (
            console.error(error)
        ))
      };

    return (
        <div>
            <ChallengeForm challengeId={challengeId} formRef={formRef} handleSubmit={handleSubmit} />
        </div>
    )
};

export default CreateChallengePage;