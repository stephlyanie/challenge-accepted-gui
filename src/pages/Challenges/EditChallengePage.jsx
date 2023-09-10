import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ChallengeForm from "../../components/Forms/ChallengeForm";

function EditChallengePage() {
  // Create variables for form field values
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const formRef = useRef();
  const { challengeId } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, description, username } = formRef.current;
    const typeIndex = event.target.type.selectedIndex;

    axios
      .put(`http://localhost:8080/challenges/${challengeId}`, {
        name: name.value,
        description: description.value,
        created_by_id: username.id,
        type_id: event.target.type.childNodes[typeIndex].id,
      })
      .catch((error) => console.error(error));
  };

  // Resets the form when "Reset Form" clicked
  const handleReset = (event) => {
    event.preventDefault();

    axios.get(`http://localhost:8080/challenges/${challengeId}`).then((res) => {
      setName(res.data[0].name);
      setCategory(res.data[0].category);
      setType(res.data[0].type);
      setDescription(res.data[0].description);
    });
  };

  return (
    <div>
      <ChallengeForm
        category={category}
        setCategory={setCategory}
        type={type}
        setType={setType}
        name={name}
        setName={setName}
        description={description}
        setDescription={setDescription}
        challengeId={challengeId}
        formRef={formRef}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      />
    </div>
  );
}

export default EditChallengePage;
