// Linear sort works by going through each element of the array one index after the other
//Linear search is flexible because they can be used with sorted or unsorted data

function linearSearch(array, n) {
	for (var i = 0; i < array.length; i++) {
		if (array[i] == n) {
			return true;
		}
	}
	return false;
}

// time complexity is O(n)
// worst case scenario the entire array needs to be iterated.