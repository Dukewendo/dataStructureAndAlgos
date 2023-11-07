// Binary search works on SORTED data
// binary searches can check the middle value to see
// if the desired value is greater or smaller than it
// it uses a divide and conquer method

function binarySearch(array, n) {
    var lowIndex = 0, highIndex = array1.lengh-1;

    while(lowIndex<=highIndex) {
        var midIndex = Math.floor((highIndex+lowIndex) /2)

        if(array[midIndex] ==n) {
            return midIndex;
        } else if (n>array[midIndex]) {
            lowIndex = midIndex;
        } else {
            highIndex = midIndex;
        }
    }
    return -1;
}

// binary search can be fast but can only be done if array is sorted
// if the search element is bigger than the middle- the lower is set
// to the middle +1
// if less than the middle element then the lower is set to the 
// middle -1
// the search algo is constantly dividing the array in half