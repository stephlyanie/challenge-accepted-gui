import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./CreationForm.scss";
import "../../styles/buttons.scss";
import "../../styles/forms.scss";


function CreationForm() {
    const [challenge, setChallenge] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  const [challenges, setChallenges] = useState([]);
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);

  const [challengeId, setChallengeId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [typeId, setTypeId] = useState("");


  useEffect(() => {
    if (!challenge) {
        axios
        .get('http://localhost:8080/challenges')
        .then((res) => {
            setChallenges(res.data);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    if (challenge) {
        axios
        .get(`http://localhost:8080/challenges/${challengeId}`)
        .then((res) => {
            setCategory(res.data[0].category);
            setType(res.data[0].type)
        })
        .catch((error) => {
            console.log(error);
        })
    }
}, [challenge])

useEffect(() => {
axios
.get('http://localhost:8080/categories/')
.then((res) => {
    setCategories(res.data)
})
.catch((error) => {
    console.error(error);
})
}, [])

useEffect(() => {
// Sets the list of types depending on the selected category
    axios
    .get('http://localhost:8080/types/')
    .then((res) => {
        setTypes(res.data)
    })
    .catch((error) => {
        console.error(error);
    })
if (category) {
    console.log(categoryId)
    axios
    .get(`http://localhost:8080/categories/${categoryId}/types`)
    .then((res) => {
        setTypes(res.data)
    })
    .catch((error) => {
        console.error(error);
    })
}
}, [category])
  

//   Handles form field changes
  const handleChangeChallenge = (event) => {
    setChallenge(event.target.value);
    const challengeIndex = event.target.selectedIndex
    setChallengeId(event.target.childNodes[challengeIndex].id)
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
    const categoryIndex = event.target.selectedIndex
    setCategoryId(event.target.childNodes[categoryIndex].id);
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

  return (
    <form>
        <section>
            <div className="create-form__field">
                <label className="create-form__label" htmlFor="challenge">
                Challenge
                </label>
                <select
                className="create-form__input create-form__select"
                name="challenge"
                id="challenge"
                onChange={handleChangeChallenge}
                value={challenge}
                >
                    <option className="create-form__placeholder" value="" disabled>
                        Please select
                    </option>
                    {challenges.map((challenge) => (
                        <option key={challenge.id} id={challenge.id} value={challenge.name}>{challenge.name}</option>
                    ))}
                </select>
            </div>
            <div className="create-form__field">
                <label className="create-form__label" htmlFor="category">
                Category
                </label>
                <select
                className="create-form__input create-form__select"
                name="category"
                id="category"
                onChange={handleChangeCategory}
                value={category}
                >
                    <option className="create-form__placeholder" value="" disabled>
                        Please select
                    </option>
                    {categories.map((category) => (
                        <option key={category.id} id={category.id} value={category.name}>{category.name}</option>
                    ))}
                </select>
            </div>
            <div className="create-form__field">
                <label className="create-form__label" htmlFor="type">
                Type
                </label>
                <select
                className="create-form__input create-form__select"
                name="type"
                id="type"
                onChange={handleChangeType}
                value={type}
                >
                    <option className="create-form__placeholder" value="" disabled>
                        Please select
                    </option>
                    {types.map((type) => (
                        <option key={type.id} id={type.id} value={type.name}>{type.name}</option>
                    ))}
                </select>
            </div>
        </section>
        <section>
        <div className="create-form__field">
            <label className="create-form__label" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              className="create-form__input"
              name="name"
              onChange={handleChangeName}
              value={name}
            />
          </div>
          {/* Description */}
          <div className="create-form__field">
            <label className="create-form__label" htmlFor="description">
              Description
            </label>
            <textarea
              className="create-form__textarea"
              name="description"
              onChange={handleChangeDescription}
              value={description}
            ></textarea>
          </div>
        </section>
    </form>
  );
}

export default CreationForm;
