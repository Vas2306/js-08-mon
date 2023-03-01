import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// let startTime;
// if (localStorage.getItem(CURRENT_TIME)) {
//     startTime = localStorage.getItem(CURRENT_TIME);
// }
// else {
//     startTime = 0;
// }
  
player.setCurrentTime(localStorage.getItem(CURRENT_TIME) || 0).then(function (seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function (error) {
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

function onPlay(evt) {
localStorage.setItem(CURRENT_TIME, evt.seconds)
}
