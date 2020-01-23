import React from 'react'
import {useSelector} from 'react-redux'
import {Switch, Route, Redirect} from 'react-router-dom'
import AdminLayout from "./layouts/Admin.jsx";
import LoginPage from "./views/LoginPage"
import SignupPage from "./views/SignupPage"
const Router = () => {
    const token = useSelector(state => state.auth.token)
    return (
    <Switch>
      <Route path='/admin/login' component={LoginPage} />
      <Route  path='/admin/signup' component={SignupPage} />
      {token && <Route path="/admin" render={props => <AdminLayout {...props} />} />}
      
      <Redirect from="/" to="/admin/login" />
    </Switch>
    )
}
export default Router