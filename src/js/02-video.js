import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

player.on('timeupdate', throttle(saveCurrentTime, 1000));

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));

function saveCurrentTime(data) {
  const statusData = data.seconds;
  localStorage.setItem('videoplayer-current-time', statusData);
}
