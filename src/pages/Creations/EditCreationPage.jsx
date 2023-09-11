import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import CreationForm from "../../components/Forms/CreationForm";

// Edit creation page
function EditCreationPage() {
  // Create variables for form field values
  const [challenge, setChallenge] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const formRef = useRef();

  // Captures creation id from url and saves in variable
  const { creationId } = useParams();

  // Function for submit button click event
  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, description, username } = formRef.current;
    // Stories the index of the selected challenge
    const challengeIndex = event.target.challenge.selectedIndex;

    // Updates data to database
    axios
      .put(`http://localhost:8080/creations/${creationId}`, {
        name: name.value,
        description: description.value,
        created_by_id: username.id,
        challenge_id: event.target.challenge.childNodes[challengeIndex].id,
      })
      .catch((error) => console.error(error));
  };

  // Resets the form from database when "Reset Form" clicked
  const handleReset = (event) => {
    event.preventDefault();

    // Resets all fields
    axios.get(`http://localhost:8080/creations/${creationId}`).then((res) => {
      setChallenge(res.data[0].challenge);
      setCategory(res.data[0].category);
      setType(res.data[0].type);
      setName(res.data[0].name);
      setDescription(res.data[0].description);
    });
  };

  // Renders to page
  return (
    <div>
      <CreationForm
        challenge={challenge}
        setChallenge={setChallenge}
        category={category}
        setCategory={setCategory}
        type={type}
        setType={setType}
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        creationId={creationId}
        formRef={formRef}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      />
    </div>
  );
}

export default EditCreationPage;
