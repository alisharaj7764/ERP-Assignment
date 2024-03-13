// LoginPage.js
import React, { useState } from "react";
// import { useHistory } from "react-router-dom"; // Import useHistory for redirection
import "./LoginPage.css"; // Import CSS for styling

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  //   const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement authentication logic here (e.g., sending data to a backend server)
    // For demonstration purposes, assume authentication is successful
    console.log(formData);
    // Redirect user to dashboard after successful login
    // history.push("/dashboard");
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username or Email</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
