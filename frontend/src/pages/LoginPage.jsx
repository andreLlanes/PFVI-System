import React from "react";
import LoginForm from "../components/LoginForm";
import './LoginPage.css';

const LoginPage = () => {
  const handleLogin = ({ email, password }) => {
    console.log("Logging in with:", email, password);
  };

  return (
    <div className="login-page">
      <div className="login-form-wrapper">
        <LoginForm onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default LoginPage;