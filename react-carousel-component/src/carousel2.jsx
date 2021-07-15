import React from 'react';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      timerID: null
    };
    this.clickArrows = this.clickArrows.bind(this);
    this.clickDot = this.clickDot.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.parseIndex = this.parseIndex.bind(this);
  }

  clickArrows(isIncreasing) {
    let { currentIndex: current } = this.state;

    if (isIncreasing) {
      current = this.parseIndex(current + 1);
    } else {
      current = this.parseIndex(current - 1);
    }

    window.location.hash = '#carousel-img-' + current;
    const timerID = this.resetTimer();
    this.setState({
      currentIndex: current,
      timerID
    });
  }

  clickDot(index) {
    window.location.hash = '#carousel-img-' + index;
    const timerID = this.resetTimer();
    this.setState({
      currentIndex: index,
      timerID
    });
  }

  componentDidMount() {
    const timerID = setTimeout(() => this.clickArrows(true), 3000);
    this.setState({ timerID });
  }

  resetTimer() {
    clearInterval(this.state.timerID);
    return setTimeout(() => this.clickArrows(true), 3000);
  }

  parseIndex(num) {
    if (num < 0) return this.props.images.length - 1;
    if (num >= this.props.images.length) return 0;
    return num;
  }

  render() {
    return (
      <div className="container">
        <i className="fas fa-chevron-left arrow left-arrow" onClick={() => this.clickArrows(false)} />
        <div className="image-row">
          <Images images={this.props.images}/>
        </div>
        <div className="row dots">
          <ImageDots images={this.props.images}
                      currentIndex={this.state.currentIndex}
                      clickDot={this.clickDot} />
        </div>
        <i className="fas fa-chevron-right arrow right-arrow" onClick={() => this.clickArrows(true)} />
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
  return (
    <>
      {props.images.map((dot, i) => {
        const dotClass = i === props.currentIndex
          ? 'fas fa-circle dot'
          : 'far fa-circle dot';
        return <i key={i} className={dotClass} onClick={() => props.clickDot(i)} />;
      })}
    </>
  );
}

export default Carousel;
