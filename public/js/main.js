import {loadComments} from './modules/loadComments.mjs';
import watchSubmits from './modules/saveComments.mjs';
import play from './modules/soundManager.mjs';

document.addEventListener("DOMContentLoaded", (event) => {
	watchSubmits();
	loadComments();
	window.play = play;
});