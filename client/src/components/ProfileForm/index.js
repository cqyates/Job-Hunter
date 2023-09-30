import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { submitForm } from '../../utils/API.js';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
const ProfileForm = () => {
  const [userFormData, setUserFormData] = useState({
    first_name: '',
    last_name: '',
    contact_email: '',
    github_username: '',
  });

  const [validated] = useState(false);
  // set state for alert
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
    console.log(userFormData);
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const response = submitForm(userFormData);

      if (!response.ok) {
        throw new Error('something went wrong!');
      }
    } catch (err) {
      console.error(err);
      setShowAlert(true);
    }

    setUserFormData({
      first_name: '',
      last_name: '',
      contact_email: '',
      github_username: '',
    });
  };

  return (
    <Form className="profile-form" noValidate validated={validated} onSubmit={handleFormSubmit}>
      <Alert
        dismissible
        onClose={() => setShowAlert(false)}
        show={showAlert}
        variant="danger"
      >
        Something went wrong with your signup!
      </Alert>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="first_name">First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="First Name"
          name="first_name"
          onChange={handleInputChange}
          value={userFormData.first_name}
          required
        />
        <Form.Control.Feedback type="invalid">
          First Name is required!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="last_name">Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Last Name"
          name="last_name"
          onChange={handleInputChange}
          value={userFormData.last_name}
          required
        />
        <Form.Control.Feedback type="invalid">
          Last Name is required!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="contact_email">Contact email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Contact Email"
          name="contact_email"
          onChange={handleInputChange}
          value={userFormData.contact_email}
          required
        />
        <Form.Control.Feedback type="invalid">
          Email is required!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="github_username">Github Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Github "
          name="github_username"
          onChange={handleInputChange}
          value={userFormData.github_username}
          required
        />
        <Form.Control.Feedback type="invalid">
         Github Username is required!
        </Form.Control.Feedback>
      </Form.Group>
      <Button
          disabled={!(userFormData.first_name && userFormData.last_name && userFormData.contact_email && userFormData.github_username)}
          type='submit'
          variant='success'>
          Submit
        </Button>
    </Form>
  );
};

export default ProfileForm;
