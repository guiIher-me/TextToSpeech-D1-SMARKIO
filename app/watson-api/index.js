require('dotenv').config();
const fs = require('fs');
const path = require('path');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');

module.exports = {
    async getAudio(text, hash_text) {
    	const cred = {
			"apikey": process.env.IBM_TTS_APIKEY,
			"url": process.env.IBM_TTS_URL
		}

    	const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');
		const { IamAuthenticator } = require('ibm-watson/auth');

		const textToSpeech = new TextToSpeechV1({
		  authenticator: new IamAuthenticator({
		    apikey: cred.apikey,
		  }),
		  serviceUrl: cred.url,
		});

		const parameters = {
            text: text,
            voice: 'pt-BR_IsabelaV3Voice',
            accept: 'audio/wav'
        };

		await textToSpeech.synthesize(parameters)
			.then(response => {
				return textToSpeech.repairWavHeaderStream(response.result);
			})
			.then(buffer => {
				fs.writeFileSync(path.join(__dirname, '/../../public/sounds/') + hash_text + '.wav', buffer);
				return Promise.resolve();
			})
			.catch(err => {
				console.log('error:', err);
			});

		return null;
	}

};