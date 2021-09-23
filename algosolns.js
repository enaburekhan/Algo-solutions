// Do not edit the class below except for
// the insert, contains, and remove methods.
// Feel free to add new properties and methods
// to the class.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      // Average case: O(logn) time | O(logn) space.
      // Worst case: O(logn) time | O(logn) space.
          if (value < this.value){
              if (this.left === null){
                  this.left = new BST(value)
              }else {
                  this.left.insert(value)
              }
          }else {
              if (this.right === null){
                  this.right = new BST(value)
              }else{
                  this.right.insert(value)
              }
          }
      return this;
    }
  