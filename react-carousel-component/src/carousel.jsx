import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0 };
    this.previousImg = this.previousImg.bind(this);
    this.nextImg = this.nextImg.bind(this);
  }

  nextImg() {
    if (this.state.currentIndex + 1 > this.props.images.length - 1) {
      this.setState({ currentIndex: 0 });
    } else {
      this.setState({ currentIndex: this.state.currentIndex + 1 });
    }
  }

  previousImg() {
    if (this.state.currentIndex - 1 < 0) {
      this.setState({ currentIndex: this.props.images.length - 1 });
    } else {
      this.setState({ currentIndex: this.state.currentIndex - 1 });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row container-row">
          <div className="col-20">
            <i className="fas fa-chevron-left arrow" onClick={this.previousImg} />
          </div>
          <div className="col-60">
            <div className="row">
              <div className="image-container">
                <Images currentIndex={this.state.currentIndex} images={this.props.images} />
              </div>
            </div>
            <div className="row">
              <ImageDots length={this.props.images.length} currentIndex={this.state.currentIndex} />
            </div>
          </div>
          <div className="col-20">
            <i className="fas fa-chevron-right arrow" onClick={this.nextImg} />
          </div>
        </div>

      </div>
    );
  }
}

class Images extends React.Component {
  render() {
    return (
      <>
        {this.props.images.map((img, index) => <img key={index} src={img}
                                className={index === this.props.currentIndex ? 'show' : ''} />)}
      </>
    );
  }
}

function ImageDots(props) {
  const imageDots = [];
  for (let i = 0; i < props.length; i++) {
    const dotClass = i === props.currentIndex ? 'fas fa-circle dot' : 'far fa-circle dot';
    imageDots.push(<i key={i.toString()} className={dotClass} />);
  }
  return imageDots;
}

export default Carousel;
