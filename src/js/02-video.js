import Player from '@vimeo/player';
const SAVE_TIME_PL = 'videoplayer-current-time';
const iframeRef = document.querySelector('iframe');

const player = new Player(iframeRef, {
  ////
});

const onPlay = function (data) {
  console.log('onPlay ~ data', data);
  player
    .getCurrentTime()
    .then(function (seconds) {
      const setTime = seconds;
      console.log('setTime', setTime);
      console.log('pausePlay ~ setTime', setTime);
      localStorage.setItem(SAVE_TIME_PL, setTime);

      // seconds = the current playback position
    })
    .catch(function (error) {
      console.log(error);
    });
};

player.on('play', onPlay);

const pausePlay = function (data) {
  console.log('pausePlay ~ data', data);
};

player.on('pause', pausePlay);
const bar = localStorage.getItem(SAVE_TIME_PL);
console.log(bar);
//////

////////////
player
  .setCurrentTime(bar)
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
