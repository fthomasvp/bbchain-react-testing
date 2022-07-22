import { ChangeEvent, MouseEventHandler, useState } from "react";
import "./SubscribeForm.css";

const SubscribeForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    age: 0,
    password: "",
  });
  const [errorDescription, setErrorDescription] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  }

  const handleClick = (e: any) => {
    e.preventDefault();

    if (!formData.username) {
      return setErrorDescription("Username is required!");
    }

    if (!formData.age) {
      return setErrorDescription("Age is required!");
    }

    if (!formData.password) {
      return setErrorDescription("Password is required!");
    }
  }

  return (
    <form className="form-container">
      <div className="field-input">
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          type="text"
          onChange={handleChange}
          value={formData.username}
        />
      </div>

      <div className="field-input">
        <label htmlFor="age">Age</label>
        <input
          id="age"
          name="age"
          type="number"
          min={0}
          onChange={handleChange}
          value={formData.age}
        />
      </div>

      <div className="field-input">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={handleChange}
          value={formData.password}
        />
      </div>

      {errorDescription && <p className="danger">{errorDescription}</p>}

      <button type="submit" onClick={handleClick}>Submit</button>
    </form>
  )
}

export default SubscribeForm;
