import {Feedback} from './FeedbackManager.mjs';

async function play(btn) {
	const audio = btn.nextElementSibling;
	await pauseAll();
	
	const promise = audio.play();
	if (promise !== undefined) {
	    promise.then(_ => {
	    	Feedback.hidden();
	    }).catch(error => {
	        Feedback.error("Não foi possível reproduzir este áudio");
	    });
	}
}
export default play;

async function pauseAll() {
	var sounds = document.getElementsByTagName('audio');
	for(let i=0; i<sounds.length; i++) {
		sounds[i].pause();
		sounds[i].currentTime = 0;
	}
}