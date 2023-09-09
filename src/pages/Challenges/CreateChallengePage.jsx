import { useRef } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ChallengeForm from "../../components/Forms/ChallengeForm";

function CreateChallengePage() {
    const formRef = useRef();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const { name, description, username } = formRef.current;
        const typeIndex = event.target.type.selectedIndex;
        
        axios
        .post('http://localhost:8080/challenges', {
            name: name.value,
            description: description.value,
            created_by_id: username.id,
            type_id: event.target.type.childNodes[typeIndex].id
        })
        .then((res) => {
            navigate(`/challenges/${res.data}`)
            navigate(0)
        })
        .catch((error) => (
            console.error(error)
        ))
      };

    return (
        <div>
            <ChallengeForm formRef={formRef} handleSubmit={handleSubmit} />
        </div>
    )
};

export default CreateChallengePage;