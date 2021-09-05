import {Http} from './requisitions.mjs';
import {insertNewerCommentDOM}  from './loadComments.mjs';
import {Feedback} from './feedbackManager.mjs';

const ID_COMMENT_FORM    = "form-comment";
const ID_COMMENT_FIELD   = "field-comment";
const MAX_COMMENT_LENGTH = 500;

function watchSubmits() {
	const submit = document.getElementById(ID_COMMENT_FORM);
	submit.addEventListener("submit", (event) => _send(event), false);
}
export default watchSubmits;

function _send(event) {
	event.preventDefault();
	Feedback.hidden();

	const field = document.getElementById(ID_COMMENT_FIELD);
	const comment = field.value;

	const checker = _validate(comment);
	if(checker.valid)
		_save(comment, event.target);
	else
		Feedback.show(checker.message, checker.flag);
}

function _save(comment, form) {
	var req = new Http();
	req.post(document.URL + "comments", {data: comment}, function(res) {
	    if (res.status == 200) {
	    	const register = JSON.parse(res.response).data;
	    	insertNewerCommentDOM(register.comment);
	    	Feedback.success("Comentário cadastrado com sucesso!");
	    	form.reset();
		} else {
			Feedback.error("Oops! Houve algum problema no servidor ao tentar salvar seu comentário...");
		}
	});
}

function _validate(comment) {
	let checker = {
		valid: false,
		message: "",
		flag: ""
	};

	if(comment == null) {
		checker.message = "Erro ao cadastrar comentário";
		checker.flag    = Feedback.ERROR;
	} else if(comment.length == 0) {
		checker.message = "Escreva um comentário!";
		checker.flag    = Feedback.ERROR;
	} else if(comment.length > MAX_COMMENT_LENGTH) {
		checker.message = "O comentário não deve exceder 500 caracteres!";
		checker.flag    = Feedback.ERROR;
	} else {
		checker.valid = true;
		checker.flag  = Feedback.SUCCESS;
	}

	return checker;
}
