import React from 'react';

const MenuTabs = props => {
  return (
    <div className="btn-group">
      <button type="button" onClick={props.handleMenuClick} id="breakfast" className={`btn btn-secondary ${props.activeMenu === "breakfast" ? "active" : ""}`} >Breakfast</button>
      <button type="button" onClick={props.handleMenuClick} id="lunch" className={`btn btn-secondary ${props.activeMenu === "lunch" ? "active" : ""}`}>Lunch</button>
      <button type="button" onClick={props.handleMenuClick} id="dinner" className={`btn btn-secondary ${props.activeMenu === "dinner" ? "active" : ""}`}>Dinner</button>
    </div>
  )
}

export default MenuTabs;