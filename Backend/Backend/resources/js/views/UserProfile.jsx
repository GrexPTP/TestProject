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
import React, { useState, useEffect } from "react";
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
import {getIndividualStart, updateIndividualStart, createIndividualStart} from '../redux/reducer/manageReducer/actions'
const UserProfile = () => {
  const dispatch = useDispatch()
  const currentPath = useSelector(state => state.router.location.pathname)
  const token = useSelector(state => state.auth.token)
  let user = {id: 0, email: '', name: '', id_number: '', phone: '', avartar: "[]", front_id: "[]", back_id: "[]", role_id : 0}
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
    if (currentPath === '/admin/profile') {
      dispatch(updateProfileStart(token, {password, confirmPassword, name, IDNumber, phone, avaPictures, frontPictures, backPictures}))
    } else if ( currentPath === '/admin/new-employee') {
      dispatch(createIndividualStart({email, password, confirmPassword, name, IDNumber, phone, avaPictures, frontPictures, backPictures, role_id : 2}))
    } 
    else if ( currentPath === '/admin/new-user') {
      dispatch(createIndividualStart({email, password, confirmPassword, name, IDNumber, phone, avaPictures, frontPictures, backPictures, role_id : 3}))
    } 
    else {
      const path = currentPath.split('/')
      dispatch(updateIndividualStart(token, {id: path[3] ,password, confirmPassword, name, IDNumber, phone, avaPictures, frontPictures, backPictures}))
  
    }
    
  }
  useEffect(() => {
    const path = currentPath.split('/')
    dispatch(getIndividualStart(token, path[3]))
  }, [])
  if (currentPath === '/admin/profile') {
    user = useSelector(state => state.user.user)
  } else if (currentPath === '/admin/new-user') {
      user.role_id = 3
  } else if (currentPath === '/admin/new-employee') {
      user.role_id = 2
  } else {
    const temp = useSelector(state => state.manage.individual)
    if (temp) user = temp

  }
  

  const [avaPictures, setAvaPictures] = useState(JSON.parse(user.avartar ? user.avartar : '[]' ))
  const [frontPictures, setFrontPictures] = useState(JSON.parse(user.front_id ?  user.front_id : '[]'))
  const [backPictures, setBackPictures] = useState(JSON.parse(user.back_id ? user.back_id : '[]'))
  const [email, setEmail] = useState(user.email)
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
                          onChange: e => setEmail(e.target.value),
                          label: "Email address",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email",
                          value: email,
                          disabled : currentPath !== '/admin/new-user' && currentPath !== '/admin/new-employee'
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
                          defaultImages={avaPictures}
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
                          defaultImages={frontPictures}
                          singleImage={true}
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
                          defaultImages={backPictures}
                          singleImage={true}
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
                      {currentPath === '/admin/new-user' || currentPath === '/admin/new-employee' ? 'Create Profile' : 'Update Profile'}
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
