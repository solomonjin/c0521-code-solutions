import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentDisplay: null };
    this.clickTopic = this.clickTopic.bind(this);
  }

  clickTopic(header) {
    if (header === this.state.currentDisplay) {
      this.setState({ currentDisplay: null });
    } else {
      this.setState({ currentDisplay: header });
    }
  }

  render() {
    return (
      <div className="container">
        {this.props.topics.map(topic => <AccordionItem key={topic.title}
                                                       title={topic.title}
                                                       content={topic.content}
                                                       onClick={this.clickTopic}
                                                       display={topic.title === this.state.currentDisplay} />)}
      </div>
    );
  }
}

class AccordionItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.onClick(event.target.textContent);
  }

  render() {
    const isShown = this.props.display ? ' show' : '';

    return (
      <div className="row accordion-item">
        <div className="header col" onClick={this.handleClick}>
          <h3>{this.props.title}</h3>
        </div>
        <div className={'content col' + isShown}>
          <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
}

export { Accordion };
