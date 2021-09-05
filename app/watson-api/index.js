const fs = require('fs');
const path = require('path');
const TextToSpeechV1 = require('ibm-watson/text-to-speech/v1');

module.exports = {
    async getAudio(text) {
    	const cred = {
			"apikey": "t4s6tzz4932Lw-BjK3tLUD-nV8KuH2IJdXzkZOhoed8g",
			"url": "https://api.au-syd.text-to-speech.watson.cloud.ibm.com/instances/5469c507-a898-4bc0-a5f5-337c18158f1f"
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

        let result = null;
		await textToSpeech.synthesize(parameters)
			.then(response => {
				return textToSpeech.repairWavHeaderStream(response.result);
			})
			.then(buffer => {
				fs.writeFileSync(path.join(__dirname, '/../../public/sounds/') + text + '.wav', buffer);
				return Promise.resolve();
			})
			.catch(err => {
				console.log('error:', err);
			});

		return result;
	}

};