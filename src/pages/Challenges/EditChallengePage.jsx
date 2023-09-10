import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import ChallengeForm from "../../components/Forms/ChallengeForm";

function EditChallengePage() {
  // Create variables for form field values
  const [challenge, setChallenge] = useState("");
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
  const handleReset = () => {
    axios.get(`http://localhost:8080/challenges/${challengeId}`).then((res) => {
      setChallenge(res.data[0].name);
      document.getElementById("challenge").disabled = true;
      document.getElementById("challenge").className =
        "create-form__input create-form__select create-form__input--placeholder";

      setCategory(res.data[0].category);
      document.getElementById("category").disabled = true;
      document.getElementById("category").className =
        "create-form__input create-form__select create-form__input--placeholder";

      setType(res.data[0].type);
      document.getElementById("type").disabled = true;
      document.getElementById("type").className =
        "create-form__input create-form__select create-form__input--placeholder";

      setName("");
      setDescription("");
    });
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
        challengeId={challengeId}
        formRef={formRef}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      />
    </div>
  );
}

export default EditChallengePage;
