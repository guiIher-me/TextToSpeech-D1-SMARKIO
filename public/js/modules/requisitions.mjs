export const Http = function() {
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