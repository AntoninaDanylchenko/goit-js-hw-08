import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

startVideo();

player.on('timeupdate', throttle(saveCurrentTime, 500));

function saveCurrentTime(data) {
  const statusData = data.seconds;

  localStorage.setItem('videoplayer-current-time', JSON.stringify(statusData));

  console.log(JSON.parse(localStorage.getItem('videoplayer-current-time')));
}

function startVideo() {
  const localTimeData = JSON.parse(
    localStorage.getItem('videoplayer-current-time')
  );

  console.log(localTimeData);

  if (localTimeData) {
    player.setCurrentTime(localTimeData);
  }
}

localStorage.removeItem('videoplayer-current-time');
