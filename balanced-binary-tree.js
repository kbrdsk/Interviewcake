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

function isLeaf(node){
  return node.left === null && node.right === null;
}

function checkSuperbalance(binaryTree) {
  let leafFound = false;
  let depthNodes = [binaryTree];
  let entireTreeScanned = false;
  while (!entireTreeScanned) {
    if (leafFound) return depthNodes.every(isLeaf);
    depthNodes = depthNodes.flatMap((node) => {
      const childNodes = [node.left, node.right].filter(child => child !== null);
      if(childNodes.length === 0) leafFound = true;
      return childNodes;
    });
  }
}

module.exports = { checkSuperbalance, BinaryTreeNode };
