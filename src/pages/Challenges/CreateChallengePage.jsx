import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import ChallengeForm from "../../components/Forms/ChallengeForm";

function CreateChallengePage() {
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

    const { name, description, username } = formRef.current;
    const typeIndex = event.target.type.selectedIndex;

    axios
      .post("http://localhost:8080/challenges", {
        name: name.value,
        description: description.value,
        created_by_id: username.id,
        type_id: event.target.type.childNodes[typeIndex].id,
      })
      .then((res) => {
        navigate(`/challenges/${res.data}`);
        navigate(0);
      })
      .catch((error) => console.error(error));
  };

  // Resets the form when "Reset Form" clicked
  const handleReset = () => {
    setCategory("");
    setType("");
    setName("");
    setDescription("");
  };

  return (
    <div>
      <ChallengeForm
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

export default CreateChallengePage;
