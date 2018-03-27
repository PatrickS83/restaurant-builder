import React from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";
import menu from "./mock-menus";

const Menu = props => {
  return (
    <div className="container">
      <div className="row text-center">
        {menu[props.activeMenu].map((dish, index) => (
          <MenuItem
            key={index}
            name={dish.name}
            price={dish.price}
            description={dish.description}
          />
        ))}
      </div>
    </div>
  );
};

Menu.propTypes = {
  activeMenu: PropTypes.string.isRequired
};

export default Menu;
