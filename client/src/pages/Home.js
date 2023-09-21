import React from "react";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
const HomePage = () => {
    return (
        <>
        <h3>Welcome to Job Hunter</h3>
        <h4>A Shameless Attempt to Demonstrate My React Skills While Organizing My Jobs</h4>
        <SignupForm/>
        <LoginForm/>
        </>
    )
}

export default HomePage