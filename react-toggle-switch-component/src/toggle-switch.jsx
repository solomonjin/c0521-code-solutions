import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggled: false };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isToggled: !this.state.isToggled });
  }

  render() {
    if (this.state.isToggled) {
      return (
        <div className="container">
          <div className="toggle-switch toggled" onClick={this.handleClick}>
            <div className="circle circle-on"></div>
          </div>
          <span>ON</span>
        </div>
      );
    }
    return (
      <div className="container">
        <div className="toggle-switch" onClick={this.handleClick}>
          <div className="circle"></div>
        </div>
        <span>OFF</span>
      </div>
    );
  }
}

export { ToggleSwitch };
