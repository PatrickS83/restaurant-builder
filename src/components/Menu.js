import React from 'react';
import MenuItem from './MenuItem';
import menu from './mock-menus';

const Menu = props => {
  return (
    <div className="container">
      <div className="row text-center">
       {menu[props.activeMenu].map((dish, index) => <MenuItem key={index} name={dish.name} price={dish.price} description={dish.description}/>)}
      </div>
    </div>
  )
}

export default Menu;