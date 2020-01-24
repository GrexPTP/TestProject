/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import Card from "../components/Card/Card.jsx";
import FormInputs  from "../components/FormInputs/FormInputs.jsx";
import Button from "../components/CustomButton/CustomButton.jsx";
import ImageUploader from 'react-images-upload';
import {useSelector, useDispatch} from 'react-redux'
import {updateProfileStart} from '../redux/reducer/userReducer/actions'
const UserProfile = () => {
  const [avaPictures, setAvaPictures] = useState([])
  const [frontPictures, setFrontPictures] = useState([])
  const [backPictures, setBackPictures] = useState([])
  
  const dispatch = useDispatch()
  const currentPath = useSelector(state => state.router.location.pathname)
  const token = useSelector(state => state.auth.token)
  let user = null
  const onDropAva = (pictureFiles, pictureDataURLs) => {
    setAvaPictures(pictureDataURLs)
  }
  const onDropFront = (pictureFiles, pictureDataURLs) => {
    setFrontPictures(pictureDataURLs)
  }
  const onDropBack = (pictureFiles, pictureDataURLs) => {
    setBackPictures(pictureDataURLs)

  }
  const handleSubmit = e => {
    e.preventDefault()
    dispatch(updateProfileStart(token, {password, confirmPassword, name, IDNumber, phone, avaPictures, frontPictures, backPictures}))
  }
  if (currentPath === '/admin/profile') {
    user = useSelector(state => state.user.user)
  }
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [name, setName] = useState(user.name)
  const [IDNumber, setIDNumber] = useState(user.id_number)
  const [phone, setPhone] = useState(user.phone)
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Edit Profile"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        
                        { 
                          label: "Email address",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email",
                          defaultValue: user.email,
                          disabled : true
                        },
                        {
                          onChange: e => setPassword(e.target.value),
                          label: "Password",
                          type: "password",
                          bsClass: "form-control",
                          placeholder: "passworđ",
                          value: password
                        },
                        {
                          onChange: e => setConfirmPassword(e.target.value),
                          label: "Confirm Password",
                          type: "password",
                          bsClass: "form-control",
                          placeholder: "passworđ",
                          value: confirmPassword
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          onChange: e => setName(e.target.value),
                          label: "Full name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Full name",
                          value: name
                        },
                        {
                          onChange: e => setIDNumber(e.target.value),
                          label: "ID Number",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "ID Number",
                          value: IDNumber
                        },
                        {
                          onChange: e => setPhone(e.target.value),
                          label: "Phone",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Phone Number",
                          value: phone
                        }
                      ]}
                    />
                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Avatar</ControlLabel>
                          <ImageUploader
                	withIcon={true}
                	buttonText='Choose images'
                	onChange={onDropAva}
                	imgExtension={['.jpg', '.gif', '.png', '.gif']}
                  maxFileSize={5242880}
                  withPreview={true}
                  />
                        </FormGroup>
                      </Col>
                      
                    </Row>
                    <Row>
                      <Col md={6}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Front ID</ControlLabel>
                          <ImageUploader
                	withIcon={true}
                	buttonText='Choose images'
                	onChange={onDropFront}
                	imgExtension={['.jpg', '.gif', '.png', '.gif']}
                  maxFileSize={5242880}
                  withPreview={true}
                  />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Back ID</ControlLabel>
                          <ImageUploader
                	withIcon={true}
                	buttonText='Choose images'
                	onChange={onDropBack}
                	imgExtension={['.jpg', '.gif', '.png', '.gif']}
                  maxFileSize={5242880}
                  withPreview={true}
                  />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>Address</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Address"
                            defaultValue= {user.address}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit" onClick={handleSubmit}>
                      Update Profile
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
}

export default UserProfile;
