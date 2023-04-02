import locationHandler from './router';
import './stylesheets/main.css';

locationHandler();
window.addEventListener('hashchange', locationHandler);
