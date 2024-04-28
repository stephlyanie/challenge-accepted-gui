import { useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

import CreationForm from "../../components/Forms/CreationForm";

// Create for a specific challenge page
function SpecificChallengeCreationPage() {
  // Create variables for form field values
  const [challenge, setChallenge] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const formRef = useRef();
  const navigate = useNavigate();

  // Captures challenge id from url and saves in variable
  const { challengeId } = useParams();

  // Function for submit button click event
  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, description, username } = formRef.current;

    // Inserts data to database
    // Then redirects to the new creation page
    axios
      .post("https://challenge-accepted-b63b428b2200.herokuapp.com/creations", {
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

  // Resets the name and description fields to empty when "Reset Form" clicked
  const handleReset = (event) => {
    event.preventDefault();

    setName("");
    setDescription("");
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
        challengeId={challengeId}
        formRef={formRef}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      />
      <div className="button__container">
        {/* Button to create a different type of challenge */}
        <Link to="/create/creation" className="button">
          Create Something Else
        </Link>
      </div>
    </div>
  );
}

export default SpecificChallengeCreationPage;
