// // /* Insert, search and delete a BST  */


// // // Do not edit the class below except for
// // // the insert, contains, and remove methods.
// // // Feel free to add new properties and methods
// // // to the class.
// // class BST {
// //     constructor(value) {
// //       this.value = value;
// //       this.left = null;
// //       this.right = null;
// //     }
  
// //     insert(value) {
// //       // Average case: O(logn) time | O(logn) space.
// //       // Worst case: O(logn) time | O(logn) space.
// //           if (value < this.value){
// //               if (this.left === null){
// //                   this.left = new BST(value)
// //               }else {
// //                   this.left.insert(value)
// //               }
// //           }else {
// //               if (this.right === null){
// //                   this.right = new BST(value)
// //               }else{
// //                   this.right.insert(value)
// //               }
// //           }
// //       return this;
// //     }
// //     contains(value) {
// //         // Average case: O(logn) time | O(logn) space.
// //         // Worst case: O(logn) time | O(logn) space.
// //             if (value < this.value){
// //                 if (this.left === null){
// //                     return false
// //                 }else{
// //                     return this.left.contains(value)
// //                 }
// //             }else if (value > this.value){
// //                 if (this.right === null){
// //                     return false;
// //                 }else{
// //                     return this.right.contains(value)
// //                 }
// //             }else {
// //                 return true
// //             }
// //       }

// //       remove(value, parent = null) {
// //         // Average case: O(logn) time | O(logn) space.
// //         // Worst case: O(logn) time | O(logn) space.d.
// //             if (value < this.value){
// //                 if (this.left !== null){
// //                     this.left.remove(value, this)
// //                 }
// //             }else if (value > this.value){
// //                 if (this.right !== null){
// //                     this.right.remove(value, this)
// //                 }
// //             }else {
// //                 if (this.left !== null && this.right !== null){
// //                     this.value = this.right.getMinValue();
// //                     this.right.remove(this.value, this)
// //                 }else if (parent === null){
// //                     if (this.left !== null){
// //                         this.value = this.left.value;
// //                         this.right = this.left.right;
// //                         this.left = this.left.left;
// //                     }else if (this.right !== null){
// //                         this.value = this.right.value;
// //                         this.left = this.right.left;
// //                         this.right = this.right.right;
// //                     }
// //                 }else if (parent.left === this){
// //                     parent.left = this.left !== null ? this.left : this.right;
// //                 }else if (parent.right === this){
// //                     parent.right = this.left !== null ? this.left : this.right;
// //                 }
// //             }
// //         return this;
// //       }
            
// //         getMinValue(){
// //             if (this.left === null){
// //                 return this.value;
// //             }else {
// //                 return this.left.getMinValue();
// //             }
// //         }	
// //     }

    

// // // Validate a BST

// // // This is an input class. Do not edit.
// // class BST {
// //     constructor(value) {
// //       this.value = value;
// //       this.left = null;
// //       this.right = null;
// //     }
// //   }
  
// //   function validateBst(tree) {
// //     // O(n) time | O(d) space complexity
// //       return validateBstHelper(tree, -Infinity, Infinity)
// //   }
  
// //   function validateBstHelper(tree, minValue, maxValue){
// //       if (tree === null) return true;
// //       if (tree.value < minValue || tree.value >= maxValue) return false
      
// //       const leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
// //       return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue);
// //   }
  
// //   // Do not edit the line below.
// //   exports.BST = BST;
// //   exports.validateBst = validateBst;
  

// //   /* BST traversal */

// //   function inOrderTraverse(tree, array) {
// //     // time O(n) | space O(n).
// //       if (tree !== null){
// //           inOrderTraverse(tree.left, array);
// //           array.push(tree.value);
// //           inOrderTraverse(tree.right, array);
// //       }
// //       return array;
// //   }
  
// //   function preOrderTraverse(tree, array) {
// //     // time O(n) | space O(n).
// //       if (tree !== null){
// //           array.push(tree.value);
// //           preOrderTraverse(tree.left, array);
// //           preOrderTraverse(tree.right, array);
// //       }
// //       return array;
// //   }
  
// //   function postOrderTraverse(tree, array) {
// //     // time O(n) | space O(n).
// //       if (tree !== null){
// //           postOrderTraverse(tree.left, array);
// //           postOrderTraverse(tree.right, array);
// //           array.push(tree.value);
// //       }
// //       return array;
// //   }
  
// //   // Do not edit the lines below.
// //   exports.inOrderTraverse = inOrderTraverse;
// //   exports.preOrderTraverse = preOrderTraverse;
// //   exports.postOrderTraverse = postOrderTraverse;


// //   /* finding minHeightBst */

// //   // solution 1: Non Optimize code

// //   function minHeightBst(array) {
// //     // time O(NlogN) | space O(N)
// //       return constructMinHeightBst(array, null, 0, array.length - 1)
// //   }
  
// //   function constructMinHeightBst(array, bst, startIdx, endIdx){
// //       if (endIdx < startIdx) return;
// //       const midIdx = Math.floor((startIdx + endIdx) / 2);
      
// //       const valueToAdd = array[midIdx]
// //       if (bst === null){
// //           bst = new BST(valueToAdd)
// //       }else {
// //           bst.insert(valueToAdd)
// //       }
// //       constructMinHeightBst(array, bst, startIdx, midIdx - 1);
// //       constructMinHeightBst(array, bst, midIdx + 1, endIdx);
// //       return bst
// //   }
  
// //   class BST {
// //     constructor(value) {
// //       this.value = value;
// //       this.left = null;
// //       this.right = null;
// //     }
  
// //     insert(value) {
// //       if (value < this.value) {
// //         if (this.left === null) {
// //           this.left = new BST(value);
// //         } else {
// //           this.left.insert(value);
// //         }
// //       } else {
// //         if (this.right === null) {
// //           this.right = new BST(value);
// //         } else {
// //           this.right.insert(value);
// //         }
// //       }
// //     }
// //   }
  
// //   // Do not edit the line below.
// //   exports.minHeightBst = minHeightBst;

  
// //   // solution 2, using manual insertion
// //   function minHeightBst(array) {
// //     // time O(N) | space O(N);
// //       return constructMinHeightBst(array, null, 0, array.length - 1)
// //   }
  
// //   function constructMinHeightBst(array, bst, startIdx, endIdx){
// //       if (endIdx < startIdx) return
      
// //       const midIdx = Math.floor((startIdx + endIdx) / 2);
// //       const newBstNode = new BST(array[midIdx])
      
// //       if (bst === null){
// //           bst = newBstNode
// //       }else {
// //           if (array[midIdx] < bst.value){
// //               bst.left = newBstNode;
// //               bst = bst.left;
// //           }else{
// //               bst.right = newBstNode;
// //               bst = bst.right;
// //           }
// //       }
      
// //       constructMinHeightBst(array, bst, startIdx, midIdx - 1);
// //       constructMinHeightBst(array, bst, midIdx + 1, endIdx)
      
// //       return bst
// //   }
  
// //   class BST {
// //     constructor(value) {
// //       this.value = value;
// //       this.left = null;
// //       this.right = null;
// //     }
  
// //     insert(value) {
// //       if (value < this.value) {
// //         if (this.left === null) {
// //           this.left = new BST(value);
// //         } else {
// //           this.left.insert(value);
// //         }
// //       } else {
// //         if (this.right === null) {
// //           this.right = new BST(value);
// //         } else {
// //           this.right.insert(value);
// //         }
// //       }
// //     }
// //   }
  
// //   // Do not edit the line below.
// //   exports.minHeightBst = minHeightBst;
  

// //   // solution 3: refactor solution, same optimization with solution 2
// //   function minHeightBst(array) {
// //     // time O(N) | space O(N)
// //       return constructMinHeightBst(array, 0, array.length - 1);
  
// //   }
  
// //   function constructMinHeightBst(array, startIdx, endIdx){
// //       if (endIdx < startIdx) return null
      
// //       const midIdx = Math.floor((startIdx + endIdx) / 2);
// //       const bst = new BST(array[midIdx]);
      
// //       bst.left = constructMinHeightBst(array, startIdx, midIdx - 1);
// //       bst.right = constructMinHeightBst(array, midIdx + 1, endIdx);
// //       return bst
// //   }
  
// //   class BST {
// //     constructor(value) {
// //       this.value = value;
// //       this.left = null;
// //       this.right = null;
// //     }
  
// //     insert(value) {
// //       if (value < this.value) {
// //         if (this.left === null) {
// //           this.left = new BST(value);
// //         } else {
// //           this.left.insert(value);
// //         }
// //       } else {
// //         if (this.right === null) {
// //           this.right = new BST(value);
// //         } else {
// //           this.right.insert(value);
// //         }
// //       }
// //     }
// //   }
  
// //   // Do not edit the line below.
// //   exports.minHeightBst = minHeightBst;



// //   /* Find Kth largest value in BST */
// // // Non optimal value using brute force approach

// // // This is an input class. Do not edit.
// // class BST {
// //     constructor(value) {
// //       this.value = value;
// //       this.left = null;
// //       this.right = null;
// //     }
// //   }
  
// //   function findKthLargestValueInBst(tree, k) {
// //     // time O(n) | space O(n)
// //     const sortedNodeValues = [];
// //       inorderTraverse(tree, sortedNodeValues);
// //       return sortedNodeValues[sortedNodeValues.length - k];
// //   }
  
// //   function inorderTraverse(node, sortedNodeValues){
// //       if (node === null) return
      
// //       inorderTraverse(node.left, sortedNodeValues);
// //       sortedNodeValues.push(node.value);
// //       inorderTraverse(node.right, sortedNodeValues);
// //   }
  
// //   // Do not edit the lines below.
// //   exports.BST = BST;
// //   exports.findKthLargestValueInBst = findKthLargestValueInBst;

  
  
// //   // optimal approach by tracking the values

// //   // This is an input class. Do not edit.
// // class BST {
// //     constructor(value) {
// //       this.value = value;
// //       this.left = null;
// //       this.right = null;
// //     }
// //   }
  
// //   class TreeInfo{
// //       constructor(numbersOfNodesVisited, latestNodeValueVisited){
// //           this.numbersOfNodesVisited = numbersOfNodesVisited;
// //           this.latestNodeValueVisited = latestNodeValueVisited;
// //       }
// //   }
  
// //   function findKthLargestValueInBst(tree, k) {
// //     // time O(h + k), where h is the depth of Bst branch | space )(h) 
// //     const treeInfo = new TreeInfo(0, -1);
// //       reverseInorderTraverse(tree, k, treeInfo);
// //       return treeInfo.latestNodeValueVisited;
// //   }
  
// //   function reverseInorderTraverse(node, k, treeInfo){
// //       if (node === null || treeInfo.numbersOfNodesVisited >= k) return
      
// //       reverseInorderTraverse(node.right, k, treeInfo);
      
// //       if(treeInfo.numbersOfNodesVisited < k){
// //           treeInfo.numbersOfNodesVisited++
// //           treeInfo.latestNodeValueVisited = node.value;
// //           reverseInorderTraverse(node.left, k, treeInfo)
// //       }
// //   }
  
// //   // Do not edit the lines below.
// //   exports.BST = BST;
// //   exports.findKthLargestValueInBst = findKthLargestValueInBst;
  

  

// //   /* Reconstruct BST */

// //   // This is an input class. Do not edit.
// // class BST {
// //     constructor(value, left = null, right = null) {
// //       this.value = value;
// //       this.left = left;
// //       this.right = right;
// //     }
// //   }
  
// //   function reconstructBst(preOrderTraversalValues) {
// //     // time O(n^2) | space O(h)
// //     if (preOrderTraversalValues.length === 0) return null;
      
// //       const currentValue = preOrderTraversalValues[0]
// //       let rightNodeRootIdx = preOrderTraversalValues.length;
      
// //       for(let idx = 1; idx < preOrderTraversalValues.length; idx++){
// //           const value = preOrderTraversalValues[idx]
// //           if (value >= currentValue){
// //               rightNodeRootIdx = idx;
// //               break;
// //           }
// //       }
      
// //       const leftSubtree = reconstructBst(preOrderTraversalValues.slice(1, rightNodeRootIdx));
// //       const rightSubtree = reconstructBst(preOrderTraversalValues.slice(rightNodeRootIdx));
// //       return new BST(currentValue, leftSubtree, rightSubtree);
// //   }
  
// //   // Do not edit the lines below.
// //   exports.BST = BST;
// //   exports.reconstructBst = reconstructBst;




// //   /* Find a successor */

// //   // This is an input class. Do not edit.
// // class BinaryTree {
// //   constructor(value) {
// //     this.value = value;
// //     this.left = null;
// //     this.right = null;
// //     this.parent = null;
// //   }
// // }

// // function findSuccessor(tree, node) {
// //   // O(n) time | O(n) space.
// //   const inOrderTraversalOrder = getInOrderTraversalOrder(tree);
	
// // 	for(let idx=0; idx < inOrderTraversalOrder.length; idx++){
// // 		const currentNode = inOrderTraversalOrder[idx];
// // 		if(currentNode !== node) continue
		
// // 		if(idx === inOrderTraversalOrder.length - 1) return null
		
// // 		return inOrderTraversalOrder[idx + 1];
// // 	}
// // }

// // function getInOrderTraversalOrder(node, order=[]){
// // 	if(node === null) return order
	
// // 	getInOrderTraversalOrder(node.left, order);
// // 	order.push(node);
// // 	getInOrderTraversalOrder(node.right, order);
	
// // 	return order
// // }

// // // Do not edit the lines below.
// // exports.BinaryTree = BinaryTree;
// // exports.findSuccessor = findSuccessor;

  


// // /* Height balanced binary tree */

// // // This is an input class. Do not edit.
// // class BinaryTree {
// //   constructor(value) {
// //     this.value = value;
// //     this.left = null;
// //     this.right = null;
// //   }
// // }

// // function heightBalancedBinaryTree(tree) {
// //   // O(n) time | O(h) space
// //   if(tree === null) return true
	
// // 	if(Math.abs(maxDepth(tree.left) - maxDepth(tree.right)) > 1) return false
	
// // 	return heightBalancedBinaryTree(tree.left) && heightBalancedBinaryTree(tree.right)
// // }

// // function maxDepth(tree){
// // 	if(tree === null) return 0
	
// // 	const left = maxDepth(tree.left);
// // 	const right = maxDepth(tree.right);
// // 	return Math.max(left, right) + 1;
// // }

// // // Do not edit the lines below.
// // exports.BinaryTree = BinaryTree;
// // exports.heightBalancedBinaryTree = heightBalancedBinaryTree;


// // /* Max subset sum No adjacent */

// // function maxSubsetSumNoAdjacent(array) {
// //   // O(n) time | O(n) space.
	
// // 	if(!array.length) return 0
// // 	if(array.length === 1) return array[0];
	
// // 	const maxSums = array.slice();
// // 	maxSums[1] = Math.max(maxSums[0], maxSums[1]);
	
// // 	for(let i = 2; i < array.length; i++){
// // 		maxSums[i] = Math.max(maxSums[i-1], maxSums[i-2] + array[i]);
// // 	}
// // 	return maxSums[maxSums.length - 1];
	
// // }

// // // Do not edit the line below.
// // exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;



// // function maxSubsetSumNoAdjacent(array) {
// //   // O(n) time | O(1) space.
	
// // 	if(!array.length) return 0;
// // 	if(array.length === 1) return array[0];
	
// // 	let second = array[0];
// // 	let first = Math.max(array[0], array[1]);
	
// // 	for(let i=2; i < array.length; i++){
// // 		const current = Math.max(first, second + array[i])
// // 		second = first
// // 		first = current
// // 	}
// // 	return first
// // }

// // // Do not edit the line below.
// // exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;




// // /* Numbers of ways to make change */

// // function numberOfWaysToMakeChange(n, denoms) {
// //   // O(nd) time | O(n) space
// // 	const ways = new Array(n+1).fill(0);
// // 	ways[0] = 1;
// // 	for(const denom of denoms){
// // 		for(let amount=0; amount < n+1; amount++){
// // 			if(denom <= amount){
// // 				ways[amount] += ways[amount - denom]
// // 			}
// // 		}
// // 	}
// // 	return ways[n];
// // }

// // // Do not edit the line below.
// // exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;




// // /* Min Number of coins for change */

// // function minNumberOfCoinsForChange(n, denoms) {
// //   // O(nd) time | O(n) space
// // 	const minNumCoins = new Array(n+1).fill(Infinity);
// // 	minNumCoins[0] = 0;
// // 	for(const denom of denoms){
// // 		for(let amount = 0; amount < n+1; amount++){
// // 			if(denom <= amount){
// // 				minNumCoins[amount] = Math.min(minNumCoins[amount], minNumCoins[amount - denom] + 1);
// // 			}
// // 		}
// // 	}
// // 	return minNumCoins[n] !== Infinity ? minNumCoins[n] : -1
// // }

// // // Do not edit the line below.
// // exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange;




// // /* Levenshtein Distance */

// // function levenshteinDistance(str1, str2) {
// //   // O(nm) time | O(nm) space.
// // 	const edits = [];
// // 	for(let i=0; i < str2.length + 1; i++){
// // 		const row = [];
// // 		for(let j=0; j < str1.length + 1; j++){
// // 			row.push(j);
// // 		}
// // 		row[0] = i;
// // 		edits.push(row)
// // 	}
	
// // 	for(let i=1; i < str2.length + 1; i++){
// // 		for(let j=1; j < str1.length + 1; j++){
// // 			if(str2[i-1] === str1[j-1]){
// // 				edits[i][j] = edits[i-1][j-1];
// // 			}else{
// // 				edits[i][j] = 1 + Math.min(edits[i-1][j-1], edits[i][j-1], edits[i-1][j]);
// // 			}
// // 		}
// // 	}
// // 	return edits[str2.length][str1.length]
// // }

// // // Do not edit the line below.
// // exports.levenshteinDistance = levenshteinDistance;




// // /* Solved numbers of ways to traverse a graph */

// // function numberOfWaysToTraverseGraph(width, height) {
// //   // O(2^(n+m)) time | O(n+m) space.
// //   if(width === 1 || height === 1) return 1
	
// // 	return numberOfWaysToTraverseGraph(width - 1, height) + numberOfWaysToTraverseGraph(width, height - 1);
// // }

// // // Do not edit the line below.
// // exports.numberOfWaysToTraverseGraph = numberOfWaysToTraverseGraph;



// // function numberOfWaysToTraverseGraph(width, height) {
// //   // O(n*m) time | O(n*m)
// //   const numberOfWays = [];
// // 	for(let i=0; i < height + 1; i++){
// // 		numberOfWays.push([]);
// // 		for(let j=0; j < width + 1; j++){
// // 			numberOfWays[i].push(0);
// // 		}
// // 	}
	
// // 	for(let widthIdx = 1; widthIdx < width + 1; widthIdx++){
// // 		for(let heightIdx = 1; heightIdx < height + 1; heightIdx++){
// // 			if(widthIdx === 1 || heightIdx === 1){
// // 				numberOfWays[heightIdx][widthIdx] = 1
// // 			}else{
// // 				const leftWays = numberOfWays[heightIdx][widthIdx - 1];
// // 				const topWays = numberOfWays[heightIdx - 1][widthIdx];
// // 				numberOfWays[heightIdx][widthIdx] = leftWays + topWays
// // 			}
// // 		}
// // 	}
// // 	  return numberOfWays[height][width]; 
// // }

// // // Do not edit the line below.
// // exports.numberOfWaysToTraverseGraph = numberOfWaysToTraverseGraph;


// // function numberOfWaysToTraverseGraph(width, height) {
// //   // O(n+m) time | O(1) where n is the width of the graph and m is the height.
// //   const xdistanceFromCorner = width - 1;
// // 	const ydistanceFromCorner = height - 1;
	
// // 	const numerator = factorial(xdistanceFromCorner + ydistanceFromCorner);
// // 	const denominator = factorial(xdistanceFromCorner) * factorial(ydistanceFromCorner);
	
// // 	return Math.floor(numerator / denominator)
// // }

// // function factorial(num){
// // 	let result = 1
// // 	for(let n=2; n < num+1; n++){
// // 		result *= n
// // 	}
// // 	return result;
// // }

// // // Do not edit the line below.
// // exports.numberOfWaysToTraverseGraph = numberOfWaysToTraverseGraph;


// // /* Kadane's Algorithm */

// // function kadanesAlgorithm(array) {
// //   // O(n) time | O(1) space
// // 	let maxEndingHere = array[0];
// // 	let maxSoFar = array[0];
	
// // 	for(let i=1; i < array.length; i++){
// // 		const num = array[i];
// // 		maxEndingHere = Math.max(num, num + maxEndingHere);
// // 		maxSoFar = Math.max(maxSoFar, maxEndingHere);
// // 	}
// // 	return maxSoFar;
// // }

// // // Do not edit the line below.
// // exports.kadanesAlgorithm = kadanesAlgorithm;




// // /* Single Cycle Check */

// // function hasSingleCycle(array) {
// //   // O(n) time | O(1) where n is the length of the array.
// // 	let numElementsVisited = 0;
// // 	let currentIdx = 0;
// // 	while(numElementsVisited < array.length){
// // 		if(numElementsVisited > 0 && currentIdx === 0) return false;
// // 		numElementsVisited++;
// // 		currentIdx = getNextIdx(currentIdx, array)
// // 	}
// // 	 return currentIdx === 0
// // }

// // function getNextIdx(currentIdx, array){
// // 	const jump = array[currentIdx];
// // 	const nextIdx = (currentIdx + jump) % array.length;
// // 	return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
// // }

// // // Do not edit the line below.
// // exports.hasSingleCycle = hasSingleCycle;



// /* Two Number sum */

// // function twoNumberSum(array, targetSum) {
// //   // O(n^2) time | O(1) space.
// // 	for(let i=0; i < array.length - 1; i++){
// // 		for(let j=i+1; j < array.length; j++){
// // 			if(array[i] + array[j] === targetSum){
// // 				return [array[i], array[j]]
			
// // 			}
// // 		}
// // 	}
// // 	 return [];
// // }

// // // Do not edit the line below.
// // exports.twoNumberSum = twoNumberSum;

// // function twoNumberSum(array, targetSum) {
// //   // O(n) time | O(n) space.
// // 	const nums = {};
// // 	for(const num of array){
// // 		const potentialMatch = targetSum - num
// // 		if(potentialMatch in nums){
// // 			return [potentialMatch, num];
// // 		}else{
// // 			nums[num] = true;
// // 		}
// // 	}
// // 	 return [];
// // }

// // // Do not edit the line below.
// // exports.twoNumberSum = twoNumberSum;



// // function twoNumberSum(array, targetSum) {
// //   // O(nlogn) time | O(1) space.
// // 	array.sort((a, b) => a - b);
// // 	let left = 0;
// // 	let right = array.length - 1;
// // 	while(left < right){
// // 		const currentSum = array[left] + array[right];
// // 		if(currentSum === targetSum) return [array[left], array[right]];
// // 		else if(currentSum < targetSum) left++;
// // 	  else if(currentSum > targetSum) right--;
// // 	}
// // 	return [];
// // }

// // // Do not edit the line below.
// // exports.twoNumberSum = twoNumberSum;



// // const getSorted = (arr) => {
// //   let i = 0;
// //   while(i < arr.length){
// //     let j = i+1;
// //     while(j < arr.length){
// //       if(arr[j] < arr[i]){
// //         swap(i,j, arr)
// //       }
// //       j++
// //     }
// //     i++;

// //   }
// // }



// // function swap(i,j, arr){
// //   [arr[i], arr[j]] = [arr[j], arr[i]]
// // }

// // const cards = ['Jack', 1, 8, 4, 2,'King','Sheep'];
// // console.log(getSorted(cards));

// // // exports.getSorted = getSorted;





// /* Sorted square array */

// function sortedSquaredArray(array) {
//     // O(nlogn) time | O(n) space.
//     const sorted = new Array(array.length).fill(0);
      
//       for(let idx=0; idx < array.length; idx++){
//           const value = array[idx];
//           sorted[idx] = value * value;
//       }
//       sorted.sort((a, b) => a - b);
//       return sorted;
//   }
  
//   // Do not edit the line below.
//   exports.sortedSquaredArray = sortedSquaredArray;


//   function sortedSquaredArray(array) {
//     // O(n) time | O(n) space.
//     const sorted = new Array(array.length).fill(0);
//       let startIdx = 0;
//       let endIdx = array.length - 1;
//       for(let idx = array.length - 1; idx >= 0; idx--){
//           const smallestValue = array[startIdx];
//           const largestValue = array[endIdx];
//           if(Math.abs(smallestValue) > Math.abs(largestValue)){
//               sorted[idx] = smallestValue * smallestValue;
//               startIdx++;
//           }else{
//               sorted[idx] = largestValue * largestValue;
//               endIdx--
//           }
//       }
//        return sorted;
//   }
  
//   // Do not edit the line below.
//   exports.sortedSquaredArray = sortedSquaredArray;
 
  



//   /* Tournament winner */

//   function tournamentWinner(competitions, results) {
//     // O(n) time | O(k) space.
//     let currentBestTeam = '';
//       const scores = { [currentBestTeam]: 0 };
//       const homeTeamWon = 1;
      
//       for(let i=0; i < competitions.length; i++){
//           const result = results[i]
//           const [homeTeam, awayTeam] = competitions[i];
//           const winningTeam = result === homeTeamWon ? homeTeam : awayTeam
//           updateScores(winningTeam, 2, scores);
//           if(scores[winningTeam] > scores[currentBestTeam]){
//               currentBestTeam = winningTeam;
//           }
//       }
//        return currentBestTeam;
//   };
  
//   function updateScores(team, points, scores){
//       if(!(team in scores)) scores[team] = 0;
//       scores[team] += points
//   }
  
//   // Do not edit the line below.
//   exports.tournamentWinner = tournamentWinner;



//   /* Solved Permutations */

//   function getPermutations(array) {
//     // O(n^2 * n!) | O(n*n!).
//       const permutations = [];
//       permutationsHelper(array, [], permutations)
//       return permutations;
//   }
  
//   function permutationsHelper(array, currentPermutation, permutations){
//       if(!array.length && currentPermutation.length){
//           permutations.push(currentPermutation);
//       }else{
//           for(let i = 0; i < array.length; i++){
//               const newArr = array.slice(0, i).concat(array.slice(i+1));
//               const newPermutation = currentPermutation.concat([array[i]]);
//               permutationsHelper(newArr, newPermutation, permutations);
//           }
//       }
//   }


//   function getPermutations(array) {
//     // O(n * n!) | O(n * n!).
//       const permutations = [];
//       helperPermutations(0, array, permutations);
//       return permutations
//   }
  
//   function helperPermutations(i, array, permutations){
//       if(i === array.length - 1){
//           permutations.push(array.slice());
//       }else{
//           for(let j=i; j < array.length; j++){
//               swap(i, j, array);
//               helperPermutations(i+1, array, permutations);
//               swap(i, j, array);
//           }
//       }
//   }
  
//   function swap(i, j, array){
//       [array[i], array[j]] = [array[j], array[i]];
//   }
  
//   // Do not edit the line below.
//   exports.getPermutations = getPermutations;




//   /* Solved tournament winner */

//   function tournamentWinner(competitions, results) {
//     // O(n) time | O(k) space.
//     const homeTeamWon = 1;
//       let currentBestTeam = '';
//       let scores = { [currentBestTeam]: 0 };
//       for(let idx = 0; idx < competitions.length; idx++){
//           const result = results[idx]
//           const [homeTeam, awayTeam] = competitions[idx]
          
//           const winningTeam = result === homeTeamWon ? homeTeam : awayTeam;
//           updateScores(winningTeam, 3, scores);
          
//           if(scores[winningTeam] > scores[currentBestTeam]){
//               currentBestTeam = winningTeam
//           }
//       }
//        return currentBestTeam;
//   }
  
//   function updateScores(team, points, scores){
//       if(!(team in scores)) scores[team] = 0;
//       scores[team] += points;
//   }
  
//   // Do not edit the line below.
//   exports.tournamentWinner = tournamentWinner;

  


//   /* Solved non-constructible change */

//   function nonConstructibleChange(coins) {
//     // O(nlogn) time | O(1) space.
//       let currentChangeCreated = 0;
//       coins.sort((a, b) => a - b);
//       for(const coin of coins){
//           if(coin > currentChangeCreated + 1){
//               return currentChangeCreated + 1;
//           }else{
//               currentChangeCreated += coin;
//           }
//       }
//        return currentChangeCreated + 1;
      
//   }
  
//   // Do not edit the line below.
//   exports.nonConstructibleChange = nonConstructibleChange;
  
  
  


//   /* Find closest value in BST */

//   function findClosestValueInBst(tree, target) {
//     // O(logn) time | O(1) space.
//       return findClosestValueInBstHelper(tree, target, tree.value)
//   }
  
//   function findClosestValueInBstHelper(tree, target, closest){
//       while(tree !== null){
//           if(Math.abs(target - closest) > Math.abs(target - tree.value)){
//               closest = tree.value
//           }
          
//           if(target < tree.value){
//               tree = tree.left
//           }else if(target > tree.value){
//               tree = tree.right
//           }else{
//               break;
//           }
//       }
//       return closest
//   }
  
//   // This is the class of the input tree. Do not edit.
//   class BST {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   // Do not edit the line below.
//   exports.findClosestValueInBst = findClosestValueInBst;


//   function findClosestValueInBst(tree, target) {
//     // Avg case: O(logn) time | O(logn) space
//       // worst case: O(n) time | O(n) space
      
//       return findClosestValueInBstHelper(tree, target, tree.value)
//   }
  
//   function findClosestValueInBstHelper(tree, target, closest){
//       if(tree === null) return closest;
      
//       if(Math.abs(target - closest) > Math.abs(target - tree.value)){
//           closest = tree.value
//       }
      
//       if(target < tree.value){
//           return findClosestValueInBstHelper(tree.left, target, closest)
//       }else if(target > tree.value){
//           return findClosestValueInBstHelper(tree.right, target, closest)
//       }else{
//           return closest
//       }
//   }
  
//   // This is the class of the input tree. Do not edit.
//   class BST {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   // Do not edit the line below.
//   exports.findClosestValueInBst = findClosestValueInBst;
  
  

//   /* Solved branch sums */

//   // This is the class of the input root.
// // Do not edit it.
// class BinaryTree {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   function branchSums(root) {
//     // O(n) time | O(n) space.
//       const sums = [];
//       calculateBranchSums(root, 0, sums);
//       return sums;
//   }
  
//   function calculateBranchSums(node, runningSum, sums){
//       if(!node) return
//       const currentRunningSum = runningSum + node.value;
      
//       if(!node.left && !node.right){
//           sums.push(currentRunningSum);
//           return
//       }
      
//       calculateBranchSums(node.left, currentRunningSum, sums);
//       calculateBranchSums(node.right, currentRunningSum, sums)
//   }
  
//   // Do not edit the lines below.
//   exports.BinaryTree = BinaryTree;
//   exports.branchSums = branchSums;
  
  

//   /* Solved node depths using iterative approach*/

//   function nodeDepths(root) {
//     // O(n) time | O(h) space
//       let sumOfDepth = 0;
//       const stack = [{ node: root, depth: 0 }];
      
//       while(stack.length > 0){
//           const { node, depth } = stack.pop();
//           if(node === null) continue;
//           sumOfDepth += depth;
          
//           stack.push({ node: node.left, depth: depth + 1 })
//           stack.push({ node: node.right, depth: depth + 1 })
//       }
      
//       return sumOfDepth;
//   }
  
//   // This is the class of the input binary tree.
//   class BinaryTree {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   // Do not edit the line below.
//   exports.nodeDepths = nodeDepths;


//   /* Solved node depths using Recursive approach*/

//   function nodeDepths(root, depth = 0) {
//     // O(n) time | O(h) space.
//       if(root === null) return 0;
//       return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
//   }
  
//   // This is the class of the input binary tree.
//   class BinaryTree {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   // Do not edit the line below.
//   exports.nodeDepths = nodeDepths;
  
  

//   /* Solved interview questions */

// //   #multiply_nums("2, 3") ➞ 6
// // #multiply_nums("1, 2, 3, 4") ➞ 24
// // #multiply_nums("54, 75, 453, 0") ➞ 0
// // #multiply_nums("10, -2") ➞ -20
// // def multiply_nums(nums)
// //   nums.split(',').map {|x| x.to_i }.inject(1) { |a, b| a*b }
// // end
// // p multiply_nums("2, 3")
// // p multiply_nums("1, 2, 3, 4")
// // p multiply_nums("54, 75, 453, 0")
// // p multiply_nums("10, -2")

  

// /* Find closest value in a BST */
// function findClosestValueInBst(tree, target) {
//   // avg: O(logn) time | O(logn) space.
// 	// worst: O(n) time | O(n) space.
// 	return findClosestValueInBstHelper(tree, target, tree.value)
// }

// function findClosestValueInBstHelper(tree, target, closest){
// 	if(tree === null) return closest
	
// 	if(Math.abs(target - closest) > Math.abs(target - tree.value)){
// 		closest = tree.value
// 	}
// 	if(target < tree.value){
// 		return findClosestValueInBstHelper(tree.left, target, closest)
// 	}else if(target > tree.value){
// 		return findClosestValueInBstHelper(tree.right, target, closest)
// 	}else {
// 		return closest
// 	}
// }

// // This is the class of the input tree. Do not edit.
// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// // Do not edit the line below.
// exports.findClosestValueInBst = findClosestValueInBst;


// function findClosestValueInBst(tree, target) {
//   // avg: O(logn) time | O(1) space.
// 	// worst: O(logn) time | O(1) space
// 	return findClosestValueInBstHelper(tree, target, tree.value)
// }

// function findClosestValueInBstHelper(tree, target, closest){
// 	let currentNode = tree
// 	while(currentNode !== null){
// 		if(Math.abs(target - closest) > Math.abs(target - currentNode.value)){
// 			closest = currentNode.value
// 		}
		
// 		if(target < currentNode.value){
// 			currentNode = currentNode.left
// 		}else if(target > currentNode.value){
// 			currentNode = currentNode.right
// 		}else break;
// 	}
// 	return closest
// }

// // This is the class of the input currentNode. Do not edit.
// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// // Do not edit the line below.
// exports.findClosestValueInBst = findClosestValueInBst;




// // Branch sums

// // This is the class of the input root.
// // Do not edit it.
// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// function branchSums(root) {
//   // O(n) time | O(n) space.
// 	const sums = []
// 	calculateBranchSums(root, 0, sums)
// 	return sums
// }

// function calculateBranchSums(node, runningSum, sums){
// 	if(!node) return
	
// 	const currentRunningSum = runningSum + node.value;
	
// 	if(!node.left && !node.right){
// 		sums.push(currentRunningSum);
// 		return;
// 	}
	
// 	calculateBranchSums(node.left, currentRunningSum, sums)
// 	calculateBranchSums(node.right, currentRunningSum, sums)
// }

// // Do not edit the lines below.
// exports.BinaryTree = BinaryTree;
// exports.branchSums = branchSums;


// /* Node depths using iteration */

// function nodeDepths(root) {
//   // O(n) time | O(d) space.
// 	let sumOfDepths = 0;
// 	let stack = [{node: root, depth: 0 }]
	
// 	while(stack.length > 0){
// 		const {node, depth} = stack.pop();
// 		if(!node) continue
// 		sumOfDepths += depth;
		
// 		stack.push({ node: node.left, depth: depth + 1 })
// 		stack.push({ node: node.right, depth: depth + 1 })
// 	}
// 	return sumOfDepths
// }

// // This is the class of the input binary tree.
// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// // Do not edit the line below.
// exports.nodeDepths = nodeDepths;




// /* Solve nodeDepths using recursion */

// function nodeDepths(root, depth = 0) {
//   // O(n) time | O(d) space.
// 	if(!root) return 0
// 	return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
// }

// // This is the class of the input binary tree.
// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// // Do not edit the line below.
// exports.nodeDepths = nodeDepths;




// // Solve depth depthFirstSearch

// // Do not edit the class below except
// // for the depthFirstSearch method.
// // Feel free to add new properties
// // and methods to the class.
// class Node {
//   constructor(name) {
//     this.name = name;
//     this.children = [];
//   }

//   addChild(name) {
//     this.children.push(new Node(name));
//     return this;
//   }

//   depthFirstSearch(array) {
//     // O(v + e) time | O(e).
// 		array.push(this.name);
		
// 		for(const child of this.children){
// 			child.depthFirstSearch(array)
// 		}
// 		return array;
//   }
// }

// // Do not edit the line below.
// exports.Node = Node;



// /* Solved minimum waiting time */

// function minimumWaitingTime(queries) {
//   // o(nlogn) time | O(1) space.
// 	let totalWaitingTime = 0;
//   queries.sort((a, b) => a - b)
	
// 	for(let i=0; i < queries.length; i++){
// 		const duration = queries[i]
// 		const queriesLeft = queries.length - (i+1)
// 		totalWaitingTime += duration * queriesLeft;
// 	}
// 	return totalWaitingTime;
// }

// // Do not edit the line below.
// exports.minimumWaitingTime = minimumWaitingTime;




// /* Solved height Balanced binary tree */

// // This is an input class. Do not edit.
// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// function heightBalancedBinaryTree(tree) {
//   // O(n) time | O(h) space.
//   // find the depth of the tree 
// 	// determine if its balanced
// 	if(tree === null) return true
	
// 	if(Math.abs(maxDepth(tree.left) - maxDepth(tree.right)) > 1) return false
		 
// 	return heightBalancedBinaryTree(tree.left) && heightBalancedBinaryTree(tree.right)	 
	
// }

// function maxDepth(node){
// 	if(node === null) return 0;
// 	const left = maxDepth(node.left);
// 	const right = maxDepth(node.right);
	
// 	return Math.max(left, right) + 1
// }

// // Do not edit the lines below.
// exports.BinaryTree = BinaryTree;
// exports.heightBalancedBinaryTree = heightBalancedBinaryTree;

// /* Class photos */

// function classPhotos(redShirtHeights, blueShirtHeights) {
//   // O(nlogn) time | O(1) space.
//   redShirtHeights.sort((a,b) => a - b);
// 	blueShirtHeights.sort((a,b) => a - b);
	
// 	const shirtColorInFrontRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';
	
// 	for(let i=0; i < redShirtHeights.length; i++){
// 		const redShirtHeight = redShirtHeights[i];
// 		const blueShirtHeight = blueShirtHeights[i];
		
// 		if(shirtColorInFrontRow === 'RED'){
// 			if(redShirtHeight >= blueShirtHeight) return false
// 		}else if(blueShirtHeight >= redShirtHeight) return false
// 	}
// 	  return true;
// }

// // Do not edit the line below.
// exports.classPhotos = classPhotos;


// /* Solve tandem bicycle */
// function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
//   // O(nlogn) time | O(1) space.
// //   sort both color shirts
// // 	if not fastest, reverse one of the color shirts
// // 	initialize totalSpeed = 0
// // 	loop thru one of the shirts
// // 	define rider 1 and 2
// // 	Add max value of speeds to totalSpeed and return it
// 	redShirtSpeeds.sort((a,b) => a - b);
// 	blueShirtSpeeds.sort((a,b) => a - b);
	
// 	if(!fastest){
// 		reverseColorSpeeds(redShirtSpeeds)
//  }
// 	let totalSpeed = 0;
// 	for(let i=0; i < redShirtSpeeds.length; i++){
// 		const rider1 = redShirtSpeeds[i];
// 		const rider2 = blueShirtSpeeds[blueShirtSpeeds.length - i - 1]
// 		totalSpeed += Math.max(rider1, rider2);
// 	}
// 	return totalSpeed;
// }

// function reverseColorSpeeds(array){
// 	let start = 0
// 	let end = array.length - 1
	
// 	while(start < end){
// 		[array[start], array[end]] = [array[end], array[start]]
// 		start++;
// 		end--;
// 	}
// }
// // Do not edit the line below.
// exports.tandemBicycle = tandemBicycle;


// /* Remove duplicates from LinkedList */
// // This is an input class. Do not edit.
// class LinkedList {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// function removeDuplicatesFromLinkedList(linkedList) {
//   // O(n) time | O(1) space.
//   let currentNode = linkedList;
// 	while(currentNode !== null){
// 		let nextDistinctNode = currentNode.next;
// 		while(nextDistinctNode !== null && nextDistinctNode.value === currentNode.value){
// 			nextDistinctNode = nextDistinctNode.next
// 		}
// 		currentNode.next = nextDistinctNode
// 		currentNode = nextDistinctNode
// 	}
// 	return linkedList
// }

// // Do not edit the lines below.
// exports.LinkedList = LinkedList;
// exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;


// /* Solve fibonacci sequence */
// function getNthFib(n) {
//   // O(2^n) time | O(n) space
// 	if(n === 1) return 0
// 	else if(n === 2) return 1
// 	else return getNthFib(n-1) + getNthFib(n-2)
// }

// // Do not edit the line below.
// exports.getNthFib = getNthFib;

// function getNthFib(n, memoize={1:0, 2:1}) {
//   // O(n) time | O(n) space.
// 	if(n in memoize){
// 		return memoize[n]
// 	}else{
// 		memoize[n] = getNthFib(n-1, memoize) + getNthFib(n-2, memoize)
// 	}
// 	return memoize[n]
// }

// // Do not edit the line below.
// exports.getNthFib = getNthFib;


// function getNthFib(n) {
//   // O(n) time | O(1) space.
// 	let lastTwo = [0, 1];
// 	let counter = 3
// 	while(counter <= n){
// 		const nextFib = lastTwo[0] + lastTwo[1];
// 		lastTwo[0] = lastTwo[1];
// 		lastTwo[1] = nextFib;
// 		counter += 1;
// 	}
// 	return n > 1 ? lastTwo[1] : lastTwo[0];
// }

// // Do not edit the line below.
// exports.getNthFib = getNthFib;


// // solve Product Sum

// // Tip: You can use the Array.isArray function to check whether an item
// // is a list or an integer.
// // O(n) time  | O(d) space.
// function productSum(array, multiplier = 1) {
//   // Write your code here.
// 	let sum = 0;
// 	for(const element of array){
// 		if(Array.isArray(element)){
// 			sum += productSum(element, multiplier + 1)
// 		}else{
// 			sum += element
// 		}
// 	}
// 	return sum * multiplier
// }

// // Do not edit the line below.
// exports.productSum = productSum;



// /* Binary search */

// function binarySearch(array, target) {
//   // O(logn) time | O(logn) space.
// 	return binarySearchHelper(array, target, 0, array.length - 1)
// }

// function binarySearchHelper(array, target, left, right){
// 	if(left > right) return -1
// 	const middle = Math.floor((left + right) / 2);
// 	const potentialMatch = array[middle]
	
// 	if(target === potentialMatch) return middle
// 	else if(target < potentialMatch){
// 		return binarySearchHelper(array, target, left, middle - 1);
// 	}else{
// 		return binarySearchHelper(array, target, middle + 1, right)
// 	}
// }

// // Do not edit the line below.
// exports.binarySearch = binarySearch;



// function binarySearch(array, target) {
//   // O(logn) time | O(1) space.
// 	return binarySearchHelper(array, target, 0, array.length - 1)
// }

// function binarySearchHelper(array, target, left, right){
// 	while(left <= right){
// 		const middle = Math.floor((left + right) / 2);
// 		const potentialMatch = array[middle];
// 		if(target === potentialMatch) return middle;
// 		else if(target < potentialMatch){
// 			right = middle - 1;
// 		}else{
// 			left = middle + 1;
// 		}
// 	}
// 	return -1
// }

// // Do not edit the line below.
// exports.binarySearch = binarySearch;


// /* Solve find three largest numbers */

// function findThreeLargestNumbers(array) {
//   // O(n) time | O(1) space.
// 	const threeLargest = [null, null, null];
// 	for(const num of array){
// 		updateLargest(threeLargest, num)
// 	}
// 	return threeLargest
// }

// function updateLargest(threeLargest, num){
// 	if(threeLargest[2] === null || num > threeLargest[2]){
// 		updateAndShift(threeLargest, num, 2)
// 	}else if(threeLargest[1] === null || num > threeLargest[1]){
// 		updateAndShift(threeLargest, num, 1)
// 	}else if(threeLargest[0] === null || num > threeLargest[0]){
// 		updateAndShift(threeLargest, num, 0)
// 	}
// }

// function updateAndShift(array, num, idx){
// 	for(let i=0; i <= idx; i++){
// 		if(i === idx){
// 			array[i] = num
// 		}else{
// 			array[i] = array[i + 1]
// 		}
// 	}
// }

// // Do not edit the line below.
// exports.findThreeLargestNumbers = findThreeLargestNumbers;


// /* Solve Bubble sort */

// function bubbleSort(array) {
//   //O(n^2) time | O(1) space.
// 	let isSorted = false;
// 	let counter = 0;
// 	while(!isSorted){
// 		isSorted = true;
// 		for(let i=0; i < array.length - 1 - counter; i++){
// 			if(array[i] > array[i+1]){
// 				swap(i, i+1, array)
// 				isSorted = false
// 			}
// 		}
// 		counter++
// 	}
// 	return array;
// }

// function swap(i, j, array){
// 	[array[i], array[j]] = [array[j], array[i]];
// }

// // Do not edit the line below.
// exports.bubbleSort = bubbleSort;

// // /**
// //  * @param {string} s
// //  * @return {number}
// //  */
// //  var romanToInt = function(s) {
// //   const dictionary = {
// //    I: 1,
// //    V: 5,
// //    X: 10,
// //    L: 50,
// //    C: 100,
// //    D: 500,
// //    M: 1000,
// //  };
 
// //  let result = 0;
// //  let lastValue = 0;
 
// //  Array.from(s).map((letter)=> {
     
// //      if(result === 0 || lastValue > dictionary[letter] || lastValue === dictionary[letter]){
// //          result += dictionary[letter];
// //          lastValue = dictionary[letter];
// //          return;
// //      }
     
// //      result -= lastValue;
// //      result += dictionary[letter] - lastValue;
// //  })
 
// //  return result;
 
// // };


// /* Solve Insertion sort */

// function insertionSort(array) {
//   // O(n^2) time | O(1) space.
// 	for(let i=1; i < array.length; i++){
// 		let j = i
// 		while(j > 0 && array[j] < array[j - 1]){
// 			swap(j, j-1, array)
// 			j--
// 		}
// 	}
// 	return array
// }

// function swap(i, j, array){
// 	[array[i], array[j]] = [array[j], array[i]]
// }

// // Do not edit the line below.
// exports.insertionSort = insertionSort;


// /* Solve selection sort */

// function selectionSort(array) {
//   // O(n^2) time | O(1) space.	
// 	let startIdx = 0
// 	while(startIdx < array.length - 1){
// 		let smallestIdx = startIdx
// 		for(let i = startIdx + 1; i < array.length; i++){
// 			if(array[smallestIdx] > array[i]) smallestIdx = i
// 		}
// 		swap(startIdx, smallestIdx, array);
// 		startIdx++
// 	}
// 	return array
// }

// function swap(i, j, array){
// 	[array[i], array[j]] = [array[j], array[i]]
// }

// // Do not edit the line below.
// exports.selectionSort = selectionSort;


// /* Solve palindrome  check*/
// function isPalindrome(string) {
//   // O(n) time | O(1) space.
// 	let start = 0;
// 	let end = string.length - 1
// 	while(start <= end){
// 		if(string[start] !== string[end]) return false
// 		start++
// 		end--
// 	}
// 	return true
// }

// // Do not edit the line below.
// exports.isPalindrome = isPalindrome;


// /* Solve Caesar Cipher Encryptor 1 */

// function caesarCipherEncryptor(string, key) {
//   // O(n) time | O(n) space
// 	const newLetters = [];
// 	const newKey = key % 26;
// 	for(const letter of string){
// 		newLetters.push(getLetters(letter, newKey))
// 	}
// 	return newLetters.join("");
// }

// function getLetters(letter, key){
// 	const newLetterCode = letter.charCodeAt() + key;
	
// 	return newLetterCode <= 122 ? String.fromCharCode(newLetterCode) :
// 	  String.fromCharCode(96 + (newLetterCode % 122));
// }

// // Do not edit the line below.
// exports.caesarCipherEncryptor = caesarCipherEncryptor;


// /* Solve caesar cipher encryption 2 */

// function caesarCipherEncryptor(string, key) {
//   // O(n) time | O(n) space.
// 	const newLetters = [];
// 	const newKey = key % 26;
// 	const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
// 	for(const letter of string){
// 		newLetters.push(getNewLetters(letter, newKey, alphabets))
// 	}
// 	return newLetters.join("");
// }

// function getNewLetters(letter, key, alphabets){
// 	const newLetterCodes = alphabets.indexOf(letter) + key;
// 	return alphabets[newLetterCodes % 26];
// }

// // Do not edit the line below.
// exports.caesarCipherEncryptor = caesarCipherEncryptor;


// /* Run length Encoding */

// function runLengthEncoding(string) {
//   // O(n) time | O(n) space
// 	const encodedCharacters = [];
// 	let currentRunLength = 1;
// 	for(let i=1; i < string.length; i++){
// 		const currentChar = string[i];
// 		const previousChar = string[i-1];
// 		if(previousChar !== currentChar || currentRunLength === 9){
// 			encodedCharacters.push(currentRunLength.toString());
// 			encodedCharacters.push(previousChar);
// 			currentRunLength = 0
// 		}
// 		 currentRunLength += 1;
// 	}
	
// 	  encodedCharacters.push(currentRunLength.toString());
// 		encodedCharacters.push(string[string.length - 1])
	
// 	 return encodedCharacters.join('');
	
// }

// // Do not edit the line below.
// exports.runLengthEncoding = runLengthEncoding;


// function prefix(strs) {
//   if(!strs.length) return "";
//   if(strs.length === 1) return strs[0];
//   let compareStr = strs[0];
//   let count = 0;
//   for(let i=0; i < strs.length; i++){
//     for(let j=compareStr.length; j >= 1; j--){
//       if(compareStr.slice(0, j) === strs[i].slice(0, j)){
//         count += 1;
//         compareStr = compareStr.slice(0, j);
//         break;
//       }
//     }
//   }
//    count !== strs.length ? "" : compareStr;
//    console.log(compareStr); 
// }


// const strs = ["flower","flow","flight"];

// prefix(strs)








// function giveMeSomething(strEntry) {
//   strEntry = "something " + strEntry
//   return strEntry
//   }

// console.log(giveMeSomething("is better")) 

// function addIndexes(arr) {
//   // arr = new Array(arr.length).fill(0);
//   const newArr = []
//   for(let i=0; i < arr.length; i++){
//     newArr.push(arr[i] + i)
//   }
//   return newArr;
// }
    
  // console.log(addIndexes([1, 2, 3, 4, 5])) 
  //  [1, 3, 5, 7, 9]

  // console.log(addIndexes([0, 0, 0, 0, 0]))
  // [0, 1, 2, 3, 4]

  // console.log(addIndexes([5, 4, 3, 2, 1]))
  // [5, 5, 5, 5, 5]

  // function calcAge(age) {
    // console.log(typeof age);
    // return age *= 365
    // }

  // console.log(calcAge(65))
  //  23725
  // console.log(calcAge(0))
  // 0
  // console.log(calcAge(20))
  // 7300 
  
  // function shouldServeDrinks(age, onBreak) {
  //   if(age >= 18 && onBreak === false ){
  //   return true
  //   }else if(age >= 18 && onBreak === true || age < 18 && onBreak === true){
  //   return false
  //   }
  // }

  // console.log(shouldServeDrinks(17, true)) 
  // false
  // console.log(shouldServeDrinks(19, false))
  // true

  // console.log(shouldServeDrinks(30, true))
  // false


  // function addOdds(n) {
  //   return (n % 2 === 1).reduce((a,b) => a + b, 0);
  //  // [1, 2, 3, 4].reduce((a, b) => a + b, 0)
    
  //  }

  //  console.log(7);

//   function remainder(a, b) {
//     const mod = a % b
//     return mod
    
//   }
// console.log(remainder(5, 3))

// function sumPrimes(n) {
//   if(n < 2) return false;


// return n.reduce((a, b) => a + b, 0)
// }

// console.log(sumPrimes(10));

// N = int(input("enter the last number ") 
// Sum = 0 
// for i in range(0,n+1) 
//    if(i%2!=0) 
//       Sum=Sum + i 
// Print(Sum) 

// function addOdds(n) {
//   let sum = 0;
//   for(let i=0; i < n; i++){
//     if(i % 2 !== 0) sum += i
//   }
//   return sum
//   }

//   console.log(addOdds(7));



// function sumPrimes(n) {
//   let result = 0;
//   for(let i=2; i < n; i++){
//     if(isPrime(i)) result += i
//   }
//   return result;
// }

// function isPrime(val){
//   for(let i=2; i < val; i++){
//     if(val % i === 0) return false
//   }
//     return true
// }
 

//   console.log(sumPrimes(10));

  // function findBob(arr) {
  //   for(let i=0; i < arr.length; i++){
  //     if(arr[i] === "Bob"){
  //       return i
  //     }
  //   }
  //   return -1
  // }
  // const input = ["Fem","Bob","Shaw","James"]
  // console.log(findBob(["Fem","Bob","Shaw","James"]));

  // function stringFirstHalf(n) {
  //   const len = n.length 
  //   const half = Math.floor(len / 2)
  //   const item = n.substr(0, half)
  //   return item
  //  }
  //   const n = "paused"
  //  console.log(stringFirstHalf(n)) 
  //  “pau”

  

  // function factorialize(num) {
  //   if(num > 1){
  //     return num * factorialize(num - 1)
  //   }
  //   return 1
  // }
  // console.log(factorialize(3)) 
  // 6  

  // function temperatureConversion(arr) {
  //   const F = arr * 1.8 + 32
  //   return F
  // }
  // console.log(temperatureConversion(0));

  // function minMax(arr) {
  //   const result = []
  //   arr = arr.sort((a,b) => a + b)
  //   for(let i=0; i < arr.length; i++){
  //     result.push(arr[0], arr[arr.length - 1])
  //   }
  //   const unique = result.filter(onlyUnique);
  //   return unique;
  //  }

  //  function onlyUnique(value, index, self) {
  //   return self.indexOf(value) === index;
  // }

  //  console.log(minMax([1, 2, 3, 4, 5])) 
  // //  [1, 5]



  /* Solve Generate document */
  // function generateDocument(characters, document) {
  //   // O(m + (m + n)) time | O(1) space.
  //   for(const character of document){
  //     const documentFrequency = countCharacterFrequency(character, document);
  //     const characterFrequency = countCharacterFrequency(character, characters);
  //     if(documentFrequency > characterFrequency) return false;
  //   }
  //    return true;
  // }
  
  // function countCharacterFrequency(character, target){
  //   let frequency = 0;
  //   for(const char of target){
  //     if(char === character) frequency++
  //   }
  //    return frequency
  // }
  
  // Do not edit the line below.
  // exports.generateDocument = generateDocument;


  // function generateDocument(characters, document) {
  //   // O(c * (m + n)) time | O(c) space.
  //   const alreadyCounted = new Set();
  //   for(const character of document){
  //     if(character in alreadyCounted) continue
      
  //     const documentFrequency = countCharacterFrequency(character, document);
  //     const characterFrequency = countCharacterFrequency(character, characters);
  //     if(documentFrequency > characterFrequency) return false
      
  //     alreadyCounted.add(character);
  //   }
  //    return true;
  // }
  
  // function countCharacterFrequency(character, target){
  //   let frequency = 0;
  //   for(const char of target){
  //     if(char === character) frequency++
  //   }
  //    return frequency
  // }
  
  // // Do not edit the line below.
  // exports.generateDocument = generateDocument;

  // function generateDocument(characters, document) {
  //   // O(n+m) time | O(c) space.
  //   const characterCount = {};
  //   for(const character of characters){
  //     if(!(character in characterCount)) characterCount[character] = 0
  //     characterCount[character]++
  //   }
    
  //   for(const character of document){
  //     if(!(character in characterCount) || characterCount[character] === 0) return false
  //     characterCount[character]--
  //   }
  //    return true;
  // }
  
  // Do not edit the line below.
  // exports.generateDocument = generateDocument;



  /* Solved non-repeating character */
  // function firstNonRepeatingCharacter(string) {
  //   // O(n^2) time | O(1) space.
  //   for(let idx = 0; idx < string.length; idx++){
  //     let foundDuplicate = false;
  //     for(let idx2 = 0; idx2 < string.length; idx2++){
  //       if(string[idx] === string[idx2] && idx !== idx2) {
  //         foundDuplicate = true
  //       }
  //     }
  //      if(!foundDuplicate) return idx
  //   }
  //      return -1
  // }
  
  // // Do not edit the line below.
  // exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;

  // function firstNonRepeatingCharacter(string) {
  //   // O(n) time | O(1) space
  //   const characterCount = {};
  //   for(const character of string){
  //     if(!characterCount[character]) characterCount[character] = 0;
  //     characterCount[character]++
  //   }
  //   for(let i=0; i < string.length; i++){
  //     const character = string[i]
  //     if(characterCount[character] === 1) return i
  //   }
  //    return -1
  // }
  
  // // Do not edit the line below.
  // exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter;
  
  


  // /* Solve three number sum */

  // function threeNumberSum(array, targetSum) {
  //   // O(n^2) time | O(n) space
  //   const triplets = []
  //   array.sort((a,b) => a - b);
  //   for(let i=0; i < array.length - 2; i++){
  //     let left = i + 1;
  //     let right = array.length - 1;
      
  //     while(left < right){
  //       const currentSum = array[i] + array[left] + array[right];
  //       if(currentSum === targetSum){
  //         triplets.push([array[i], array[left], array[right]]);
  //         left++;
  //         right--
  //       }else if(currentSum < targetSum){
  //         left++
  //       }else if(currentSum > targetSum){
  //         right--
  //       }
  //     }
  //   }
  //    return triplets;
  // }
  
  // Do not edit the line below.
  // exports.threeNumberSum = threeNumberSum;


//   function societyName(arr) {
//     const result = []
//   for(let i=0; i < arr.length; i++){
//     result.push(arr[0][0], arr[1][0], arr[2][0])
//   }
//     const secret = result.filter(onlyUnique)
//     const joinedSecret = secret.sort().join("");
//     // console.log(typeof(joinedSecret));
//     return joinedSecret;
// }

//  function onlyUnique(value, index, self){
//    return self.indexOf(value) === index
//  }

// console.log(societyName(["Adam", "Sarah", "Malcolm"]))
// // "AMS"

//   const cities = ['London', 'Paris', 'Tokyo'];
// const joinedCities = cities.join();

// console.log(joinedCities);


/* Merged linked list */

// class LinkedList {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// function mergeLinkedLists(headOne, headTwo) {
//   // O(n + m) time | O(1) space.
// 	let p1 = headOne;
// 	let p1Prev = null;
// 	let p2 = headTwo;
	
// 	while(p1 !== null && p2 !== null){
// 		if(p1.value < p2.value){
// 			p1Prev = p1;
// 			p1 = p1.next;
// 		}else {
// 			if(p1Prev !== null) p1Prev.next = p2
// 			p1Prev = p2;
// 			p2 = p2.next
// 			p1Prev.next = p1;
// 		}
// 	}
// 	 if(p1 === null) p1Prev.next = p2;
// 	 return headOne.value < headTwo.value ? headOne : headTwo;
// }

// Do not edit the lines below.
// exports.LinkedList = LinkedList;
// exports.mergeLinkedLists = mergeLinkedLists;

// function removeDuplicate(nums){
//   let i = 0;
//   let j = 1;
//   if(nums.length === 0) return 0;
//   while(j < nums.length){
//     if(nums[j] !== nums[i]){
//       i++;
//       nums[i] = nums[j]
//       j++;
//     }else j++
//   }
//    return i+1;
// }


// const input = [0,0,1,1,1,2,2,3,3,4];

// console.log(removeDuplicate(input));



/* Solve smallest difference */

function smallestDifference(arrayOne, arrayTwo) {
  // O(nlogn + mlogm) time | O(1) space.
	arrayOne.sort((a,b) => a - b);
	arrayTwo.sort((a,b) => a - b);
	let idx1 = 0;
	let idx2 = 0;
	let smallest = Infinity;
	let current = Infinity;
	let smallestPair = [];
	
	while(idx1 < arrayOne.length && idx2 < arrayTwo.length){
		const firstNum = arrayOne[idx1];
		const secondNum = arrayTwo[idx2];
		if(firstNum < secondNum){
			current = secondNum - firstNum
			idx1++;
		}else if(firstNum > secondNum){
			current = firstNum - secondNum;
			idx2++;
		}else {
			return [firstNum, secondNum]
		}
		 if(smallest > current){
			 smallest = current
			 smallestPair = [firstNum, secondNum]
		 }
	}
	 return smallestPair;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;


/* Move Element to the end */

function moveElementToEnd(array, toMove) {
  // O(n) time | O(1) space.
	let i = 0;
	let j = array.length - 1;
	while(i < j){
		while(i < j && array[j] === toMove) j--
		if(array[i] === toMove) swap(i, j, array)
		i++
	}
	 return array
}

function swap(i, j, array){
	[array[i], array[j]] = [array[j], array[i]]
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;


/* Solved Monotonic arrays */

function isMonotonic(array) {
  // O(n) time | O(1) space.
	if(array.length <= 2) return true
	let direction = array[1] - array[0];
	
	for(let i=1; i < array.length; i++){
		if(direction === 0){
			direction = array[i] - array[i-1]
			continue;
		}
		if(breaksDirection(direction, array[i-1], array[i])){
			return false
		}
	}
	 return true;
}

function breaksDirection(direction, previousInt, currentInt){
	const difference = currentInt - previousInt
	if(direction > 0) return difference < 0;
	return difference > 0
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;




    
  
  

