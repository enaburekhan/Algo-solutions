/* Insert, search and delete a BST  */


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

    

// Validate a BST

// This is an input class. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function validateBst(tree) {
    // O(n) time | O(d) space complexity
      return validateBstHelper(tree, -Infinity, Infinity)
  }
  
  function validateBstHelper(tree, minValue, maxValue){
      if (tree === null) return true;
      if (tree.value < minValue || tree.value >= maxValue) return false
      
      const leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
      return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue);
  }
  
  // Do not edit the line below.
  exports.BST = BST;
  exports.validateBst = validateBst;
  

  /* BST traversal */

  function inOrderTraverse(tree, array) {
    // time O(n) | space O(n).
      if (tree !== null){
          inOrderTraverse(tree.left, array);
          array.push(tree.value);
          inOrderTraverse(tree.right, array);
      }
      return array;
  }
  
  function preOrderTraverse(tree, array) {
    // time O(n) | space O(n).
      if (tree !== null){
          array.push(tree.value);
          preOrderTraverse(tree.left, array);
          preOrderTraverse(tree.right, array);
      }
      return array;
  }
  
  function postOrderTraverse(tree, array) {
    // time O(n) | space O(n).
      if (tree !== null){
          postOrderTraverse(tree.left, array);
          postOrderTraverse(tree.right, array);
          array.push(tree.value);
      }
      return array;
  }
  
  // Do not edit the lines below.
  exports.inOrderTraverse = inOrderTraverse;
  exports.preOrderTraverse = preOrderTraverse;
  exports.postOrderTraverse = postOrderTraverse;


  /* finding minHeightBst */

  // solution 1: Non Optimize code

  function minHeightBst(array) {
    // time O(NlogN) | space O(N)
      return constructMinHeightBst(array, null, 0, array.length - 1)
  }
  
  function constructMinHeightBst(array, bst, startIdx, endIdx){
      if (endIdx < startIdx) return;
      const midIdx = Math.floor((startIdx + endIdx) / 2);
      
      const valueToAdd = array[midIdx]
      if (bst === null){
          bst = new BST(valueToAdd)
      }else {
          bst.insert(valueToAdd)
      }
      constructMinHeightBst(array, bst, startIdx, midIdx - 1);
      constructMinHeightBst(array, bst, midIdx + 1, endIdx);
      return bst
  }
  
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      if (value < this.value) {
        if (this.left === null) {
          this.left = new BST(value);
        } else {
          this.left.insert(value);
        }
      } else {
        if (this.right === null) {
          this.right = new BST(value);
        } else {
          this.right.insert(value);
        }
      }
    }
  }
  
  // Do not edit the line below.
  exports.minHeightBst = minHeightBst;

  
  // solution 2, using manual insertion
  function minHeightBst(array) {
    // time O(N) | space O(N);
      return constructMinHeightBst(array, null, 0, array.length - 1)
  }
  
  function constructMinHeightBst(array, bst, startIdx, endIdx){
      if (endIdx < startIdx) return
      
      const midIdx = Math.floor((startIdx + endIdx) / 2);
      const newBstNode = new BST(array[midIdx])
      
      if (bst === null){
          bst = newBstNode
      }else {
          if (array[midIdx] < bst.value){
              bst.left = newBstNode;
              bst = bst.left;
          }else{
              bst.right = newBstNode;
              bst = bst.right;
          }
      }
      
      constructMinHeightBst(array, bst, startIdx, midIdx - 1);
      constructMinHeightBst(array, bst, midIdx + 1, endIdx)
      
      return bst
  }
  
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      if (value < this.value) {
        if (this.left === null) {
          this.left = new BST(value);
        } else {
          this.left.insert(value);
        }
      } else {
        if (this.right === null) {
          this.right = new BST(value);
        } else {
          this.right.insert(value);
        }
      }
    }
  }
  
  // Do not edit the line below.
  exports.minHeightBst = minHeightBst;
  

  // solution 3: refactor solution, same optimization with solution 2
  function minHeightBst(array) {
    // time O(N) | space O(N)
      return constructMinHeightBst(array, 0, array.length - 1);
  
  }
  
  function constructMinHeightBst(array, startIdx, endIdx){
      if (endIdx < startIdx) return null
      
      const midIdx = Math.floor((startIdx + endIdx) / 2);
      const bst = new BST(array[midIdx]);
      
      bst.left = constructMinHeightBst(array, startIdx, midIdx - 1);
      bst.right = constructMinHeightBst(array, midIdx + 1, endIdx);
      return bst
  }
  
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
      if (value < this.value) {
        if (this.left === null) {
          this.left = new BST(value);
        } else {
          this.left.insert(value);
        }
      } else {
        if (this.right === null) {
          this.right = new BST(value);
        } else {
          this.right.insert(value);
        }
      }
    }
  }
  
  // Do not edit the line below.
  exports.minHeightBst = minHeightBst;



  /* Find Kth largest value in BST */
// Non optimal value using brute force approach

// This is an input class. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function findKthLargestValueInBst(tree, k) {
    // time O(n) | space O(n)
    const sortedNodeValues = [];
      inorderTraverse(tree, sortedNodeValues);
      return sortedNodeValues[sortedNodeValues.length - k];
  }
  
  function inorderTraverse(node, sortedNodeValues){
      if (node === null) return
      
      inorderTraverse(node.left, sortedNodeValues);
      sortedNodeValues.push(node.value);
      inorderTraverse(node.right, sortedNodeValues);
  }
  
  // Do not edit the lines below.
  exports.BST = BST;
  exports.findKthLargestValueInBst = findKthLargestValueInBst;

  
  
  // optimal approach by tracking the values

  // This is an input class. Do not edit.
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  class TreeInfo{
      constructor(numbersOfNodesVisited, latestNodeValueVisited){
          this.numbersOfNodesVisited = numbersOfNodesVisited;
          this.latestNodeValueVisited = latestNodeValueVisited;
      }
  }
  
  function findKthLargestValueInBst(tree, k) {
    // time O(h + k), where h is the depth of Bst branch | space )(h) 
    const treeInfo = new TreeInfo(0, -1);
      reverseInorderTraverse(tree, k, treeInfo);
      return treeInfo.latestNodeValueVisited;
  }
  
  function reverseInorderTraverse(node, k, treeInfo){
      if (node === null || treeInfo.numbersOfNodesVisited >= k) return
      
      reverseInorderTraverse(node.right, k, treeInfo);
      
      if(treeInfo.numbersOfNodesVisited < k){
          treeInfo.numbersOfNodesVisited++
          treeInfo.latestNodeValueVisited = node.value;
          reverseInorderTraverse(node.left, k, treeInfo)
      }
  }
  
  // Do not edit the lines below.
  exports.BST = BST;
  exports.findKthLargestValueInBst = findKthLargestValueInBst;
  