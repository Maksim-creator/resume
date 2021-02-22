import modal from './modules/modal';
import scroll from './modules/scroll';

window.addEventListener('DOMContentLoaded', () => {
    modal('.nav_btn', '.overlay');
    scroll()
})