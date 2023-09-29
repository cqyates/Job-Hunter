import React, {useState, useEffect} from "react"
import {getGithubProfile, getMe} from "../utils/API";
import Auth from "../utils/auth.js";
const Profile = () => {
    const [userData, setUserData] = useState({})

   
    //get email from the req.body or req.params
    //run fetch request to backend
    

    return (
        <>
        <h3>Profile for User</h3>
        <h4>Show Github Profile from API Here</h4>
        </>
    )
}

export default Profile