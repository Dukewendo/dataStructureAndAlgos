let list = [1, 4, 6, 13, 26, 33];
let min = 0;
let high = list.length - 1;

function bubbleTest(list, item) {
	while (low < high) {
		let mid = low + high / 2;
		let guess = list[mid];

		if (guess == item) {
			return mid;
		}

		if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
		return null;
	}
}
