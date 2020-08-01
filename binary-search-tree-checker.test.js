const {
	BinaryTreeNode,
	searchChecker,
} = require("./binary-search-tree-checker.js");

test("tree with one node", () => {
	const tree = new BinaryTreeNode(1);
	expect(searchChecker(tree)).toBe(true);
});

test("2 node tree that's not a search tree", () => {
	const tree = new BinaryTreeNode(2);
	tree.insertLeft(3);
	expect(searchChecker(tree)).toBe(false);
});

test("check root against ancestors", () => {
	const tree = new BinaryTreeNode(50);
	let left = tree.insertLeft(30);
	left.insertLeft(20);
	left.insertRight(60);
	let right = tree.insertRight(80);
	right.insertLeft(70);
	right.insertRight(90);

	expect(searchChecker(tree)).toBe(false);
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

	expect(searchChecker(tree)).toBe(true);
});
