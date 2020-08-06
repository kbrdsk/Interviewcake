const findDuplicate = require("./find-duplicate.js");

test("[4, 3, 1, 3, 5, 2]", () => {
	const duplicate = findDuplicate([4, 3, 1, 3, 5, 2]);
	expect(duplicate).toBe(3);
});

test("[1, 2, 3, 2, 4, 5]", () => {
	const duplicate = findDuplicate([1, 2, 3, 2, 4, 5]);
	expect(duplicate).toBe(2);
});

test("[1, 1, 3, 2]", () => {
	const duplicate = findDuplicate([1, 1, 3, 2]);
	expect(duplicate).toBe(1);
});
