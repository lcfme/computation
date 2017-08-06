function currying (fn) {
    var len = fn.length;
    function _f(_args) {
        return function (a) {
            var _a = [..._args]
            _a.push(a);
            if (_a.length === len) {
                return fn.apply(null, _a);
            } else {
                return _f.call(null, _a);
            }
        }
    }
    return _f.call(null, []);
}