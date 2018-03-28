import React from "react";
import PropTypes from "prop-types";
import MenuItem from "./MenuItem";

class Menu extends React.Component {
  static propTypes = {
    activeMenu: PropTypes.string.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    handleTextChange: PropTypes.func,
    data: PropTypes.object
  };

  createMenuItem = () => {
    const menuItem = {
      name: "Add name here",
      price: "0",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quasi amet vel aspernatur numquam corrupti! Quod fuga quaerat"
    };
    this.props.addMenuItem(menuItem, this.props.activeMenu);
  };

  render() {
    return (
      <div className="container">
        <div className="row text-center">
          {this.props.data[this.props.activeMenu]
            ? this.props.data[this.props.activeMenu].map((dish, index) => (
                <MenuItem
                  key={index}
                  index={index}
                  name={dish.name}
                  price={dish.price}
                  description={dish.description}
                  isAdmin={this.props.isAdmin}
                  handleTextChange={this.props.handleTextChange}
                  activeMenu={this.props.activeMenu}
                  removeMenuItem={this.props.removeMenuItem}
                  moveMenuItem={this.props.moveMenuItem}
                />
              ))
            : null}
          {this.props.isAdmin ? (
            <button className="btn btn-light col-sm-6" onClick={this.createMenuItem}>
              Add menu item
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Menu;
