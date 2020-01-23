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
import React from "react";
import ReactDOM from "react-dom";

import {Provider} from 'react-redux';
import {store, persistor, history} from "./redux/store"
import {PersistGate} from "redux-persist/integration/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";
import { ConnectedRouter } from 'connected-react-router'
import Router from './router'
const Index = () => {

  return(
    <Provider store={store}>
    <PersistGate persistor={persistor}>
    <ConnectedRouter history={history}>
    <Router/>
    </ConnectedRouter>
    </PersistGate>
  </Provider>
  )
}
ReactDOM.render(
  <Index/>
  ,
  document.getElementById("root")
);
