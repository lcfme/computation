function deepClone(object) {
	if (typeof object === 'object') {

		if (({}).toString.call(object) === '[object Object]') {
			var _o = {};
			for (var prop in object) {
				_o[prop] = deepClone(object[prop]);
			}
			return _o;
		}
		if (({}).toString.call(object) === '[object Array]') {
			var _a = [];
			for (var i = 0; i < object.length; i++) {
				_a[i] = deepClone(object[i]);
			}
			return _a;
		}

		if (({}).toString.call(object) === '[object Date]') {
			return new Date(object);
		}
		if (({}).toString.call(object) === '[object RegExp]') {
			return new RegExp(object);
		}
	} else if (typeof object === 'function') {
        var _e = (object).toString();
        var _rP = /\((.*)\)/;
		var _rB = /{([^]*)}/;
		var _p = _rP.exec(_e)[1].split(',');
		var _b = [_rB.exec(_e)[1]];
		var _apply = _p.concat(_b);
		return Function.apply(null, _apply);
	} else {
		return object;
	}
}