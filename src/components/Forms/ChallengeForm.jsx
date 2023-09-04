import { useEffect, useState } from "react";
import axios from "axios";
import "./Form.scss";
import "../../styles/buttons.scss";
import "../../styles/forms.scss";

function ChallengeForm({ challengeId, formRef, handleSubmit }) {
  // Create variables for form field values
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // Store dropdown values for challenges, catetories and types select form fields
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);

  // Store the category or type id
  const [categoryId, setCategoryId] = useState("");
  const [typeId, setTypeId] = useState("");

  // If there is a challengeId in the URL
  // 1. Set all form field values from database
  useEffect(() => {
    if (challengeId) {
      axios
        .get(`http://localhost:8080/challenges/${challengeId}`)
        .then((res) => {
          console.log(res.data);
          setCategory(res.data[0].category);
          setType(res.data[0].type);
          setName(res.data[0].name);
          setDescription(res.data[0].description);
        });
    }
  }, []);

  // Create dropdown values for catetories
  // Listens for type to be selected
  useEffect(() => {
    axios
      .get("http://localhost:8080/categories/")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // If a type is selected
    // Populates the category field accordingly
    if (type) {
      axios.get(`http://localhost:8080/types/${typeId}`).then((res) => {
        setCategory(res.data[0].category_name);
      });
    }
  }, [type]);

  // Create dropdown values for catetories
  // Listens for category to be selected
  useEffect(() => {
    axios
      .get("http://localhost:8080/types/")
      .then((res) => {
        setTypes(res.data);
      })
      .catch((error) => {
        console.error(error);
      });

    // If a category is selected
    // Populates the list of types accordingly
    if (category) {
      axios
        .get(`http://localhost:8080/categories/${categoryId}/types`)
        .then((res) => {
          setTypes(res.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [category]);

  // Handles form field changes
  const handleChangeCategory = (event) => {
    setCategory(event.target.value);

    // Captures the category index from the event and sets the category id
    const categoryIndex = event.target.selectedIndex;
    setCategoryId(event.target.childNodes[categoryIndex].id);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);

    // Captures the type index from the event and sets the type id
    const typeIndex = event.target.selectedIndex;
    setTypeId(event.target.childNodes[typeIndex].id);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  // Resets the form when "Reset Form" clicked
  const handleReset = () => {
    // If there is a challengeId in URL
    // Resets all fields
    if (challengeId) {
      axios
        .get(`http://localhost:8080/challenges/${challengeId}`)
        .then((res) => {
          setName(res.data[0].name);
          setCategory(res.data[0].category);
          setType(res.data[0].type);
          setDescription(res.data[0].description);
        });
    }

    // If there is not a challengeId or a creationId in URL
    // Clears all fields
    else {
      setName("");
      setCategory("");
      setType("");
      setDescription("");
    }
  };

  // Renders to page
  return (
    <form ref={formRef} className="create-form" onSubmit={handleSubmit} onReset={handleReset}>
      <section>
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

        {/* Challenge Name */}
        <div className="create-form__field">
          <input
            type="text"
            className="create-form__input"
            name="name"
            placeholder="– name your challenge –"
            onChange={handleChangeName}
            value={name}
          />
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
            <option className="create-form__placeholder" value="" disabled>
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
            <option className="create-form__placeholder" value="" disabled>
              – pick a type –
            </option>
            {types.map((type) => (
              <option key={type.id} id={type.id} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </div>

        {/* Challenge Description */}
        <div className="create-form__field">
          <textarea
            className="create-form__textarea"
            name="description"
            placeholder="– describe your challenge –"
            onChange={handleChangeDescription}
            value={description}
          ></textarea>
        </div>
      </section>
      <section className="create-form__buttons">
        <div className="create-form__buttons-container">
          {/* Reset Button */}
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

export default ChallengeForm;
