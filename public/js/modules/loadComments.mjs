import {Http} from './requisitions.mjs';

const ID_COMMENTS_PARENT = 'list-comments';

export function load() {
	var req = new Http();
	req.get(document.URL + "comments", function(res) {
	    if (res.status == 200) {
	    	_insertCommentsInDOM(res.response);
		} else {
			console.log("Erro ao pegar os dados json via get!");
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
	const commentDOM=`<div class="comment-item" data-newer="${newer}">
 					<div class="comment-box-text">
 						<span class="comment-text">${comment}</span>
 					</div>

 					<div class="comment-box-button">
 						<button type="button" class="btn comment-listen">Ouvir</button>
 					</div>
 				</div>`;

 	return commentDOM;
}
