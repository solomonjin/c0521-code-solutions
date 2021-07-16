import React, { useState } from 'react';

// class Stopwatch extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isPlaying: false,
//       count: 0
//     };
//     this.togglePlay = this.togglePlay.bind(this);
//     this.clickTimer = this.clickTimer.bind(this);
//   }

//   togglePlay() {
//     this.setState({ isPlaying: !this.state.isPlaying });
//     if (this.timerID) {
//       clearInterval(this.timerID);
//       this.timerID = null;
//     } else {
//       this.timerID = setInterval(() => {
//         this.setState({ count: this.state.count + 1 });
//       }, 1000);
//     }
//   }

//   clickTimer() {
//     if (this.state.isPlaying) return;

//     this.setState({ count: 0 });
//   }

//   render() {
//     return (
//       <div className="row">
//         <div className="timer" onClick={this.clickTimer}>
//           <span>{this.state.count}</span>
//         </div>
//         <i onClick={this.togglePlay} className={this.state.isPlaying ? 'fas fa-pause' : 'fas fa-play'} />
//       </div>
//     );
//   }
// }

function Stopwatch(props) {
  const [timer, setTimer] = useState({
    isPlaying: false,
    count: 0,
    timerID: null
  });

  const togglePlay = () => {
    let newTimer;
    if (timer.timerID) {
      clearInterval(timer.timerID);
      newTimer = null;
    } else {
      newTimer = setInterval(() => {
        setTimer({ ...timer, count: timer.count + 1 });
      }, 1000);
    }
    setTimer({ ...timer, isPlaying: !timer.isPlaying, timerID: newTimer });
  };

  const clickTimer = () => {
    if (timer.isPlaying) {
      setTimer();
    }
  };
}

export { Stopwatch };
