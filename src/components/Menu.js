import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './MenuItem';

class Menu extends React.Component {
  static propTypes = {
    activeMenu: PropTypes.string.isRequired,
    isAdmin: PropTypes.bool.isRequired,
    handleTextChange: PropTypes.func,
    addMenuItem: PropTypes.func,
    removeMenuItem: PropTypes.func,
    moveMenuItem: PropTypes.func,
    data: PropTypes.object
  };

  createMenuItem = () => {
    const menuItem = {
      name: 'Add name here',
      price: '0',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quasi amet vel aspernatur numquam corrupti! Quod fuga quaerat'
    };
    this.props.addMenuItem(menuItem, this.props.activeMenu);
  };

  render() {
    const { data, activeMenu, isAdmin } = this.props;

    return (
      <div className="container">
        <div className="row text-center">
          {data[activeMenu]
            ? data[activeMenu].map((dish, index) => (
                <MenuItem
                  key={index}
                  index={index}
                  name={dish.name}
                  price={dish.price}
                  description={dish.description}
                  isAdmin={isAdmin}
                  handleTextChange={this.props.handleTextChange}
                  activeMenu={activeMenu}
                  removeMenuItem={this.props.removeMenuItem}
                  moveMenuItem={this.props.moveMenuItem}
                  lastMenuItem={data[activeMenu].length - 1}
                />
              ))
            : null}
          {isAdmin ? (
            <button
              className="btn btn-light col-sm-6 d-flex align-items-center justify-content-center"
              onClick={this.createMenuItem}
              style={{ minHeight: '125px', fontSize: '1.5rem' }}
            >
              <span>Add</span>
              <i className="fas fa-plus fa-3x p-2" />
              <span>Dish</span>
            </button>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Menu;
