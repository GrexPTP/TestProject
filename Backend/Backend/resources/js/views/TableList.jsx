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
import React, {useState,  useEffect} from "react";
import { Grid, Row, Col, Table, Form, FormControl, Button } from "react-bootstrap";
import Card from "../components/Card/Card.jsx";
import { thArray, tdArray } from "../variables/Variables.jsx";
import {getEmployeesStart} from '../redux/reducer/employeesReducer/actions'
import {useDispatch, useSelector} from 'react-redux'

const TableList = (props) => {
  let users = useSelector(state => state.employees.employees) 
  if (!users) users = []
  const token = useSelector(state => state.auth.token)
  const dispatch = useDispatch()
  const edit = (id) => {
    props.history.push(`/admin/${props.objectName.toLowerCase()}/${id}`)
  }
  const deleteObject = id => {
    console.log(`${id} delete`)
  }
  const add = () => {
    props.history.push('/admin/profile')
  }
  const download = (id) => {
    console.log(`${id} download image`)
  }
  useEffect(() => {
    dispatch(getEmployeesStart(token))
  }, [])
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Row>
                <Col md={11}>
              <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button onClick={add}>Add</Button>
            </Form>
                </Col>
              </Row>
              <Card
                title={`${props.objectName} List`}
                category={`List of ${props.objectName}`}
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>
                        {thArray.map((prop, key) => {
                          return <th key={key}>{prop}</th>;
                        })}
                      </tr>
                      
                    </thead>
                    <tbody>
                      {users.map((prop, key) => {
                        return (
                          <tr key={key}>
                            
                            {Object.keys(prop).map((item, key) => {
                              return <td key={key}>{prop[item]}</td>;
                            })}
                            <td>
                              <Button bsStyle="link" onClick={() => edit(prop['id'])}>
                                <i className='pe-7s-pen'></i>
                                </Button>
                              <Button bsStyle="link" onClick={() => deleteObject(prop['id'])}>
                                <i className='pe-7s-delete-user'></i>
                                </Button>
                                <Button bsStyle="link" onClick={() => download(prop['id'])}>
                                  <i className='pe-7s-download'></i>
                                  </Button>
                                </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
}

export default TableList;
