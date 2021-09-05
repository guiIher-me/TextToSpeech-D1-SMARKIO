import {Http} from './requisitions.mjs';
import {Feedback} from './FeedbackManager.mjs';

const ID_COMMENTS_PARENT = 'list-comments';

export async function loadComments() {
	var req = new Http();
	req.get(document.URL + "comments", function(res) {
	    if (res.status == 200) {
	    	_insertCommentsInDOM(res.response);
		} else {
			Feedback.error("Erro ao carregar comentários!");
		}
	});
}

export function insertNewerCommentDOM(comment) {
	const str_dom = _getCommentAsDOM(comment, true);
	const parent  = document.getElementById(ID_COMMENTS_PARENT);
	parent.innerHTML = str_dom + parent.innerHTML;
}

function _insertCommentsInDOM(comments) {
	const str_dom  = _getCommentsAsDOM(comments);
	const parent   = document.getElementById(ID_COMMENTS_PARENT);
	parent.innerHTML = str_dom;
}

function _getCommentsAsDOM(comments) {
	let str_dom = "";
	for(let i=0; i<comments.length; i++)
		str_dom += _getCommentAsDOM(comments[i].comment);

	return str_dom;
}

function _getCommentAsDOM(comment, newer = false) {
	const url_sound = document.URL + '/sounds/roar.wav';

	const commentDOM=`<div class="comment-item" data-newer="${newer}">
	 					<div class="comment-box-text">
	 						<span class="comment-text">${comment}</span>
	 					</div>

	 					<div class="comment-box-listen">
	 						<button type="button" class="btn comment-listen" onclick="play(this)">Ouvir</button>
	 						<audio id='${url_sound}' src="${url_sound}"></audio>
	 					</div>
	 				  </div>`;

 	return commentDOM;
}
