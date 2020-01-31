import React, { useState } from "react";
import {Form, FormGroup, Col, FormControl, Checkbox, Button, ControlLabel, Grid, PageHeader} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {signUpStart} from "../redux/reducer/authReducer/actions";

const SignUp = () => {
      const [name, setName] = useState('')
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')
      const [confirmPassword, setConfirmPassword] = useState('')
      const [phone, setPhone] = useState('')
      const [IDNumber, setIDNumber] = useState('')
      const dispatch = useDispatch()
      const submitHandler = (e) => {
        e.preventDefault()
        dispatch(signUpStart({name, email, password, confirmPassword, phone, IDNumber, role_id: 1}))
    }
      return (
          <Grid style={{padding:'10% 20%'}}>
              <PageHeader>
                    Dashboard Signup
              </PageHeader>
          <Form horizontal>
    <FormGroup controlId="formHorizontalName">
    <Col componentClass={ControlLabel} sm={2}>
      Name*
    </Col>
    <Col sm={10}>
      <FormControl type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
    </Col>
  </FormGroup>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
      Email*
    </Col>
    <Col sm={10}>
      <FormControl type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2}>
      Password*
    </Col>
    <Col sm={10}>
      <FormControl type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
    </Col>
  </FormGroup>
  <FormGroup controlId="formHorizontalConfirmPassword">
    <Col componentClass={ControlLabel} sm={2}>
      Confirm Password*
    </Col>
    <Col sm={10}>
      <FormControl type="password" placeholder="Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
    </Col>
  </FormGroup>
  <FormGroup controlId="formHorizontalPhone">
    <Col componentClass={ControlLabel} sm={2}>
      Phone
    </Col>
    <Col sm={10}>
      <FormControl type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
    </Col>
  </FormGroup>
  <FormGroup controlId="formHorizontalIDNumber">
    <Col componentClass={ControlLabel} sm={2}>
      ID Number
    </Col>
    <Col sm={10}>
      <FormControl type="text" placeholder="ID Number" value={IDNumber} onChange={(e) => setIDNumber(e.target.value)} />
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={7}>
    </Col>
    <Col sm={3}><Link to='/admin/login'>Login Now</Link></Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Button type="submit" onClick={(e) => submitHandler(e)}>Sign Up</Button>
    </Col>
  </FormGroup>
</Form>

            </Grid>
        );
}
export default SignUp