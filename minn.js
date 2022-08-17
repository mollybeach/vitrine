var displayTree = tree => console.log(JSON.stringify(tree, null, 2));
function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
function BinarySearchTree() {
  this.root = null;
  // Only change code below this line
    this.findMinHeight = function(tree) {
    if (!this.root) return -1;

    function findNodeMinHeight(node) {
      if (!node) return 0;
      return 1 + Math.min(
          findNodeMinHeight(node.left),
          findNodeMinHeight(node.right)
        );
    }

    return findNodeMinHeight(this.root) - 1;
  }

  this.findMaxHeight = function() {
    if(!this.root) return -1;

    function findNodeMaxHeight(node){
      if(!node) return 0;
      return 1 + Math.max( 
        findNodeMaxHeight(node.left), 
        findNodeMaxHeight(node.right)
        );
    }
    return findNodeMaxHeight(this.root) -1; //why do we subtract 1 : 

  }

  this.isBalanced = function(){
    return this.findMaxHeight() === this.findMinHeight()
  }
  // Only change code above this line
}