[1, 2, 3, 4]
[2, 3, 4, 1]
[4,3,2,1]
[3,4,2,1]
[3,2,4,1]
[2,3,4,1]

function foo(arr) {
	for (var i = 0; i < arr.length - 1; i++) {
		for (var j = 0; j < arr.length - i - 1; j++) {
			if (arr[j] < arr[j + 1]) {
				var temp = arr[j+1];
				arr[j + 1] = arr[j];
				arr[j] = temp;
			}
		}
	}
}

function bark(arr) {
	var at = 1;
	while (at < arr.length) {
		var last = at - 1;
		var temp = arr[at];
		while (temp < arr[last] && last >= 0) {
			arr[last + 1] = arr[last];
			arr[last] = temp;
			last--;
		}
		at++;
	}
}

var arr = [4,5,6,1,2,3]

function quickSort(arr) {
	if (arr.length <= 1) {
		return arr
	}

	var base = arr[0]
	var left = []
	var right = []
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] <= base) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	}
	return [].concat(quickSort(left),[base],quickSort(right))
}



const flatten = arr => arr.reduce((acc, item) => {
		return acc.concat(Array.isArray(item) ? flatten(item) : item)
	}, [])
