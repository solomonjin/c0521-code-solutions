import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      previousIndex: props.images.length - 1,
      nextIndex: 1,
      intervalID: null
    };
    this.previousImg = this.previousImg.bind(this);
    this.nextImg = this.nextImg.bind(this);
    // this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    this.clickDot = this.clickDot.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
    // this.componentDidUpdate = this.componentDidUpdate.bind(this);
  }

  nextImg() {
    // condition if at beginning/end of images array
    this.setState({ currentIndex: this.state.currentIndex + 1 });
  }

  previousImg() {
    this.setState({ currentIndex: this.state.currentIndex - 1 });
  }

  // handleTransitionEnd(event) {
  //   if (this.state.transition === ' slide-left') {
  //     if (this.state.currentIndex + 1 > this.props.images.length - 1) {
  //       this.setState({ currentIndex: 0, transition: '' });
  //     } else {
  //       this.setState({ currentIndex: this.state.currentIndex + 1, transition: '' });
  //     }
  //   } else if (this.state.transition === ' slide-right') {
  //     if (this.state.currentIndex - 1 < 0) {
  //       this.setState({ currentIndex: this.props.images.length - 1, transition: '' });
  //     } else {
  //       this.setState({ currentIndex: this.state.currentIndex - 1, transition: '' });
  //     }
  //   }
  // }

  clickDot(index) {
    this.setState({ currentIndex: index });
  }

  // componentDidMount() {
  //   const intervalID = setInterval(this.nextImg, 3000);
  //   this.setState({ intervalID });
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.intervalID === this.state.intervalID) {
  //     clearInterval(prevState.intervalID);
  //     this.setState({ intervalID: setInterval(this.nextImg, 3000) });
  //   }
  // }

  render() {
    return (
      <div className="container">
        <a href={'#carousel-img-' + (this.state.previousIndex)}>
          <i className="fas fa-chevron-left arrow left-arrow" onClick={this.previousImg} />
        </a>
        <div className="image-row">
          <Images images={this.props.images}/>
        </div>
        <div className="row dots">
          <ImageDots length={this.props.images.length}
                      currentIndex={this.state.currentIndex}
                      clickDot={this.clickDot} />
        </div>
        <a href={'#carousel-img-' + (this.state.nextIndex)}>
          <i className="fas fa-chevron-right arrow right-arrow" onClick={this.nextImg} />
        </a>
      </div>
    );
  }
}

function Images(props) {
  return (
    <>
      {props.images.map((img, index) => {
        return (
          <div key={index} id={'carousel-img-' + index} className="image-container">
            <img src={img} />
          </div>
        );
      })}
    </>
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
