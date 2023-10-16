import React from "react";
import "./MenuItem.css";
const MenuItem = (props) => {
  return (
    <a className={props.className} href={props.link}>
        <h3>{props.label}</h3>
      </a>
  );
};

export default MenuItem;
