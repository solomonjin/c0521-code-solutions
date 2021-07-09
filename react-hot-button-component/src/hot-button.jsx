import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicks: 0 };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ clicks: this.state.clicks + 1 });
  }

  render() {
    if (this.state.clicks < 3) return <button onClick={this.handleClick}>Hot Button</button>;
    else if (this.state.clicks < 6) return <button className="purple" onClick={this.handleClick}>Hot Button</button>;
    else if (this.state.clicks < 9) return <button className="lilac" onClick={this.handleClick}>Hot Button</button>;
    else if (this.state.clicks < 12) return <button className="red" onClick={this.handleClick}>Hot Button</button>;
    else if (this.state.clicks < 15) return <button className="orange" onClick={this.handleClick}>Hot Button</button>;
    else if (this.state.clicks < 18) return <button className="yellow" onClick={this.handleClick}>Hot Button</button>;
    else return <button className="white" onClick={this.handleClick}>Hot Button</button>;

  }
}

export { HotButton };
