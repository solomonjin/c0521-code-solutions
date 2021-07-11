import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const validSymbol = this.state.value.length <= 8
      ? <i className="fas fa-times red" />
      : <i className="fas fa-check green" />;

    const errorMessage = this.state.value.length === 0
      ? 'A password is required.'
      : 'Your password is too short.';

    return (
    <form>
      <div className="row">
        <label htmlFor="user-password">Password</label>
      </div>
      <div className="row">
        <input id="user-password" type="password" value={this.state.value} onChange={this.handleChange} />
        {validSymbol}
      </div>
        {this.state.value.length <= 8 &&
        <div className="row">
          <span className="red">{errorMessage}</span>
        </div>}
    </form>);
  }
}

export { ValidatedInput };
