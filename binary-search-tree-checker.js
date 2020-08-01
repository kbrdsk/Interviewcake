class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

function inBounds(node, lowerBound, upperBound) {
  return node.value > lowerBound && node.value < upperBound;
}

function searchChecker(tree) {
  let nodesToCheck = [
    { node: tree, upperBound: Infinity, lowerBound: -Infinity },
  ];

  while (nodesToCheck.length > 0) {
    let { node, lowerBound, upperBound } = nodesToCheck.pop();
    if (!node) continue;
    if (!inBounds(node, lowerBound, upperBound)) return false;

    nodesToCheck.push({
      node: node.left,
      lowerBound,
      upperBound: node.value,
    });

    nodesToCheck.push({
      node: node.right,
      lowerBound: node.value,
      upperBound,
    });
  }

  return true;
}

//const searchChecker = crawler;

function crawler(node, lowerBound = -Infinity, upperBound = Infinity) {
  if (!node) return true;
  if (node.left && !inBounds(node.left, lowerBound, node.value)) return false;
  if (node.right && !inBounds(node.right, node.value, upperBound)) return false;
  return (
    crawler(node.left, lowerBound, node.value) &&
    crawler(node.right, node.value, upperBound)
  );
}

module.exports = { crawler, BinaryTreeNode, searchChecker };
