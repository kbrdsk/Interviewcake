const {
	checkSuperbalance,
	BinaryTreeNode,
} = require("./balanced-binary-tree.js");

test("tree with single leaf node", () => {
	const tree = new BinaryTreeNode('0');
	expect(checkSuperbalance(tree)).toBe(true);
});

test("simple tree that's not superbalanced", () => {
	const tree = new BinaryTreeNode('0');
	tree.insertLeft('1').insertLeft('2').insertLeft('3');
	tree.insertRight('1');
	expect(checkSuperbalance(tree)).toBe(false);
});

test("superbalanced tree with depth 3", () => {
	const tree = new BinaryTreeNode('0');
	tree.insertLeft('1').insertLeft('2').insertLeft('3');
	tree.insertRight('1').insertLeft('2');
	expect(checkSuperbalance(tree)).toBe(true);

});

test("first gotcha", () => {
	let tree = new BinaryTreeNode('0');
	let leftBranch = tree;
	for(let i = 1; i <= 9; i++){
		leftBranch = leftBranch.insertLeft(i); 
	}
	leftBranch.insertLeft(10);
	leftBranch = leftBranch.insertRight(10);
	leftBranch.insertLeft(11);


	let rightBranch = tree;
	for(let i = 1; i <= 10; i++){
		rightBranch = rightBranch.insertRight(i); 
	}
	rightBranch.insertLeft(11);
	rightBranch = rightBranch.insertRight(11);
	rightBranch.insertLeft(12);

	expect(checkSuperbalance(tree)).toBe(false);
})