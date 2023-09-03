import { useRef } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import CreationForm from "../../components/Forms/CreationForm";

function CreateCreationPage() {
    const formRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();

        const { name, description, username, challenge } = formRef.current;
        const challengeIndex = event.target.challenge.selectedIndex;
        
        axios
        .post('http://localhost:8080/creations', {
            name: name.value,
            description: description.value,
            created_by_id: username.id,
            challenge_id: event.target.challenge.childNodes[challengeIndex].id
        })
        .catch((error) => (
            console.error(error)
        ))

      };

    return (
        <div>
            <CreationForm formRef={formRef} handleSubmit={handleSubmit} />
        </div>
    )
};

export default CreateCreationPage;