import {Http} from './requisitions.mjs';

const ID_COMMENT_FORM    = "form-comment";
const ID_COMMENT_FIELD   = "field-comment";
const MAX_COMMENT_LENGTH = 500;

function watch() {
	const submit = document.getElementById(ID_COMMENT_FORM);
	submit.addEventListener("submit", (event) => _send(event), false);
}
export default watch;

function _send(event) {
	event.preventDefault();

	const field = document.getElementById(ID_COMMENT_FIELD);
	const comment = field.value;

	const checker = _validate(comment);
	if(checker.valid) {
		_save(comment);
	} else {
		console.log(checker.message);
	}
}

function _save(comment) {
	var req = new Http();
	req.post(document.URL + "comments", {data: comment}, function(res) {
	    if (res.status == 200) {
	    	console.log("Sucesso ao salvar!");
		} else {
			console.log("Erro ao salvar!");
		}
	});
}

function _validate(comment) {
	let checker = {
		valid: false,
		message: "",
		type: ""
	};

	if(comment == null) {
		checker.message = "Erro ao cadastrar comentário";
		checker.type = "error";
	} else if(comment.length == 0) {
		checker.message = "Escreva um comentário!";
		checker.type = "alert";
	} else if(comment.length > MAX_COMMENT_LENGTH) {
		checker.message = "O comentário não deve exceder 500 caracteres!";
		checker.type = "error";
	} else {
		checker.valid = true;
		checker.type = "success";
	}

	return checker;
}

