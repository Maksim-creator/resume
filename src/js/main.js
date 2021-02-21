import accordeon from "./modules/accordeon";
import modal from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
    accordeon('.accordion-heading');
    modal('.nav_btn', '.overlay');
})