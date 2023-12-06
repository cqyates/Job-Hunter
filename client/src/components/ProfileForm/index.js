import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { submitProfile } from '../../utils/API.js';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
const ProfileForm = () => {
  const [userFormData, setUserFormData] = useState({
    first_name: '',
    last_name: '',
    contact_email: '',
    github_username: '',
    profile_image: '',
    profile_url: '',
    home_phone: '',
    cell_phone: '',
    github_url: '',
    linkedin_url: '',
    facebook_url: '',
    indeed_url: '',
    monster_url: '',
    dice_url: '',
    zipRecruiter_url: '',
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
      const response = await submitProfile(userFormData);
      console.log(response);
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
      profile_image: '',
      home_phone: '',
      cell_phone: '',
      github_url: '',
      linkedin_url: '',
      facebook_url: '',
      indeed_url: '',
      monster_url: '',
      dice_url: '',
      zipRecruiter_url: '',
    });
  };

  return (
    <Form
      className="profile-form"
      noValidate
      validated={validated}
      onSubmit={handleFormSubmit}
    >
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
          placeholder="Github"
          name="github_username"
          onChange={handleInputChange}
          value={userFormData.github_username}
          required
        />
        <Form.Control.Feedback type="invalid">
          Github Username is required!
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="profile_image">Profile Image</Form.Label>
        <Form.Control
          type="text"
          placeholder="Profile Image"
          name="image"
          onChange={handleInputChange}
          value={userFormData.profile_image}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="profile_url">Portfolio Website</Form.Label>
        <Form.Control
          type="text"
          placeholder="Portfolio Page"
          name="profile_url"
          onChange={handleInputChange}
          value={userFormData.profile_url}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="home_phone">Home Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Home Phone "
          name="home_phone"
          onChange={handleInputChange}
          value={userFormData.home_phone}
        />
    
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="cell_phone">Cell Phone</Form.Label>
        <Form.Control
          type="text"
          placeholder="Cell Phone"
          name="cell_phone"
          onChange={handleInputChange}
          value={userFormData.cell_phone}
        />
    
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="github_url">Github Url</Form.Label>
        <Form.Control
          type="text"
          placeholder="Github Homepage"
          name="github_url"
          onChange={handleInputChange}
          value={userFormData.github_url}
        />
    
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="linkedin_url">Linkedin Homepage</Form.Label>
        <Form.Control
          type="text"
          placeholder="Linkedin Home Page"
          name="linkedin_url"
          onChange={handleInputChange}
          value={userFormData.linkedin_url}
        />
    
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="facebook_url">Facebook Home Page</Form.Label>
        <Form.Control
          type="text"
          placeholder="Facebook Home Page"
          name="facebook_url"
          onChange={handleInputChange}
          value={userFormData.facebook_url}
        />
    
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="indeed_url">Indeed Home Page</Form.Label>
        <Form.Control
          type="text"
          placeholder="Indeed Home Page"
          name="indeed_url"
          onChange={handleInputChange}
          value={userFormData.indeed_url}
        />
    
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="monster_url">Monster Home Page</Form.Label>
        <Form.Control
          type="text"
          placeholder="Monster Home Page"
          name="monster_url"
          onChange={handleInputChange}
          value={userFormData.monster_url}
        />
    
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="dice_url">Dice Home Page</Form.Label>
        <Form.Control
          type="text"
          placeholder="Dice Home Page"
          name="dice_url"
          onChange={handleInputChange}
          value={userFormData.dice_url}
        />
    
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="zipRecruiter_url">zipRecruiter Home Page</Form.Label>
        <Form.Control
          type="text"
          placeholder="Zip Recruiter Home Page"
          name="zipRecruiter_url"
          onChange={handleInputChange}
          value={userFormData.zipRecruiter_url}
        />
    
      </Form.Group>
      <Button
        disabled={
          !(
            userFormData.first_name &&
            userFormData.last_name &&
            userFormData.contact_email &&
            userFormData.github_username &&
            userFormData.profile_url
          )
        }
        type="submit"
        variant="success"
      >
        Submit
      </Button>
    </Form>
  );
};

export default ProfileForm;
