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

function isLeaf(node) {
  return node.left === null && node.right === null;
}

function expandNode(node) {
  return [node.left, node.right].filter((child) => child !== null);
}

function checkSuperbalance(binaryTree) {
  if (!binaryTree) return true;
  let leafFound = false;
  let depthNodes = [binaryTree];
  while (!leafFound) {
    depthNodes = depthNodes.flatMap((node) => {
      const childNodes = expandNode(node);
      if (childNodes.length === 0) leafFound = true;
      return childNodes;
    });
  }
  return depthNodes.every(isLeaf);
}

module.exports = { checkSuperbalance, BinaryTreeNode };
