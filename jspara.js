/*
JsPara a simple javascript class for extracting GET parameters from a URL [add some other *BONUS* functions ;)]
@author: manujith pallewatte [manujith.nc@gmail.com]
@code  : this code is free to distribute, edit, reuse in any possible way.

*NOTE* still in BETA level so please report bugs, feature addition requests to above email

*/
function JsPara(url){
	//decide the encoding
	this.url = decodeURI(url);
	
	//store protocol
	this.protocol = url.protocol;
	
	//store host
	this.hostname = url.hostname;
	
	//store port
	this.port = url.port;
	
	//store path
	this.path = url.pathname
	
	//first process query string
	//get the parameter part
	//var para_str = this.url.substr(this.url.indexOf("?")+1);
	
	var para_str = decodeURIComponent(url.search.substr(1)).replace( /\+/g, ' ' );
	
	var para_hash = decodeURIComponent(url.hash.substr(1)).replace( /\+/g, ' ' );
	
	var matches = [];
		
	//find for perfect type one i.e para = value
	if(para_str != ""){
		matches = para_str.match(/[A-z0-9_ .,\'\"]+=[A-z0-9_ .,\'\"]+/g);	
	}
	if(para_hash != ""){
		matches = matches.concat(para_hash.match(/[A-z0-9_ .,\'\"]+=[A-z0-9_ .,\'\"]+/g));
	}

	
	this.params = [];
	this.param = [];
	
	//assign those to instance variables
	if(matches != null){
		for(var i=0;i<matches.length;i++){
			if(matches[i] != null){
				var parts = matches[i].split("=");
				this.params.push(parts[0]);
				this.param[parts[0]] = parts[1];
			}
		}
	}
	
	//match for null parameters
	if(para_str != ""){
		matches = para_str.match(/&[A-z0-9. _,\'\"]+/g);
	}
	if(para_hash != ""){
		matches = matches.concat(para_hash.match(/&[A-z0-9. _,\'\"]+/g));	
	}
	
	//assing null value to those
	if(matches != null){
		for(var i=0;i<matches.length;i++){
			if(matches[i] != null){
				var parts = matches[i].split("&");
				if(typeof this.param[parts[1]] == "undefined"){
					this.params.push(parts[1]);
					this.param[parts[1]] = null;
				}
			}
		}	
	}	
}
