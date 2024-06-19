import React from "react";
import LoginComponent from "../components/pages/Auth/LoginComponent.jsx";
import Navbar from "../components/shared/Navbar/Navbar";

const Login = () => {
  return (
    <div className="login-page">
      <Navbar />
      <LoginComponent />
    </div>
  );
};

export default Login;
