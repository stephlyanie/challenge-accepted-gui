import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import CreationForm from "../../components/Forms/CreationForm";

// Create a creation page
function CreateCreationPage() {
  // Create variables for form field values
  const [challenge, setChallenge] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const formRef = useRef();
  const navigate = useNavigate();

  // Function for submit button click event
  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, description, username } = formRef.current;
    // Stores the index of the selected challenge
    const challengeIndex = event.target.challenge.selectedIndex;

    // Inserts data to database
    // Then redirects to the new creation page
    axios
      .post("https://challenge-accepted-b63b428b2200.herokuapp.com/creations", {
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

  // Resets the form fields to empty when "Reset Form" clicked
  const handleReset = () => {
    setChallenge("");
    setCategory("");
    setType("");
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
        formRef={formRef}
        handleSubmit={handleSubmit}
        handleReset={handleReset}
      />
    </div>
  );
}

export default CreateCreationPage;
