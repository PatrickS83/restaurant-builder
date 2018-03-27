import React from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

const Menu = props => {
  return (
    <div className="container">
      <div className="row text-center">
        {props.data[props.activeMenu]
          ? props.data[props.activeMenu].map((dish, index) => (
              <MenuItem
                key={index}
                index={index}
                name={dish.name}
                price={dish.price}
                description={dish.description}
                isAdmin={props.isAdmin}
                handleTextChange={props.handleTextChange}
                activeMenu={props.activeMenu}
              />
            ))
          : null}
      </div>
    </div>
  );
};

Menu.propTypes = {
  activeMenu: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  handleTextChange: PropTypes.func,
  data: PropTypes.object
};

export default Menu;
