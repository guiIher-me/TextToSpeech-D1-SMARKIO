import {Http} from './requisitions.mjs';

const ID_COMMENTS_PARENT = 'list-comments';

function load() {
	var req = new Http();
	req.get(document.URL + "comments", function(res) {
	    if (res.status == 200) {
	    	_insertCommentsDOM(res.response);
		} else {
			console.log("Erro ao pegar os dados json via get!");
		}
	});
}
export default load;

function _insertCommentsDOM(comments) {
	const str_dom  = _getCommentsDOM(comments);
	const parent   = document.getElementById(ID_COMMENTS_PARENT);
	parent.innerHTML += str_dom;
}

function _getCommentsDOM(comments) {
	console.log(comments);
	let str_dom = "";
	for(let i=0; i<comments.length; i++)
		str_dom += _getCommentDOM(comments[i].comment);

	return str_dom;
}

function _getCommentDOM(comment) {
	const commentDOM=`<div class="comment-item">
 					<div class="comment-box-text">
 						<span class="comment-text">${comment}</span>
 					</div>

 					<div class="comment-box-button">
 						<button type="button" class="btn comment-listen">Ouvir</button>
 					</div>
 				</div>`;

 	return commentDOM;
}