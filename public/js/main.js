const ID_COMMENTS_PARENT = 'list-comments';

document.addEventListener("DOMContentLoaded", (event) => loadComments());

function loadComments() {
	var req = new Http();
	req.get(document.URL + "comments", function(res) {
	    if (res.status == 200) {
	    	_insertCommentsDOM(res.response);
		} else {
			console.log("Erro ao pegar os dados json via get!");
		}
	});
}

function _insertCommentsDOM(comments) {
	str_dom  = _getCommentsDOM(comments);
	parent   = document.getElementById(ID_COMMENTS_PARENT);
	parent.innerHTML += str_dom;
}

function _getCommentsDOM(comments) {
	console.log(comments);
	str_dom = "";
	for(let i=0; i<comments.length; i++)
		str_dom += _getCommentDOM(comments[i].comment);

	return str_dom;
}

function _getCommentDOM(comment) {
	commentDOM=`<div class="comment-item">
 					<div class="comment-box-text">
 						<span class="comment-text">${comment}</span>
 					</div>

 					<div class="comment-box-button">
 						<button type="button" class="btn comment-listen">Ouvir</button>
 					</div>
 				</div>`;

 	return commentDOM;
}

var Http = function() {
	this.requisition = function(url, callback, req_method) {
		var req = new XMLHttpRequest();
        req.onreadystatechange = function() { 
            if (req.readyState == 4)
                callback(req);
        }
        req.responseType = 'json';
        req.open(req_method, url, true);            
        req.send(null);
	}

	this.post = function(url, callback) {
		this.requisition(url, callback, "POST");
	}

    this.get = function(url, callback) {
       this.requisition(url, callback, "GET");
    }
}