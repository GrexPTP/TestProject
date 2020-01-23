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
/*eslint-disable*/
import React, { useState } from "react";
import Toggle from "react-toggle";

import imagine1 from "../../assets/img/sidebar-1.jpg";
import imagine2 from "../../assets/img/sidebar-2.jpg";
import imagine3 from "../../assets/img/sidebar-3.jpg";
import imagine4 from "../../assets/img/sidebar-4.jpg";

const FixedPlugin = (props) => {
  const [classes, setClasses] = useState("dropdown show-dropdown open")
  const [bg_checked, setBg_checked] = useState(true)
  const [bgImage, setBgImage] = useState(props.bgImage)
  const handleClick = () => {
    props.handleFixedClick();
  };
  const onChangeClick = () => {
    props.handleHasImage(!this.state.bg_checked);
    setBgImage(!bg_checked)
  };
  
    return (
      <div className="fixed-plugin">
        <div id="fixedPluginClasses" className={props.fixedClasses}>
          <div onClick={handleClick}>
            <i className="fa fa-cog fa-2x" />
          </div>
          <ul className="dropdown-menu">
            <li className="header-title">Configuration</li>
            <li className="adjustments-line">
              <p className="pull-left">Background Image</p>
              <div className="pull-right">
                <Toggle
                  defaultChecked={bg_checked}
                  onChange={onChangeClick}
                />
              </div>
              <div className="clearfix" />
            </li>
            <li className="adjustments-line">
              <a className="switch-trigger">
                <p>Filters</p>
                <div className="pull-right">
                  <span
                    className={
                      props.bgColor === "black"
                        ? "badge filter active"
                        : "badge filter"
                    }
                    data-color="black"
                    onClick={() => {
                      props.handleColorClick("black");
                    }}
                  />
                  <span
                    className={
                      props.bgColor === "azure"
                        ? "badge filter badge-azure active"
                        : "badge filter badge-azure"
                    }
                    data-color="azure"
                    onClick={() => {
                      props.handleColorClick("azure");
                    }}
                  />
                  <span
                    className={
                      props.bgColor === "green"
                        ? "badge filter badge-green active"
                        : "badge filter badge-green"
                    }
                    data-color="green"
                    onClick={() => {
                      props.handleColorClick("green");
                    }}
                  />
                  <span
                    className={
                      props.bgColor === "orange"
                        ? "badge filter badge-orange active"
                        : "badge filter badge-orange"
                    }
                    data-color="orange"
                    onClick={() => {
                      props.handleColorClick("orange");
                    }}
                  />
                  <span
                    className={
                      props.bgColor === "red"
                        ? "badge filter badge-red active"
                        : "badge filter badge-red"
                    }
                    data-color="red"
                    onClick={() => {
                      props.handleColorClick("red");
                    }}
                  />
                  <span
                    className={
                      props.bgColor === "purple"
                        ? "badge filter badge-purple active"
                        : "badge filter badge-purple"
                    }
                    data-color="purple"
                    onClick={() => {
                      props.handleColorClick("purple");
                    }}
                  />
                </div>
                <div className="clearfix" />
              </a>
            </li>
            <li className="header-title">Sidebar Images</li>
            <li className={bgImage === imagine1 ? "active" : ""}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  setBgImage(imagine1)
                  props.handleImageClick(imagine1);
                }}
              >
                <img src={imagine1} alt="..." />
              </a>
            </li>
            <li className={bgImage === imagine2 ? "active" : ""}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  setBgImage(imagine2);
                  props.handleImageClick(imagine2);
                }}
              >
                <img src={imagine2} alt="..." />
              </a>
            </li>
            <li className={bgImage === imagine3 ? "active" : ""}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  setBgImage(imagine3);
                  props.handleImageClick(imagine3);
                }}
              >
                <img src={imagine3} alt="..." />
              </a>
            </li>
            <li className={bgImage === imagine4 ? "active" : ""}>
              <a
                className="img-holder switch-trigger"
                onClick={() => {
                  setBgImage(imagine4)
                  handleImageClick(imagine4);
                }}
              >
                <img src={imagine4} alt="..." />
              </a>
            </li>

            <li className="button-container">
              <div className="">
                <a
                  href="https://www.creative-tim.com/product/light-bootstrap-dashboard-react?ref=lbdr-fixed-plugin"
                  target="_blank"
                  className="btn btn-success btn-block btn-fill"
                >
                  Download free!
                </a>
              </div>
            </li>
            <li className="button-container">
              <div className="">
                <a
                  href="https://www.creative-tim.com/product/light-bootstrap-dashboard-pro-react?ref=lbdr-fixed-plugin"
                  target="_blank"
                  className="btn btn-warning btn-block btn-fill"
                >
                  Buy Pro
                </a>
              </div>
            </li>
            <li className="button-container">
              <a
                href="https://demos.creative-tim.com/light-bootstrap-dashboard-react/#/documentation/getting-started?ref=lbdr-fixed-plugin"
                target="_blank"
                className="btn btn-fill btn-info"
              >
                Documentation
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
}

export default FixedPlugin;
