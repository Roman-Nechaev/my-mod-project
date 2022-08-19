import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframeRef = document.querySelector('iframe');

const SAVE_TIME_PL = 'videoplayer-current-time';
const getlocalStorage = localStorage.getItem(SAVE_TIME_PL);

const player = new Player(iframeRef, {});
///ВАРИЕНТ hrottle как отдельная функция
// function onPlay(data) {
//   const setTime = data.seconds;

//   onThrottle(setTime);
// }

// let onThrottle = throttle(e => {
//   localStorage.setItem(SAVE_TIME_PL, e);
//   console.log(e);
// }, 1000);
const onPlay = function (data) {
  const playerSecond = data.seconds;

  localStorage.setItem(SAVE_TIME_PL, playerSecond);

  console.log(playerSecond);
};

player
  .setCurrentTime(getlocalStorage)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

player.on('timeupdate', throttle(onPlay, 1000));

////////////////////////////////////////////

/////////////ВТОРОЙ ВАРИАНТ
