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
    contains(value) {
        // Average case: O(logn) time | O(logn) space.
        // Worst case: O(logn) time | O(logn) space.
            if (value < this.value){
                if (this.left === null){
                    return false
                }else{
                    return this.left.contains(value)
                }
            }else if (value > this.value){
                if (this.right === null){
                    return false;
                }else{
                    return this.right.contains(value)
                }
            }else {
                return true
            }
      }

      remove(value, parent = null) {
        // Average case: O(logn) time | O(logn) space.
        // Worst case: O(logn) time | O(logn) space.d.
            if (value < this.value){
                if (this.left !== null){
                    this.left.remove(value, this)
                }
            }else if (value > this.value){
                if (this.right !== null){
                    this.right.remove(value, this)
                }
            }else {
                if (this.left !== null && this.right !== null){
                    this.value = this.right.getMinValue();
                    this.right.remove(this.value, this)
                }else if (parent === null){
                    if (this.left !== null){
                        this.value = this.left.value;
                        this.right = this.left.right;
                        this.left = this.left.left;
                    }else if (this.right !== null){
                        this.value = this.right.value;
                        this.left = this.right.left;
                        this.right = this.right.right;
                    }
                }else if (parent.left === this){
                    parent.left = this.left !== null ? this.left : this.right;
                }else if (parent.right === this){
                    parent.right = this.left !== null ? this.left : this.right;
                }
            }
        return this;
      }
            
        getMinValue(){
            if (this.left === null){
                return this.value;
            }else {
                return this.left.getMinValue();
            }
        }	
    }
    