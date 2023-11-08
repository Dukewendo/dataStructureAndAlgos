// selection sort
// selection sort works by scanning the elements for the smallest
// for the smallest element and inserting it into the current
// position of the array

function selectionSort(items) {
	var len = items.length,
		min;

	for (var i = 0; i < len; i++) {
		// set minimum to this position
		min = i;
		//check the rest of the array to see if there
		// is a smaller entry

		for (j = i + 1; j < len; j++) {
			if (items[j] < items[min]) {
				min = j;
			}
		}
		//if the minimum isnt in position- swap it
		if (i != min) {
			swap(items, i, min);
		}
	}
	return items;
}

// time complexity O(n2)