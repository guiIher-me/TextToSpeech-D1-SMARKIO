
async function play(btn) {
	const audio = btn.nextElementSibling;
	await pauseAll();
	audio.play();
}
export default play;

async function pauseAll() {
	var sounds = document.getElementsByTagName('audio');
	for(let i=0; i<sounds.length; i++) {
		sounds[i].pause();
		sounds[i].currentTime = 0;
	}
}