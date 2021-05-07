import React from "react";
import PropTypes from "prop-types";

function FakeMenu(props) {
  return (
    <ul id="fake-menu">
      <li>Mats</li>
      <li>Curtains</li>
      <li>Towels</li>
      <li>Bins</li>
      <li>Beds</li>
    </ul>
  );
}

FakeMenu.propTypes = {};

export default FakeMenu;
