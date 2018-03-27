import React from "react";
import PropTypes from "prop-types";

const MenuTabs = props => {
  return (
    <div className="btn-group">
      <button
        type="button"
        onClick={props.handleMenuClick}
        id="breakfast"
        className={"btn btn-secondary " + (props.activeMenu === "breakfast" ? "active" : "")}
      >
        Breakfast
      </button>
      <button
        type="button"
        onClick={props.handleMenuClick}
        id="lunch"
        className={"btn btn-secondary " + (props.activeMenu === "lunch" ? "active" : "")}
      >
        Lunch
      </button>
      <button
        type="button"
        onClick={props.handleMenuClick}
        id="dinner"
        className={"btn btn-secondary " + (props.activeMenu === "dinner" ? "active" : "")}
      >
        Dinner
      </button>
    </div>
  );
};

MenuTabs.propTypes = {
  handleMenuClick: PropTypes.func.isRequired,
  activeMenu: PropTypes.string
};

export default MenuTabs;
