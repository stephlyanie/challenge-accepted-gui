import { useRef } from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import CreationForm from "../../components/Forms/CreationForm";

function EditCreationPage() {
    const formRef = useRef();
    const { creationId } = useParams();

    const handleSubmit = (event) => {
        event.preventDefault();

        const { name, description, username } = formRef.current;
        const challengeIndex = event.target.challenge.selectedIndex;
        
        axios
        .put(`http://localhost:8080/creations/${creationId}`, {
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
            <CreationForm creationId={creationId} formRef={formRef} handleSubmit={handleSubmit} />
        </div>
    )
};

export default EditCreationPage;