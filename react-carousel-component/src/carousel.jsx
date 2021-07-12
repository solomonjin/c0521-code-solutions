import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentImg: 0 };
    this.previousImg = this.previousImg.bind(this);
    this.nextImg = this.nextImg.bind(this);
  }

  render() {
    const imageDots = [<i key="0" className="fas fa-circle dot" />];
    for (let i = 1; i < this.props.images.length; i++) {
      imageDots.push(<i key={i.toString()} className="far fa-circle dot" />);
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-20">
            <i className="fas fa-chevron-left arrow" onClick={this.previousImg} />
          </div>
          <div className="col-60">
            <img src={this.props.images[0]} />
          </div>
          <div className="col-20">
            <i className="fas fa-chevron-right arrow" onClick={this.nextImg} />
          </div>
        </div>
        <div className="row">
          {imageDots}
        </div>
      </div>
    );
  }
}

export default Carousel;
