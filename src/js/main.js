import accordeon from "./modules/accordeon";
import modal from './modules/modal';
import scrolling from './modules/scrolling';

window.addEventListener('DOMContentLoaded', () => {
    accordeon('.accordion-heading');
    modal('.nav_btn', '.overlay');
    scrolling();
})