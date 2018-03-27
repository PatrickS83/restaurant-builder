import React from "react";
import PropTypes from "prop-types";
import ContentEditable from "react-contenteditable";

const MenuItem = props => {
  return (
    <div className="card col-sm-6">
      <div className="d-flex justify-content-between">
        <ContentEditable
          className="menu-item-name"
          html={props.name}
          disabled={!props.isAdmin}
          onChange={e => props.handleTextChange(e, "Menu", props.activeMenu, "name")}
          tagName={"h4"}
          id={props.index}
        />
        <span className="d-flex">
          <ContentEditable
            className="menu-item-price"
            html={props.price}
            disabled={!props.isAdmin}
            onChange={e => props.handleTextChange(e, "Menu", props.activeMenu, "price")}
            tagName={"h4"}
            id={props.index}
          />
          <h4>€</h4>
        </span>
      </div>
      <ContentEditable
        className="menu-item-description text-left text-muted"
        html={props.description}
        disabled={!props.isAdmin}
        onChange={e => props.handleTextChange(e, "Menu", props.activeMenu, "description")}
        tagName={"p"}
        id={props.index}
      />
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
