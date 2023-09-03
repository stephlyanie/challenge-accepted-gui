import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CreationForm.scss";
import "../../styles/buttons.scss";
import "../../styles/forms.scss";

function ChallengeForm({ challengeId, formRef, handleSubmit }) {
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);

  const [categoryId, setCategoryId] = useState("");
  const [typeId, setTypeId] = useState("");

  useEffect(() => {
    if (challengeId) {
      // axios to challenge id to set data
      axios
      .get(`http://localhost:8080/challenges/${challengeId}`)
      .then((res) => {
        console.log(res.data)
        setCategory(res.data[0].category)
        setType(res.data[0].type)
        setName(res.data[0].name)
        setDescription(res.data[0].description)
      })
    }
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/categories/")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => {
        console.error(error);
      });

    if (type) {
      axios.get(`http://localhost:8080/types/${typeId}`).then((res) => {
        setCategory(res.data[0].category_name);
      });
    }
  }, [type]);

  useEffect(() => {
    // Sets the list of types depending on the selected category
    axios
      .get("http://localhost:8080/types/")
      .then((res) => {
        setTypes(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
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
  // const handleChangeUsername = (event) => {
  //   setUsername(event.target.value);
  // };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
    const categoryIndex = event.target.selectedIndex;
    setCategoryId(event.target.childNodes[categoryIndex].id);
  };

  const handleChangeType = (event) => {
    setType(event.target.value);
    const typeIndex = event.target.selectedIndex;
    setTypeId(event.target.childNodes[typeIndex].id);
  };

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  return (
    <form ref={formRef} className="create-form" onSubmit={handleSubmit}>
      <section>
        <div className="create-form__field">
          {/* <label className="create-form__label" htmlFor="name">
            User
          </label> */}
          <input
            type="text"
            className="create-form__input"
            name="username"
            placeholder="Username"
            // onChange={handleChangeUsername}
            value="brains"
            id="DADDA3C9-C1F8-4BAF-AC74-05AABED44DD5"
          />
        </div>

        <div className="create-form__field">
          {/* <label className="create-form__label" htmlFor="name">
            Name
          </label> */}
          <input
            type="text"
            className="create-form__input"
            name="name"
            placeholder="Name your challenge"
            onChange={handleChangeName}
            value={name}
          />
        </div>

        <div className="create-form__field">
          {/* <label className="create-form__label" htmlFor="category">
            Category
          </label> */}
          <select
            className="create-form__input create-form__select"
            name="category"
            id="category"
            onChange={handleChangeCategory}
            value={category}
          >
            <option className="create-form__placeholder" value="" disabled>
              Pick a category for your challenge
            </option>
            {categories.map((category) => (
              <option key={category.id} id={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="create-form__field">
          {/* <label className="create-form__label" htmlFor="type">
            Type
          </label> */}
          <select
            className="create-form__input create-form__select"
            name="type"
            id="type"
            onChange={handleChangeType}
            value={type}
          >
            <option className="create-form__placeholder" value="" disabled>
              Pick a type for your challenge
            </option>
            {types.map((type) => (
              <option key={type.id} id={type.id} value={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
        {/* Description */}
        <div className="create-form__field">
          {/* <label className="create-form__label" htmlFor="description">
            Description
          </label> */}
          <textarea
            className="create-form__textarea"
            name="description"
            placeholder="Describe your challenge"
            onChange={handleChangeDescription}
            value={description}
          ></textarea>
        </div>
      </section>
      <section className="inventory-form__buttons">
        <div className="inventory-form__buttons-container">
          <>
            <button
              type="reset"
              className="button button__secondary inventory-form__button-cancel"
            >
              Cancel
            </button>
          </>
          <input
            type="submit"
            className="button button__primary inventory-form__button-submit"
            value="+ Add Item"
          />
        </div>
      </section>
    </form>
  );
}

export default ChallengeForm;
