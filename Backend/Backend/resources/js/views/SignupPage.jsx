import React, { Component } from "react";
import {Form, FormGroup, Col, FormControl, Checkbox, Button, ControlLabel, Grid, PageHeader} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class SignUp extends Component {
    render() {
        return (
            <Grid style={{padding:'10% 20%'}}>
                <PageHeader>
                    Dashboard Signup
                </PageHeader>;
                <Form horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
      Email
    </Col>
    <Col sm={10}>
      <FormControl type="email" placeholder="Email" />
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2}>
      Password
    </Col>
    <Col sm={10}>
      <FormControl type="password" placeholder="Password" />
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={7}>
    </Col>
    <Col sm={3}><Link to='/admin/login'>Login Now</Link></Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Button type="submit">Sign Up</Button>
    </Col>
  </FormGroup>
</Form>

            </Grid>
        );
    }
}