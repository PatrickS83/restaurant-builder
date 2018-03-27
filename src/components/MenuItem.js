import React from "react";
import PropTypes from "prop-types";
import ContentEditable from "react-contenteditable";

const MenuItem = props => {
  return (
    <div className="card col-sm-6">
      <div className="d-flex justify-content-between">
        <ContentEditable
          className="menu-item-name"
          html={props.name} // innerHTML of the editable div
          disabled={!props.isAdmin} // use true to disable edition
          onChange={e => props.handleTextChange(e, "Menu", props.activeMenu, "name")} // handle innerHTML change
          tagName={"h4"}
          id={props.index}
        />
        <ContentEditable
          className="menu-item-price"
          html={props.price} // innerHTML of the editable div
          disabled={!props.isAdmin} // use true to disable edition
          onChange={e => props.handleTextChange(e, "Menu", props.activeMenu, "price")} // handle innerHTML change
          tagName={"h4"}
          id={props.index}
        />
      </div>
      <p className="menu-item-description text-left text-muted">{props.description}</p>
    </div>
  );
};

MenuItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  activeMenu: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  handleTextChange: PropTypes.func.isRequired,
  index: PropTypes.number
};

export default MenuItem;
