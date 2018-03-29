import React from "react";
import PropTypes from "prop-types";
import ContentEditable from "react-contenteditable";

const MenuItem = props => {
  function confirmRemove() {
    const eraseItemOrNot = window.confirm("do you really want to remove the Item?");
    if (eraseItemOrNot) {
      props.removeMenuItem(props.activeMenu, props.index);
    }
  }

  return (
    <div className="card col-sm-6 pt-2 bg-light menu-item">
      <div className="d-flex justify-content-between">
        <ContentEditable
          className="menu-item-name"
          html={props.name}
          disabled={!props.isAdmin}
          onChange={e => props.handleTextChange(e, "Menu", props.activeMenu, "name")}
          tagName={"h4"}
          data-index={props.index}
        />
        <span className="d-flex">
          <ContentEditable
            className="menu-item-price"
            html={props.price}
            disabled={!props.isAdmin}
            onChange={e => props.handleTextChange(e, "Menu", props.activeMenu, "price")}
            tagName={"h4"}
            data-index={props.index}
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
        data-index={props.index}
      />
      {props.isAdmin ? (
        <div className="text-right" style={{ fontSize: "1.5rem" }}>
          {props.index ? (
            <span onClick={() => props.moveMenuItem(props.activeMenu, props.index, "moveLeft")}>
              <i
                className="fas fa-arrow-left mr-3 text-secondary hvr-pulse"
                style={{ cursor: "pointer" }}
              />
            </span>
          ) : null}
          {props.index !== props.lastMenuItem ? (
            <span onClick={() => props.moveMenuItem(props.activeMenu, props.index, "moveRight")}>
              <i
                className="fas fa-arrow-right mr-3 text-secondary hvr-pulse"
                style={{ cursor: "pointer" }}
              />
            </span>
          ) : null}
          <span onClick={confirmRemove}>
            <i className="far fa-trash-alt hvr-pulse text-danger" style={{ cursor: "pointer" }} />
          </span>
        </div>
      ) : null}
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
  moveMenuItem: PropTypes.func.isRequired,
  removeMenuItem: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  lastMenuItem: PropTypes.number.isRequired
};

export default MenuItem;
