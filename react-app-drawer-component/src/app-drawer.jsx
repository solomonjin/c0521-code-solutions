import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggled: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ isToggled: !this.state.isToggled });
  }

  render() {
    const showMenu = this.state.isToggled ? 'toggled' : '';
    const showDimmer = this.state.isToggled ? 'show-dimmer' : 'hide-dimmer';
    return (
      <>
        <div className={'nav-menu ' + showMenu}>
          <MenuList onClick={this.toggleMenu} />
        </div>
        <div className={'dimmer ' + showDimmer} onClick={this.toggleMenu} />
        <i className="fas fa-bars" onClick={this.toggleMenu} />
      </>
    );
  }
}

class MenuList extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick();
  }

  render() {
    const menuItems = ['About', 'Get Started', 'Sign In'];
    return (
      <ul className="nav-list">
        <li className="menu-header">Menu</li>
        {menuItems.map((item, index) => <li key={index} className="menu-item"
        onClick={this.handleClick}>{item}</li>)}
      </ul>
    );
  }
}

export { AppDrawer };
