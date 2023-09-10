import { useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import CreationForm from "../../components/Forms/CreationForm";

function SpecificChallengeCreationPage() {
  // Create variables for form field values
  const [challenge, setChallenge] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const formRef = useRef();
  const navigate = useNavigate();
  const { challengeId } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, description, username } = formRef.current;

    axios
      .post("http://localhost:8080/creations", {
        name: name.value,
        description: description.value,
        created_by_id: username.id,
        challenge_id: challengeId,
      })
      .then((res) => {
        navigate(`/creations/${res.data}`);
        navigate(0);
      })
      .catch((error) => console.error(error));
  };

  // Resets the form when "Reset Form" clicked
  const handleReset = (event) => {
    event.preventDefault();
    
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
        challengeId={challengeId}
        formRef={formRef}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      />
      <div className="button__container">
        <Link to="/create/creation" className="button">
          Create Something Else
        </Link>
      </div>
    </div>
  );
}

export default SpecificChallengeCreationPage;
