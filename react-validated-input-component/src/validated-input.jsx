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
    const validPW = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()])/.test(this.state.value);
    const validSymbol = this.state.value.length <= 8 || !validPW
      ? <i className="fas fa-times red" />
      : <i className="fas fa-check green" />;

    let errorMessage = '';
    if (!validPW) {
      errorMessage =
    `Password requires one uppercase
    and lowercase letters, a digit,
    and a special character.`;
    }
    if (this.state.value.length < 8) errorMessage = 'Your password is too short.';
    if (this.state.value.length === 0) errorMessage = 'A password is required.';

    return (
    <form>
      <div className="row">
        <label htmlFor="user-password">Password</label>
      </div>
      <div className="row">
        <input id="user-password" type="password" value={this.state.value} onChange={this.handleChange} />
        {validSymbol}
      </div>
        {(this.state.value.length <= 8 || !validPW) &&
        <div className="row">
          <span className="red">{errorMessage}</span>
        </div>}
    </form>);
  }
}

export { ValidatedInput };
