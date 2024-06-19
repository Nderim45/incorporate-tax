import React from "react";
import SignupComponent from "../components/pages/Auth/SignupComponent";
import Navbar from "../components/shared/Navbar/Navbar";

const Signup = () => {
  return (
    <div className="signup-page">
      <Navbar />
      <SignupComponent />
    </div>
  );
};

export default Signup;
