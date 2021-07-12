import React from 'react';

class Accordion extends React.Component {
  render() {
    return (
      <div className="container">
        {this.props.topics.map(topic => <AccordionItem key={topic.title}
                                                       title={topic.title}
                                                       content={topic.content} />)}
      </div>
    );
  }
}

class AccordionItem extends React.Component {
  render() {
    return (
      <div className="row accordion-item">
        <div className="header col">
          <h3>{this.props.title}</h3>
        </div>
        <div className="content col">
          <p>{this.props.content}</p>
        </div>
      </div>
    );
  }
}

export { Accordion };
