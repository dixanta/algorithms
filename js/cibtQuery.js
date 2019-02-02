/*
 Javascript Library similar functioning like a jQuery Library
 which is in the early phase of development. 
 Written By: Dixanta Bahadur Shrestha
 Creators Institute of Business & Technology
*/

//var content=document.body.innerText;
//data=content.match(/{{(.*?)}}/g);
function $(key) {
	var obj;
	//console.log(typeof key);
	if (typeof key === 'object') {
		obj = [key];
	} else {
		obj = document.querySelectorAll(key);
		
	}
	console.log(obj);

	function selector(callback) {
		obj.forEach(function (o, i) {
			callback(o);
		});
	};

	this.html = function (val) {

		if (val != undefined) {
			selector(function (o) {
				o.innerHTML = val;
			});
			return this;
		} else {
			return obj[0].innerHTML;
		}
	};
	this.height = function (v) {
		selector(function (o) {
			o.style.height = v + "px";
		});
		return this;
	};
	this.width = function (v) {
		selector(function (o) {
			o.style.width = v + "px";
		});
		return this;
	};

	this.first=function(){
		return $(obj[0]);
	};

	this.last=function(){
		return $(obj[obj.length-1]);
	}

	this.hide = function () {

		obj.forEach(function (o, i) {
			o.style.display = "none";
		});
		return this;
	};
	this.prop=function(k,v){
		if(v == undefined){
			return obj[0].getAttribute(k);
		}else{
			selector(function(o){
				o.setAttribute(k,v);
			});
			return this;
		}
	};
	this.show = function () {

		obj.forEach(function (o, i) {
			o.style.display = "block";
		});
		return this;
	};

	this.css = function (k, v) {
		selector(function (o) {
			o.setAttribute('style', k + ":" + v + ";");
		});
		return this;
	}

	this.on = function (type, callback) {
		obj.forEach(function (o, i) {
			o.addEventListener(type, callback);
		});
		return this;
	};

	this.fadeOut = function () {
		var opacity = 1;
		selector(function (o) {
			var interval = setInterval(function () {
				o.style.opacity = opacity;
				opacity = opacity - 0.01;
				if (opacity <= 0) {
					o.style.display = "none";
				}
			}, 10);
		});
		return this;
	}

	this.fadeIn = function () {
		var opacity = 0;
		obj.forEach(function (o, i) {
			o.style.opacity = opacity;
			o.style.display = "block";
			var interval = setInterval(function () {
				o.style.opacity = opacity;
				opacity = opacity + 0.01;
				if (opacity >= 1) {
					clearInterval(interval);
				}
			}, 100);
		});
		return this;
	}

	this.text=function(){
		return obj[0].innerText;
	};

	return this;
}
