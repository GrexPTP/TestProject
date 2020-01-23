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
import React, { useState } from "react";

const CustomCheckbox = ({ isChecked, number, label, inline, ...rest }) => {
  const [is_checked, setIs_checked] = useState(isChecked ? true : false)
  const handleClick = () => {
    setIs_checked(!is_checked)
  }
    const classes = inline !== undefined ? "checkbox checkbox-inline" : "checkbox";
    return (
      <div className={classes}>
        <input
          id={number}
          type="checkbox"
          onChange={handleClick}
          checked={is_checked}
          {...rest}
        />
        <label htmlFor={number}>{label}</label>
      </div>
    );
  
}

export default CustomCheckbox;
