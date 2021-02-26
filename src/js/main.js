import modal from './modules/modal';
import scroll from './modules/scroll';
import toggleBtn from './modules/toggleBtn';

window.addEventListener('DOMContentLoaded', () => {
    modal('.nav_btn', '.overlay');
    scroll();
    toggleBtn('.l');
})