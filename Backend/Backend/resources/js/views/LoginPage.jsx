import React, { useState } from "react";
import {Form, FormGroup, Col, FormControl, Checkbox, Button, ControlLabel, Grid, PageHeader} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {loginStart} from "../redux/reducer/authReducer/actions";

const Login = () => {
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const dispatch = useDispatch()
        const submitHandler = (e) => {
          e.preventDefault()
          dispatch(loginStart({email, password}))
      }
        return (
            <Grid style={{padding:'10% 20%'}}>
                <PageHeader>
                    Dashboard Login
                </PageHeader>;
<Form horizontal>
  <FormGroup controlId="formHorizontalEmail">
    <Col componentClass={ControlLabel} sm={2}>
      Email
    </Col>
    <Col sm={10}>
      <FormControl value={email} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
    </Col>
  </FormGroup>

  <FormGroup controlId="formHorizontalPassword">
    <Col componentClass={ControlLabel} sm={2}>
      Password
    </Col>
    <Col sm={10}>
      <FormControl value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={7}>
      <Checkbox>Remember me</Checkbox>
    </Col>
    <Col sm={3}>
        <Link to={'/admin/signup'}>Sign up now</Link>
    </Col>
  </FormGroup>

  <FormGroup>
    <Col smOffset={2} sm={10}>
      <Button type="submit" onClick={(e) => submitHandler(e)}>Sign in</Button>
    </Col>
  </FormGroup>
</Form>

            </Grid>
        );
    
}
export default Login