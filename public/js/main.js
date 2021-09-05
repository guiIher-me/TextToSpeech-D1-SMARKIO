import {load} from './modules/loadComments.mjs';
import watch from './modules/saveComments.mjs';

document.addEventListener("DOMContentLoaded", (event) => load());
document.addEventListener("DOMContentLoaded", (event) => watch());
