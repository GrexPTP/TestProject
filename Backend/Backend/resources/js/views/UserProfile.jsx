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
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "../components/Card/Card.jsx";
import { FormInputs } from "../components/FormInputs/FormInputs.jsx";
import { UserCard } from "../components/UserCard/UserCard.jsx";
import Button from "../components/CustomButton/CustomButton.jsx";
import ImageUploader from 'react-images-upload';
import avatar from "../assets/img/faces/face-3.jpg";

class UserProfile extends Component {
  constructor(){
    super();
    this.state = {
      pictures: [],
    }
    this.onDrop = this.onDrop.bind(this);
  }
  onDrop(pictureFiles, pictureDataURLs) {
		this.setState({
            pictures: this.state.pictures.concat(pictureFiles),
        })}
  render() {
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
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        
                        {
                          label: "Email address",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Email"
                        },
                        {
                          label: "Password",
                          type: "password",
                          bsClass: "form-control",
                          placeholder: "passworđ",
                          defaultValue: "password"
                        },
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          label: "Full name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Full name",
                          defaultValue: "John Steve"
                        },
                        {
                          label: "ID Number",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "ID Number",
                          defaultValue: "xxxxxxxxxxx"
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
                	onChange={this.onDrop}
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
                	onChange={this.onDrop}
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
                	onChange={this.onDrop}
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
                            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button bsStyle="info" pullRight fill type="submit">
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
}

export default UserProfile;
