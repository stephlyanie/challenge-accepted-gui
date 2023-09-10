import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Form.scss";
import "../../styles/buttons.scss";
import "../../styles/forms.scss";

function CreationForm({
  challenge,
  setChallenge,
  category,
  setCategory,
  type,
  setType,
  name,
  setName,
  description,
  setDescription,
  creationId,
  challengeId,
  formRef,
  handleSubmit,
  handleReset,
}) {

  // Store dropdown values for challenges, catetories and types select form fields
  const [challenges, setChallenges] = useState([]);
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);

  // Store the challenge or category id
  const [getChallengeId, setGetChallengeId] = useState("");
  const [getCategoryId, setGetCategoryId] = useState("");

  // If there is a challenge Id in the URL:
  // Populate the challenge, category and type fields from database
  // Disable the form fields, so user cannot edit challenge, category or type
  useEffect(() => {
    if (challengeId) {
      axios
        .get(`http://localhost:8080/challenges/${challengeId}`)
        .then((res) => {
          setChallenge(res.data[0].name);
          setCategory(res.data[0].category);
          setType(res.data[0].type);
          document.getElementById("challenge").disabled = true;
          document.getElementById("challenge").className =
            "create-form__input create-form__select create-form__input--placeholder";
          document.getElementById("category").disabled = true;
          document.getElementById("category").className =
            "create-form__input create-form__select create-form__input--placeholder";
          document.getElementById("type").disabled = true;
          document.getElementById("type").className =
            "create-form__input create-form__select create-form__input--placeholder";
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  // If there is a creationId in the URL
  // Set all form field values from database
  useEffect(() => {
    if (creationId) {
      axios.get(`http://localhost:8080/creations/${creationId}`).then((res) => {
        setChallenge(res.data[0].challenge);
        setCategory(res.data[0].category);
        setType(res.data[0].type);
        setName(res.data[0].name);
        setDescription(res.data[0].description);
      });
    }
  }, []);

  // Listen for change in challenge form field value
  useEffect(() => {
    // If no challenge value
    // Set list of challenges to all challenges in database
    if (!challenge) {
      axios
        .get("http://localhost:8080/challenges")
        .then((res) => {
          setChallenges(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    // Otherwise
    // Set the category based on the challenge Id
    // If no type already, set the type based on the challenge Id
    if (challenge) {
      axios
        .get(`http://localhost:8080/challenges/${getChallengeId}`)
        .then((res) => {
          setCategory(res.data[0].category);

          if (!type) {
            setType(res.data[0].type);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [challenge]);

  // Create dropdown values for catetories
  useEffect(() => {
    axios
      .get("http://localhost:8080/categories/")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Listen for change in category form field value
  useEffect(() => {
    // If no category value
    // Set list of types from database
    axios
      .get("http://localhost:8080/types/")
      .then((res) => {
        setTypes(res.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // Otherwise
    // Set type based on the category Id
    if (category) {
      axios
        .get(`http://localhost:8080/categories/${getCategoryId}/types`)
        .then((res) => {
          setTypes(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [category]);

  // Handles form field changes
  const handleChangeChallenge = (event) => {
    setChallenge(event.target.value);

    // Captures the challenge index from the event and sets the challenge id
    const challengeIndex = event.target.selectedIndex;
    setGetChallengeId(event.target.childNodes[challengeIndex].id);
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);

    // Captures the category index from the event and sets the category id
    const categoryIndex = event.target.selectedIndex;
    setGetCategoryId(event.target.childNodes[categoryIndex].id);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  // Renders to page
  return (
    <form
      id="create-form"
      ref={formRef}
      className="create-form"
      onSubmit={handleSubmit}
      onReset={handleReset}
    >
      <section className="create-form__container">
        {/* Default/Placeholder User */}
        <div className="create-form__field">
          <input
            type="text"
            className="create-form__input create-form__input--placeholder"
            name="username"
            placeholder="– username –"
            value="brains"
            id="DADDA3C9-C1F8-4BAF-AC74-05AABED44DD5"
          />
        </div>

        {/* Challenge Dropdown Menu */}
        <div className="create-form__field">
          <select
            className="create-form__input create-form__select"
            name="challenge"
            id="challenge"
            onChange={handleChangeChallenge}
            value={challenge}
          >
            <option value="" hidden defaultValue>
              – pick a challenge –
            </option>
            {challenges.map((challenge) => (
              <option
                key={challenge.id}
                id={challenge.id}
                value={challenge.name}
              >
                {challenge.name}
              </option>
            ))}
          </select>
        </div>

        {/* Category Dropdown Menu */}
        <div className="create-form__field">
          <select
            className="create-form__input create-form__select"
            name="category"
            id="category"
            onChange={handleChangeCategory}
            value={category}
          >
            <option className="create-form__placeholder" value="" hidden defaultValue>
              – pick a category –
            </option>
            {categories.map((category) => (
              <option key={category.id} id={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        {/* Type Dropdown Menu */}
        <div className="create-form__field">
          <select
            className="create-form__input create-form__select"
            name="type"
            id="type"
            onChange={handleChangeType}
            value={type}
          >
            <option className="create-form__placeholder" value="" hidden defaultValue>
              – pick a type –
            </option>
            {types.map((type) => (
              <option key={type.id} id={type.id} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        {/* Creation Name */}
        <div className="create-form__field">
          <input
            type="text"
            className="create-form__input"
            name="name"
            placeholder="– name your creation –"
            onChange={handleChangeName}
            value={name}
          />
        </div>

        {/* Creation Description */}
        <div className="create-form__field">
          <textarea
            className="create-form__textarea"
            name="description"
            placeholder="– describe your creation –"
            onChange={handleChangeDescription}
            value={description}
          ></textarea>
        </div>
      </section>
      <section className="create-form__buttons">
        {/* Reset Button */}
        <div className="create-form__buttons-container">
          <button
            type="reset"
            className="button button__secondary create-form__button-reset"
          >
            Reset Form
          </button>

          {/* Submit Button */}
          <input
            type="submit"
            className="button button__primary create-form__button-submit"
            value="Submit"
          />
        </div>
      </section>
    </form>
  );
}

export default CreationForm;
