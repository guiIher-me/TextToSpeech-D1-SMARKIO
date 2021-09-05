const fs = require('fs');
const path = require('path');
const SOUNDS_PATH = '/../../public/sounds/';

module.exports = {
	soundExists(sound_file) {
		const file = path.join(__dirname, SOUNDS_PATH) + sound_file + '.wav';
		return fs.existsSync(file);
	}
}