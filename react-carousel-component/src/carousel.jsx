import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: 0, transition: '', intervalID: null };
    this.previousImg = this.previousImg.bind(this);
    this.nextImg = this.nextImg.bind(this);
    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    this.clickDot = this.clickDot.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  nextImg() {
    this.setState({ transition: ' slide-left' });
  }

  previousImg() {
    this.setState({ transition: ' slide-right' });
  }

  handleTransitionEnd(event) {
    if (this.state.transition === ' slide-left') {
      if (this.state.currentIndex + 1 > this.props.images.length - 1) {
        this.setState({ currentIndex: 0 });
      } else {
        this.setState({ currentIndex: this.state.currentIndex + 1 });
      }
    } else if (this.state.transition === ' slide-right') {
      if (this.state.currentIndex - 1 < 0) {
        this.setState({ currentIndex: this.props.images.length - 1 });
      } else {
        this.setState({ currentIndex: this.state.currentIndex - 1 });
      }
    }
    this.setState({ transition: '' });
  }

  clickDot(index) {
    this.setState({ currentIndex: index });
  }

  componentDidMount() {
    const intervalID = setInterval(this.nextImg, 3000);
    this.setState({ intervalID });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.intervalID === this.state.intervalID) {
      clearInterval(prevState.intervalID);
      this.setState({ intervalID: setInterval(this.nextImg, 3000) });
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
                <Images currentIndex={this.state.currentIndex}
                        images={this.props.images}
                        transition={this.state.transition}
                        onTransitionEnd={this.handleTransitionEnd} />
              </div>
            </div>
            <div className="row">
              <ImageDots length={this.props.images.length}
                         currentIndex={this.state.currentIndex}
                         clickDot={this.clickDot} />
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

function Images(props) {
  const imagesLength = props.images.length;
  let imageList = [];
  if (props.currentIndex === 0) {
    imageList = imageList.concat(props.images.slice(imagesLength - 1), props.images.slice(0, 2));
  } else if (props.currentIndex === imagesLength - 1) {
    imageList = imageList.concat(props.images.slice(imagesLength - 2), [props.images[0]]);
  } else {
    imageList = imageList.concat(props.images.slice(props.currentIndex - 1, props.currentIndex + 2));
  }
  return (
    <div className={'row' + props.transition} onTransitionEnd={e => props.onTransitionEnd(e)}>
      {imageList.map((img, index) => <img key={index} src={img} />)}
    </div>
  );
}

function ImageDots(props) {
  const imageDots = [];
  for (let i = 0; i < props.length; i++) {
    const dotClass = i === props.currentIndex ? 'fas fa-circle dot' : 'far fa-circle dot';
    imageDots.push(<i key={i.toString()} className={dotClass} onClick={() => props.clickDot(i)} />);
  }
  return imageDots;
}

export default Carousel;
