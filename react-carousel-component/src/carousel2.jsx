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
    this.clickArrows = this.clickArrows.bind(this);
    this.clickDot = this.clickDot.bind(this);
  }

  clickArrows(isIncreasing) {
    let { currentIndex: current, previousIndex: previous, nextIndex: next } = this.state;
    const max = this.props.images.length;

    if (isIncreasing) {
      current = parseIndex(current + 1, max);
      previous = parseIndex(previous + 1, max);
      next = parseIndex(next + 1, max);
    } else {
      current = parseIndex(current - 1, max);
      previous = parseIndex(previous - 1, max);
      next = parseIndex(next - 1, max);
    }

    window.location.hash = '#carousel-img-' + current;

    this.setState({
      currentIndex: current,
      previousIndex: previous,
      nextIndex: next
    });
  }

  clickDot(index) {
    window.location.hash = '#carousel-img-' + index;
    this.setState({
      currentIndex: index,
      previousIndex: parseIndex(index + 1, this.props.images.length),
      nextIndex: parseIndex(index - 1, this.props.images.length)
    });
  }

  componentDidMount() {
    const intervalID = setInterval(() => this.clickArrows(true), 3000);
    this.setState({ intervalID });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.intervalID === this.state.intervalID) {
      clearInterval(prevState.intervalID);
      this.setState({ intervalID: setInterval(() => this.clickArrows(true), 3000) });
    }
  }

  render() {
    return (
      <div className="container">
        <i className="fas fa-chevron-left arrow left-arrow" onClick={() => this.clickArrows(false)} />
        <div className="image-row">
          <Images images={this.props.images}/>
        </div>
        <div className="row dots">
          <ImageDots length={this.props.images.length}
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
  const imageDots = [];
  for (let i = 0; i < props.length; i++) {
    const dotClass = i === props.currentIndex ? 'fas fa-circle dot' : 'far fa-circle dot';
    imageDots.push(<i key={i.toString()} className={dotClass} onClick={() => props.clickDot(i)} />);
  }
  return imageDots;
}

function parseIndex(num, max) {
  if (num < 0) return max - 1;
  if (num >= max) return 0;
  return num;
}

export default Carousel;
