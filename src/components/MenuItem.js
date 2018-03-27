import React from "react";
import PropTypes from "prop-types";

const MenuItem = props => {
  return (
    <div className="card col-sm-6">
      <div className="d-flex justify-content-between">
        <h4 className="menu-item-name">{props.name}</h4>
        <h4 className="menu-item-price">{props.price}</h4>
      </div>
      <p className="menu-item-description text-left text-muted">{props.description}</p>
    </div>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
};

export default MenuItem;
