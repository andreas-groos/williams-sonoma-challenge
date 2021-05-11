import React from "react";
import PropTypes from "prop-types";

function FakeMenu(props) {
  return (
    <nav aria-label="main menu" role="navigation">
      <ul id="fake-menu">
        <li>Mats</li>
        <li>Curtains</li>
        <li>Towels</li>
        <li>Bins</li>
        <li>Beds</li>
      </ul>
    </nav>
  );
}

FakeMenu.propTypes = {};

export default FakeMenu;
