//  indexOf   不兼容 IE6-8
function unique(arr) {
	var _arr = [],
	    arrLength = arr.length;
	for(var i = 0; i < arrLength; i++) {
		var item = arr[i];
		if(_arr.indexOf(item) === -1){
			_arr.push(item);
		}
	}
	return _arr;
}

var arr = [112, 112, 34, '你好', 112, 112, 34, '你好', 'str', 'str1'];

unique(arr);


// hash
function unique(arr) {
	var _arr = [],
	  	hash = {},
	  	arrLength = arr.length;

	for (var i = 0; i < arrLength; i++) {
		var item = arr[i];
		var key = typeof(item) + item;
		if (hash[key] !== 1) {
			_arr.push(item);
			hash[key] = 1;
		}
	}

	return _arr;
}
