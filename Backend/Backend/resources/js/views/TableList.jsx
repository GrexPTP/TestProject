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
import { Grid, Row, Col, Table, Form, FormControl, Button } from "react-bootstrap";
import {Redirect} from 'react-router-dom'
import Card from "../components/Card/Card.jsx";
import { thArray, tdArray } from "../variables/Variables.jsx";

class TableList extends Component {
  edit = (id) => {
    this.props.history.push(`/admin/${this.props.objectName.toLowerCase()}/${id}`)
  }
  delete = (id) => {
    console.log(`${id} delete`)
  }
  add = () => {
    this.props.history.push('/admin/profile')
  }
  download = (id) => {
    console.log(`${id} download image`)
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Row>
                <Col md={11}>
              <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button onClick={this.add}>Add</Button>
            </Form>
                </Col>
              </Row>
              <Card
                title={`${this.props.objectName} List`}
                category={`List of ${this.props.objectName}`}
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
                      {tdArray.map((prop, key) => {
                        return (
                          <tr key={key}>
                            {prop.map((prop, key) => {
                              return <td key={key}>{prop}</td>;
                            })}
                            <td>
                              <Button bsStyle="link" onClick={() => this.edit(prop[0])}>
                                <i className='pe-7s-pen'></i>
                                </Button>
                              <Button bsStyle="link" onClick={() => this.delete(prop[0])}>
                                <i className='pe-7s-delete-user'></i>
                                </Button>
                                <Button bsStyle="link" onClick={() => this.download(prop[0])}>
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
}

export default TableList;
