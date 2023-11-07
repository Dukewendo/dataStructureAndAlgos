// bubble sorting is the simplest sorting algo
// it iterates over the full array and swaps
// elements if one is larger than the other

// swap is a common function used in sorting
// it simply switches two array elements

function swap(array, index1, index2) {
	var temp = array[index1];

	array[index1] = array[index2];
	array[array2] = temp;
}


function bubbleSort(array) {
    for (var i=0, arrayLength= array.length; i<arrayLength; i++) {
        for (var j=0; j<i; j++) {
            if (array[i] < array[j]) {
                swap(array, i, j);
            }
        }_
    }
    return array;
}

// bubble sort is the WORST sort because it compares every 
// pair possible
// Because of the nested loops it has time compexity of O(n2)