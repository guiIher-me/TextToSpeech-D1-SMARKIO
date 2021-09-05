const fs = require('fs');
const path = require('path');
const SOUNDS_PATH = '/../../public/sounds/';

module.exports = {
	soundExists(sound_file) {
		const file = path.join(__dirname, SOUNDS_PATH) + sound_file + '.wav';
		return fs.existsSync(file);
	},

	hashCode(text) {
	  let hash = 0;
	  let chr;

	  for(let i = 0; i < text.length; i++) {
	    chr   = text.charCodeAt(i);
	    hash  = ((hash << 5) - hash) + chr;
	    hash |= 0; // Convert to 32bit integer
	  }

	  return hash & 0xfffffff;
	}
}