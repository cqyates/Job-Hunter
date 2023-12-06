import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import defaultMan from "../../images/default_man.jpg"
import defaultWoman from "../../images/default_woman.jpg"
import "./style.css"

const UserCard = ({ username, id }) => {
  return (
    <Card key={id} className="user-card" style={{ width: '18rem', margin: "2em"}}>
      <Card.Img variant="top" src={defaultWoman} />
      <Card.Body>
        <Card.Title>{username}</Card.Title>
        <Card.Text>Something Goes Here
        </Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>Add Technology Stacks</ListGroup.Item>
            <ListGroup.Item>Add Profile Images</ListGroup.Item>
            <ListGroup.Item>Add Projects</ListGroup.Item>
            <ListGroup.Item>Add Featured State to Projects</ListGroup.Item>
          </ListGroup>
       
        <Button variant="primary">Visit {username}'s Profile</Button>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
