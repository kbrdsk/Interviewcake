function findDuplicate(array) {
	let currentIndex;

	for (let pathStart = 0; pathStart < array.length; pathStart++) {
		if (array[pathStart] < 0) continue;
		currentIndex = pathStart;
		while (array[currentIndex] > 0) {
			array[currentIndex] *= -1;
			currentIndex = -array[currentIndex];
		}
		if (currentIndex !== pathStart) break;
	}

	for (let i in array) array[i] = array[i] < 0 ? -array[i] : array[i];
	return currentIndex;
}

module.exports = findDuplicate;
