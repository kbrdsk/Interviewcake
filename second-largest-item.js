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

function findSecondLargestItem(tree){
  let largest = tree;
  while(largest.right){
    secondLargest = largest;
    largest = largest.right;
  }
  if(largest.left){
    secondLargest = largest.left;
    while(secondLargest.right){
      secondLargest = largest.right;
    }
  }
  return secondLargest.value;
}

module.exports = { BinaryTreeNode, findSecondLargestItem };
