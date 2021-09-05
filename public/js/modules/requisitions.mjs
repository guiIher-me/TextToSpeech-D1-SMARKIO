export const Http = function() {
	this.post = function(url, json_data, callback) {
		var req = new XMLHttpRequest();
        req.open("POST", url);
        req.setRequestHeader("Content-Type", "application/json");
        req.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE) {
                callback(req);
            }
        }
        req.send(JSON.stringify(json_data));
	}

    this.get = function(url, callback) {
        var req = new XMLHttpRequest();
        req.open("GET", url, true);
        req.responseType = 'json';
        req.onreadystatechange = function() {
            if (this.readyState == XMLHttpRequest.DONE)
                callback(req);
        }
        req.send(null);
    }
}