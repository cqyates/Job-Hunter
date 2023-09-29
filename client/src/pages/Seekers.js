import React, { useState, useEffect } from "react";
import {getUsers} from "../utils/API";
//import Auth from '../utils/auth';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import UserCard from "../components/UserCard"
import "./style.css"
const Seekers = () => {

  //Display Other Job Seekers
   const [usersData, setUsersData] = useState([]);
    const index = 1;
  // use this to determine if `useEffect()` hook needs to run again
 // const userDataLength = Object.keys(userData).length;

  useEffect(() => {
    const getUserData = async () => {
      try {
      //  const token = Auth.loggedIn() ? Auth.getToken() : null;

        // if (!token) {
        //   return false;
        // }

        const response = await getUsers();
        
        if (!response.ok) {
          throw new Error('something went wrong!');
        }

        const users = await response.json();
        console.log(users)
        setUsersData(users);
      } catch (err) {
        console.error(err);
      }
    };

    getUserData();
  }, [usersData.length]);

  return (
      <>
      <h3>Meet Your Fellow Hunters</h3>
      <Container style={{border: "1px solid black"}}>
        <Row key={index}>
            {usersData.map(({username, id}) => {
            return <UserCard key={id} username={username}/>
            })}
        </Row>
      </Container>
      </>
  )
}

export default Seekers