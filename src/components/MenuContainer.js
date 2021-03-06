import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SectionHeader from './SectionHeader';
import MenuTabs from './MenuTabs';
import Menu from './Menu';

class MenuContainer extends Component {
  static propTypes = {
    isAdmin: PropTypes.bool.isRequired,
    handleTextChange: PropTypes.func.isRequired,
    data: PropTypes.object,
    addMenuItem: PropTypes.func,
    removeMenuItem: PropTypes.func,
    moveMenuItem: PropTypes.func
  };

  state = {
    activeMenu: 'breakfast'
  };

  // set the active menu on menutab click
  handleMenuClick = e => {
    this.setState({ activeMenu: e.target.id });
  };

  render() {
    return (
      <section className="menu-container container" id="menu">
        <SectionHeader
          data={this.props.data}
          isAdmin={this.props.isAdmin}
          handleTextChange={this.props.handleTextChange}
        />
        <MenuTabs handleMenuClick={this.handleMenuClick} activeMenu={this.state.activeMenu} />
        <Menu
          activeMenu={this.state.activeMenu}
          isAdmin={this.props.isAdmin}
          data={this.props.data}
          handleTextChange={this.props.handleTextChange}
          addMenuItem={this.props.addMenuItem}
          removeMenuItem={this.props.removeMenuItem}
          moveMenuItem={this.props.moveMenuItem}
        />
      </section>
    );
  }
}

export default MenuContainer;
