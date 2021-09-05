
function play(btn) {
	const audio = btn.nextElementSibling;
	console.log(audio);
	audio.play();
}

export default play;
