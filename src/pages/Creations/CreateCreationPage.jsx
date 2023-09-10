import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import CreationForm from "../../components/Forms/CreationForm";

function CreateCreationPage() {
  // Create variables for form field values
  const [challenge, setChallenge] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const formRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, description, username, challenge } = formRef.current;
    const challengeIndex = event.target.challenge.selectedIndex;

    axios
      .post("http://localhost:8080/creations", {
        name: name.value,
        description: description.value,
        created_by_id: username.id,
        challenge_id: event.target.challenge.childNodes[challengeIndex].id,
      })
      .then((res) => {
        navigate(`/creations/${res.data}`);
        navigate(0);
      })
      .catch((error) => console.error(error));
  };

  // Resets the form when "Reset Form" clicked
  const handleReset = (event) => {
    console.log(event)
    setChallenge("");
    setCategory("");
    setType("");
    setName("");
    setDescription("");
  };

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
        formRef={formRef}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      />
    </div>
  );
}

export default CreateCreationPage;
