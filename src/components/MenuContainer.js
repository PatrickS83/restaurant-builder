import React, { Component } from 'react';
import SectionHeader from './SectionHeader'
import MenuTabs from './MenuTabs'
import Menu from './Menu';

class MenuContainer extends Component {
  state = {
    activeMenu: 'breakfast'
  }

  handleMenuClick = (e) =>{
    this.setState({ activeMenu: e.target.id })
  }

  render() {
    return (
      <section className="menu-container container">
        <SectionHeader />
        <MenuTabs handleMenuClick={this.handleMenuClick}  activeMenu={this.state.activeMenu}/>
        <Menu activeMenu={this.state.activeMenu}/>
      </section>
     )
  }
}

export default MenuContainer;