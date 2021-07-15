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
  }

  clickArrows(isIncreasing) {
    let { currentIndex: current } = this.state;
    const max = this.props.images.length;

    if (isIncreasing) {
      current = parseIndex(current + 1, max);
    } else {
      current = parseIndex(current - 1, max);
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

function parseIndex(num, max) {
  if (num < 0) return max - 1;
  if (num >= max) return 0;
  return num;
}

export default Carousel;
