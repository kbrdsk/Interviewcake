const {
	BinaryTreeNode,
	findSecondLargestItem,
} = require("./second-largest-item.js");

test("tree with one node", () => {
	const tree = new BinaryTreeNode(1);
	expect(() => findSecondLargestItem(tree)).toThrow();
});

test("2 node tree", () => {
	const tree = new BinaryTreeNode(3);
	tree.insertLeft(2);
	expect(findSecondLargestItem(tree)).toBe(2);
});

test("tree from search tree checker", () => {
	const tree = new BinaryTreeNode(50);
	let left = tree.insertLeft(30);
	left.insertLeft(20);
	left.insertRight(40);
	let right = tree.insertRight(80);
	right.insertLeft(70);
	right.insertRight(90);

	expect(findSecondLargestItem(tree)).toBe(80);
});

test("sample search tree from stackoverflow", () => {
	const tree = {
		value: 2,
		left: {
			value: 1,
			left: null,
			right: null,
		},
		right: {
			value: 10,
			left: {
				value: 5,
				left: null,
				right: null,
			},
			right: null,
		},
	};

	expect(findSecondLargestItem(tree)).toBe(5);
});