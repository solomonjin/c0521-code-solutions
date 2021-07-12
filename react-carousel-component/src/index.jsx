import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

ReactDOM.render(
  <Carousel images={[
    'https://emoji.gg/assets/emoji/9448_fingergun.png',
    'https://emoji.discord.st/emojis/025caa2c-36b9-44e1-ade5-6ca911f0dfed.png',
    'https://64.media.tumblr.com/0b4fcc3309947f2c0f537af7847063e2/b1f2fc1a836dfbd7-16/s540x810/603ecd92f9634ecdcf66489f0fdfeeb9697fcfac.png',
    'https://emoji.gg/assets/emoji/1608_Fingerguns.png'
  ]}/>,
  document.querySelector('#root')
);
