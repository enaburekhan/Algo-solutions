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

// function smallestDifference(arrayOne, arrayTwo) {
//   // O(nlogn + mlogm) time | O(1) space.
// 	arrayOne.sort((a,b) => a - b);
// 	arrayTwo.sort((a,b) => a - b);
// 	let idx1 = 0;
// 	let idx2 = 0;
// 	let smallest = Infinity;
// 	let current = Infinity;
// 	let smallestPair = [];

// 	while(idx1 < arrayOne.length && idx2 < arrayTwo.length){
// 		const firstNum = arrayOne[idx1];
// 		const secondNum = arrayTwo[idx2];
// 		if(firstNum < secondNum){
// 			current = secondNum - firstNum
// 			idx1++;
// 		}else if(firstNum > secondNum){
// 			current = firstNum - secondNum;
// 			idx2++;
// 		}else {
// 			return [firstNum, secondNum]
// 		}
// 		 if(smallest > current){
// 			 smallest = current
// 			 smallestPair = [firstNum, secondNum]
// 		 }
// 	}
// 	 return smallestPair;
// }

// // Do not edit the line below.
// exports.smallestDifference = smallestDifference;

// /* Move Element to the end */

// function moveElementToEnd(array, toMove) {
//   // O(n) time | O(1) space.
// 	let i = 0;
// 	let j = array.length - 1;
// 	while(i < j){
// 		while(i < j && array[j] === toMove) j--
// 		if(array[i] === toMove) swap(i, j, array)
// 		i++
// 	}
// 	 return array
// }

// function swap(i, j, array){
// 	[array[i], array[j]] = [array[j], array[i]]
// }

// // Do not edit the line below.
// exports.moveElementToEnd = moveElementToEnd;

// /* Solved Monotonic arrays */

// function isMonotonic(array) {
//   // O(n) time | O(1) space.
// 	if(array.length <= 2) return true
// 	let direction = array[1] - array[0];

// 	for(let i=1; i < array.length; i++){
// 		if(direction === 0){
// 			direction = array[i] - array[i-1]
// 			continue;
// 		}
// 		if(breaksDirection(direction, array[i-1], array[i])){
// 			return false
// 		}
// 	}
// 	 return true;
// }

// function breaksDirection(direction, previousInt, currentInt){
// 	const difference = currentInt - previousInt
// 	if(direction > 0) return difference < 0;
// 	return difference > 0
// }

// // Do not edit the line below.
// exports.isMonotonic = isMonotonic;

// function isMonotonic(array) {
//   // O(n) time | O(1) space.
// 	let nonIncreasing = true;
// 	let nonDecreasing = true;

// 	for(let i=0; i < array.length; i++){
// 		if(array[i] < array[i-1]) nonDecreasing = false;
// 		else if(array[i] > array[i-1]) nonIncreasing = false;
// 	}
// 	 return nonIncreasing || nonDecreasing;
// }

// // Do not edit the line below.
// exports.isMonotonic = isMonotonic;

// /* Solve spiral traverse */

// function spiralTraverse(array) {
//   // O(n) time | O(n) space using Iterative approach.
// 	let startRow = 0;
// 	let endRow = array.length - 1;
// 	let startCol = 0;
// 	let endCol = array[0].length - 1;
// 	const result = [];

// 	while(startRow <= endRow && startCol <= endCol){
// 	  for(let col = startCol; col <= endCol; col++){
// 			result.push(array[startRow][col])
// 		}

// 		for(let row = startRow + 1; row <= endRow; row++){
// 			result.push(array[row][endCol])
// 		}

// 		for(let col = endCol -1; col >= startCol; col--){
// 			if(startRow === endRow) break;
// 			result.push(array[endRow][col])
// 		}

// 		for(let row = endRow - 1; row > startRow; row--){
// 			if(startCol === endCol) break;
// 			result.push(array[row][startCol])
// 		}
// 		startRow += 1;
// 		endRow -= 1;
// 		startCol += 1;
// 		endCol -= 1;
// 	}
// 	 return result;
// 	}

// // Do not edit the line below.
// exports.spiralTraverse = spiralTraverse;

// function spiralTraverse(array) {
//   // O(n) time | O(n) space using recursive approach.
// 	const result = [];
// 	spiralFill(array, 0, array.length - 1, 0, array[0].length - 1, result);
// 	return result;
// }

// function spiralFill(array, startRow, endRow, startCol, endCol, result){
// 	if(startRow > endRow || startCol > endCol) return;

// 	for(let col = startCol; col <= endCol; col++){
// 		result.push(array[startRow][col])
// 	}
// 	for(let row = startRow + 1; row <= endRow; row++){
// 		result.push(array[row][endCol])
// 	}
// 	for(let col = endCol - 1; col >= startCol; col--){
// 		if(startRow === endRow) break;
// 		result.push(array[endRow][col]);
// 	}
// 	for(let row = endRow - 1; row > startRow; row--){
// 		if(startCol === endCol) break;
// 		result.push(array[row][startCol])
// 	}
// 	spiralFill(array, startRow + 1, endRow - 1, startCol + 1, endCol - 1, result)
// }

// // Do not edit the line below.
// exports.spiralTraverse = spiralTraverse;

// /* Solve longest peak */
// function longestPeak(array) {
//   // O(n) time | O(1) space.
// 	let longestPeakLength = 0;
// 	let i = 1;
// 	while(i < array.length - 1){
// 		const isPeak = array[i-1] < array[i] && array[i] > array[i+1];
// 		if(!isPeak) {
// 			i++;
// 		continue;
// 		}

// 		let leftIdx = i - 2;
// 		while(leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) leftIdx--;

// 		let rightIdx = i + 2;
// 		while(rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) rightIdx++;

// 		const currentPeakLength = rightIdx - leftIdx - 1;
// 		longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
// 		i = rightIdx;
//   }
// 	 return longestPeakLength;
// }

// // Do not edit the line below.
// exports.longestPeak = longestPeak;

// /* Solve array of products */

// function arrayOfProducts(array) {
//   // O(n^2) time | O(n) time.
// 	const products = [];
// 	for(let i=0; i < array.length; i++){
// 		let runningProduct = 1
// 		for(let j=0; j < array.length; j++){
// 			if(i !== j){
// 				runningProduct *= array[j]
// 			}
// 		}
// 		products.push(runningProduct);
// 	}
// 	 return products;
// }

// // Do not edit the line below.
// exports.arrayOfProducts = arrayOfProducts;

// function arrayOfProducts(array) {
//   // O(n) time | O(n) space.
// 	const products = new Array(array.length).fill(1);
// 	const leftProducts = new Array(array.length).fill(1);
// 	const rightProducts = new Array(array.length).fill(1);

// 	let leftRunningProduct = 1;
// 	for(let i = 0; i < array.length; i++){
// 		leftProducts[i] = leftRunningProduct
// 		leftRunningProduct *= array[i]
// 	}

// 	let rightRunningProduct = 1;
// 	for(let i = array.length - 1; i > -1; i-- ){
// 		rightProducts[i] = rightRunningProduct
// 		rightRunningProduct *= array[i]
// 	}

// 	for(let i = 0; i < array.length; i++){
// 		products[i] = leftProducts[i] * rightProducts[i]
// 	}
// 	return products
// }

// // Do not edit the line below.
// exports.arrayOfProducts = arrayOfProducts;

// function arrayOfProducts(array) {
//   // O(n) time | O(n) space.
// 	const products = new Array(array.length).fill(1);

// 	let leftRunningProducts = 1
// 	for(let i=0; i < array.length; i++){
// 		products[i] = leftRunningProducts
// 		leftRunningProducts *= array[i];
// 	}

// 	let rightRunningProducts = 1;
// 	for(let i = array.length - 1; i > -1; i--){
// 		products[i] *= rightRunningProducts
// 		rightRunningProducts *= array[i]
// 	}
// 	 return products;
// }

// // Do not edit the line below.
// exports.arrayOfProducts = arrayOfProducts;

// /* First duplicate value */

// function firstDuplicateValue(array) {
//   // O(n^2) time | O(1) space.
//   let minimumSecondIndex = array.length;

// 	for(let i=0; i < array.length; i++){
// 		const value = array[i];
// 		for(let j=i+1; j < array.length; j++){
// 			const compareValue = array[j];
// 			if(value === compareValue){
// 				minimumSecondIndex = Math.min(minimumSecondIndex, j)
// 			}
// 		}
// 	}

// 	 if(minimumSecondIndex === array.length) return -1

// 	 return array[minimumSecondIndex]
// }

// // Do not edit the line below.
// exports.firstDuplicateValue = firstDuplicateValue;

// function firstDuplicateValue(array) {
//   // O(n) time | O(n) space.
//   const seen = new Set();

// 	for(const value of array){
// 		if(seen.has(value)) return value;
// 		seen.add(value)
// 	}
// 	 return -1;
// }

// // Do not edit the line below.
// exports.firstDuplicateValue = firstDuplicateValue;

// function firstDuplicateValue(array) {
//   // O(n) time | O(1) space.
//   for(const value of array){
// 		const absValue = Math.abs(value)
// 		if(array[absValue - 1] < 0) return absValue
// 		array[absValue - 1] *= -1
// 	}
// 	 return -1;
// }

// // Do not edit the line below.
// exports.firstDuplicateValue = firstDuplicateValue;

// function range(l, r){
//   list = [];
//   for(let i = l; i <= r; i++){
//     list.push(i)
//   }
//   return list
// }

// console.log(range(2, 5));

// function mergeOverlappingIntervals(array) {
//   // O(nlogn) time | O(n) space.
//   const sortedArray = array.sort((a,b) => a[0] - b[0]);
// 	const mergeInterval = [];
// 	let currentInterval = sortedArray[0];
// 	mergeInterval.push(currentInterval);

// 	for(const nextInterval of sortedArray){
// 		const [_, currentIntervalEnd] = currentInterval;
// 		const [nextIntervalStart, nextIntervalEnd] = nextInterval
// 		if(currentIntervalEnd >= nextIntervalStart){
// 			currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd)
// 		}else{
// 			currentInterval = nextInterval;
// 			mergeInterval.push(currentInterval)
// 		}
// 	}
// 	 return mergeInterval;
// }

// // Do not edit the line below.
// exports.mergeOverlappingIntervals = mergeOverlappingIntervals;

// This is an input class. Do not edit.

/* Validate Bst */
// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// function validateBst(tree) {
//   // O(n) time | O(d) space.
// 	return validateBstHelper(tree, -Infinity, +Infinity)
// }

// function validateBstHelper(tree, minValue, maxValue){
// 	if(tree === null) return true;

// 	if(tree.value < minValue || tree.value >= maxValue) return false

// 	const leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
// 	return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue)
// }

// // Do not edit the line below.
// exports.BST = BST;
// exports.validateBst = validateBst;

// function countString(str){
//   count = {};
//   const strCase = str.toLowerCase()
//   // return console.log(strCase)
//   for(const value of strCase){
//     if(count.hasOwnProperty(value)){
//       count[value] += 1
//     }else{
//       count[value] = 1
//     }
//   }
//    return count
// }

// const char = "ababbBc"

// console.log(countString(char))

/* Solve BST traversal */

// O(n) time | O(n) space
// function inOrderTraverse(tree, array) {
// Write your code here.
// 	if(tree !== null){
// 		inOrderTraverse(tree.left, array);
// 		array.push(tree.value);
// 		inOrderTraverse(tree.right, array)
// 	}
// 	return array
// }

// O(n) time | O(n) space
// function preOrderTraverse(tree, array) {
// Write your code here.
// 	if(tree !== null){
// 		array.push(tree.value);
// 	preOrderTraverse(tree.left, array);
// 	preOrderTraverse(tree.right, array);
// }
// 	return array
// }

// O(n) time | O(n) space
// function postOrderTraverse(tree, array) {
// Write your code here.
// 	if(tree !== null){
// 		postOrderTraverse(tree.left, array);
// 		postOrderTraverse(tree.right, array);
// 		array.push(tree.value)
// 	}
// 	 return array
// }

// Do not edit the lines below.
// exports.inOrderTraverse = inOrderTraverse;
// exports.preOrderTraverse = preOrderTraverse;
// exports.postOrderTraverse = postOrderTraverse;

/* Solve min Height BST */

// function minHeightBst(array) {
//   // O(nlogn) time | O(n) space.
// 	return constructMinHeightBst(array, null, 0, array.length - 1)
// }

// function constructMinHeightBst(array, bst, startIdx, endIdx){
// 	if(endIdx < startIdx) return

// 	const midIdx = Math.floor((startIdx + endIdx) / 2);
// 	const valueToAdd = array[midIdx];

// 	if(bst === null){
// 		bst = new BST(valueToAdd)
// 	}else{
// 		bst.insert(valueToAdd)
// 	}

// 	constructMinHeightBst(array, bst, startIdx, midIdx - 1);
// 	constructMinHeightBst(array, bst, midIdx + 1, endIdx);
// 	return bst
// }

// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }

//   insert(value) {
//     if (value < this.value) {
//       if (this.left === null) {
//         this.left = new BST(value);
//       } else {
//         this.left.insert(value);
//       }
//     } else {
//       if (this.right === null) {
//         this.right = new BST(value);
//       } else {
//         this.right.insert(value);
//       }
//     }
//   }
// }

// // Do not edit the line below.
// exports.minHeightBst = minHeightBst;

// function minHeightBst(array) {
//   // Write your code here.
// 	return constructMinHeightBst(array, null, 0, array.length - 1)
// }

// function constructMinHeightBst(array, bst, startIdx, endIdx){
// 	if(endIdx < startIdx) return
// 	const midIdx = Math.floor((startIdx + endIdx) / 2);
// 	const newBstNode = new BST(array[midIdx]);

// 	if(bst === null){
// 		bst = newBstNode
// 	}else{
// 		if(array[midIdx] < bst.value){
// 			bst.left = newBstNode;
// 			bst = bst.left;
// 		}else{
// 			bst.right = newBstNode;
// 			bst = bst.right;
// 		}
// 	}

// 	constructMinHeightBst(array, bst, startIdx, midIdx - 1);
// 	constructMinHeightBst(array, bst, midIdx + 1, endIdx);
// 	return bst;
// }

// function minHeightBst(array) {
//   // O(n) time | O(n) space.
// 	return constructMinHeightBst(array, 0, array.length - 1);
// }

// function constructMinHeightBst(array, startIdx, endIdx){
// 	if(endIdx < startIdx) return null;

// 	const midIdx = Math.floor((startIdx + endIdx) / 2);
// 	const bst = new BST(array[midIdx]);

// 	bst.left = constructMinHeightBst(array, startIdx, midIdx - 1);
// 	bst.right = constructMinHeightBst(array, midIdx + 1, endIdx);
// 	return bst;
// }

/* Solve find kth value */
// This is an input class. Do not edit.
// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// function findKthLargestValueInBst(tree, k) {
//   // O(n) time | O(n) space.
//   const sortedNodeValues = [];
// 	inOrderTraverse(tree, sortedNodeValues)
// 	return sortedNodeValues[sortedNodeValues.length - k]
// }

// function inOrderTraverse(node, sortedNodeValues){
// 	if(node === null) return;

// 	inOrderTraverse(node.left, sortedNodeValues);
// 	sortedNodeValues.push(node.value);
// 	inOrderTraverse(node.right, sortedNodeValues)
// }

// // Do not edit the lines below.
// exports.BST = BST;
// exports.findKthLargestValueInBst = findKthLargestValueInBst;

// // This is an input class. Do not edit.
// class BST {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// class TreeInfo {
// 	constructor(numbersOfNodesVisited, latestNodesVistedValue){
// 		this.numbersOfNodesVisited = numbersOfNodesVisited;
// 		this.latestNodesVisitedValue = latestNodesVistedValue;
// 	}
// }

// function findKthLargestValueInBst(tree, k) {
//   // O(h + k) time | O(h) space.
//   const treeInfo = new TreeInfo(0, -1)
// 	reverseInOrderTraverse(tree, k, treeInfo);
// 	return treeInfo.latestNodesVisitedValue;
// }

// function reverseInOrderTraverse(node, k, treeInfo){
// 	if(node === null || treeInfo.numbersOfNodesVisited >= k) return

// 	reverseInOrderTraverse(node.right, k, treeInfo);

// 	if(treeInfo.numbersOfNodesVisited < k){
// 		treeInfo.numbersOfNodesVisited++;
// 		treeInfo.latestNodesVisitedValue = node.value
// 		reverseInOrderTraverse(node.left, k, treeInfo)
// 	}
// }

/* Reconstruct BST */

// This is an input class. Do not edit.
// class BST {
//   constructor(value, left = null, right = null) {
//     this.value = value;
//     this.left = left;
//     this.right = right;
//   }
// }

// function reconstructBst(preOrderTraversalValues) {
//   // O(n^2) time | O(n) space.
//   if(preOrderTraversalValues.length === 0) return null;

// 	const currentValue = preOrderTraversalValues[0];
// 	let rightSubtreeRootIdx = preOrderTraversalValues.length;

// 	for(let idx = 1; idx < preOrderTraversalValues.length; idx++){
// 		const value = preOrderTraversalValues[idx];
// 		if(value >= currentValue){
// 			rightSubtreeRootIdx = idx;
// 			break;
// 		}
// 	}

// 	const leftTree = reconstructBst(preOrderTraversalValues.slice(1, rightSubtreeRootIdx));
// 	const rightTree = reconstructBst(preOrderTraversalValues.slice(rightSubtreeRootIdx));
// 	return new BST(currentValue, leftTree, rightTree);
// }

// // Do not edit the lines below.
// exports.BST = BST;
// exports.reconstructBst = reconstructBst;

// class TreeNode{
// 	constructor(rootIdx){
// 		this.rootIdx = rootIdx;
// 	}
// }

// function reconstructBst(preOrderTraversalValues) {
//   // O(n) time | O(n) space.
//   const treeNode = new TreeNode(0);
// 	return reconstructBstFromRange(-Infinity, Infinity, preOrderTraversalValues, treeNode)
// }

// function reconstructBstFromRange(lowerBand, upperBand, preOrderTraversalValues, currentSubtreeInfo){
// 	if(currentSubtreeInfo.rootIdx === preOrderTraversalValues.length) return null;

// 	const rootValue = preOrderTraversalValues[currentSubtreeInfo.rootIdx];
// 	if(rootValue < lowerBand || rootValue >= upperBand) return null;

// 	currentSubtreeInfo.rootIdx++;

// 	const leftSubtree = reconstructBstFromRange(lowerBand, rootValue, preOrderTraversalValues, currentSubtreeInfo);
// 	const rightSubtree = reconstructBstFromRange(rootValue, upperBand, preOrderTraversalValues, currentSubtreeInfo);
// 	return new BST(rootValue, leftSubtree, rightSubtree);
// }

/* Solve merged linked list */
// This is an input class. Do not edit.
// class LinkedList {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// function mergeLinkedLists(headOne, headTwo) {
// O(n + m) time | O(1) space.
// 	let p1 = headOne;
// 	let p1prev = null;
// 	let p2 = headTwo;

// 	while(p1 !== null && p2 !== null){
// 		if(p1.value < p2.value){
// 			p1prev = p1;
// 			p1 = p1.next;
// 		}else{
// 			if(p1prev !== null) p1prev.next = p2
// 			p1prev = p2;
// 			p2 = p2.next;
// 			p1prev.next = p1;
// 		}
// 	}
// 	if(p1 === null) p1prev.next = p2;

// 	return headOne.value < headTwo.value ? headOne : headTwo
// }

// Do not edit the lines below.
// exports.LinkedList = LinkedList;
// exports.mergeLinkedLists = mergeLinkedLists;

/* Invert Binary tree */

// function invertBinaryTree(tree) {
// O(n) time | O(n) space
// 	const queue = [tree];

// 	while(queue.length){
// 		const current = queue.shift();
// 		if(current === null) continue;

// 		swapLeftAndRight(current);
// 		queue.push(current.left);
// 		queue.push(current.right);
// 	}
// }

// function swapLeftAndRight(tree){
// 	[tree.left, tree.right] = [tree.right, tree.left]
// }

// This is the class of the input binary tree.
// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// Do not edit the line below.
// exports.invertBinaryTree = invertBinaryTree;

// function invertBinaryTree(tree) {
// O(n) time | O(d) space.
// if(tree === null) return;

// 	swapLeftAndRight(tree);
// 	invertBinaryTree(tree.left)
// 	invertBinaryTree(tree.right)
// }

// function swapLeftAndRight(tree){
// 	[tree.left, tree.right] = [tree.right, tree.left]
// }

// This is the class of the input binary tree.
// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// Do not edit the line below.
// exports.invertBinaryTree = invertBinaryTree;

/* Binary Tree Diameter */
// This is an input class. Do not edit.
// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// function binaryTreeDiameter(tree) {
// O(n) time | O(h) space for average and O(n) space for worst case.
//   return getTreeInfo(tree).diameter
// }

// function getTreeInfo(tree){
// 	if(tree === null) return new TreeInfo(0, 0);

// 	const leftTreeInfo = getTreeInfo(tree.left);
// 	const rightTreeInfo = getTreeInfo(tree.right);
// 	const longestPathThroughRoot = leftTreeInfo.height + rightTreeInfo.height
// 	const maxDiameterSoFar = Math.max(leftTreeInfo.diameter, rightTreeInfo.diameter);
// 	const currentDiameter = Math.max(longestPathThroughRoot, maxDiameterSoFar);
// 	const currentHeight = 1 + Math.max(leftTreeInfo.height, rightTreeInfo.height);

// 	return new TreeInfo(currentHeight, currentDiameter)
// }

// class TreeInfo {
// 	constructor(height, diameter){
// 		this.height = height;
// 		this.diameter = diameter;
// 	}
// }

// // Do not edit the line below.
// exports.binaryTreeDiameter = binaryTreeDiameter;
// exports.BinaryTree = BinaryTree;

/* Height balanced binary tree */

//  This is an input class. Do not edit.
// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// function heightBalancedBinaryTree(tree) {
// O(n) time | O(h) space
//   if(tree === null) return true

// 	if(Math.abs(maxDepth(tree.left) - maxDepth(tree.right)) > 1) return false

// 	return heightBalancedBinaryTree(tree.left) && heightBalancedBinaryTree(tree.right)
// }

// function maxDepth(tree){
// 	if(tree === null) return 0

// 	const left = maxDepth(tree.left);
// 	const right = maxDepth(tree.right);
// 	return Math.max(left, right) + 1;
// }

// Do not edit the lines below.
// exports.BinaryTree = BinaryTree;
// exports.heightBalancedBinaryTree = heightBalancedBinaryTree;

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

// Validate a BST

// This is an input class. Do not edit.
// class BST {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }

//   function validateBst(tree) {
// O(n) time | O(d) space complexity
//     return validateBstHelper(tree, -Infinity, Infinity)
// }

// function validateBstHelper(tree, minValue, maxValue){
//     if (tree === null) return true;
//     if (tree.value < minValue || tree.value >= maxValue) return false

//     const leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
//     return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue);
// }

// Do not edit the line below.
// exports.BST = BST;
// exports.validateBst = validateBst;

// function binarySearch(array, target) {
// Write your code here.
// return binarySearchHelper(array, target, 0, array.length - 1)
// }

// function binarySearchHelper(array, target, left, right){
//   while (left <= right){
//     const middle = Math.floor((left + right) / 2);
//     const potentialMatch = array[middle];
//   if(target === potentialMatch) return middle
//     else if(target < potentialMatch){
//       right = middle - 1;
//     }else {
//       left = middle + 1;
//     }
//   }
//    return -1
// }

// Do not edit the line below.
// exports.binarySearch = binarySearch;

// function minHeightBst(array) {
// time O(NlogN) | space O(N)
//     return constructMinHeightBst(array, null, 0, array.length - 1)
// }

// function constructMinHeightBst(array, bst, startIdx, endIdx){
//     if (endIdx < startIdx) return;
//     const midIdx = Math.floor((startIdx + endIdx) / 2);

//     const valueToAdd = array[midIdx]
//     if (bst === null){
//         bst = new BST(valueToAdd)
//     }else {
//         bst.insert(valueToAdd)
//     }
//     constructMinHeightBst(array, bst, startIdx, midIdx - 1);
//     constructMinHeightBst(array, bst, midIdx + 1, endIdx);
//     return bst
// }

// This is an input class. Do not edit.
// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//     this.parent = null;
//   }
// }

// function findSuccessor(tree, node) {
// O(n) time | O(1) space.
// const inorderTraversalOrder = getInorderTraversalOrder(tree);

// 	for(let idx = 0; idx < inorderTraversalOrder.length; idx++){
// 		const currentNode = inorderTraversalOrder[idx];
// 		if(currentNode !== node) continue;

// 		if(idx === inorderTraversalOrder.length - 1) return null

// 		return inorderTraversalOrder[idx + 1]
// 	}
// }

// function getInorderTraversalOrder(node, order=[]){
// 	if (node === null) return order;

// 	getInorderTraversalOrder(node.left, order);
// 	order.push(node);
// 	getInorderTraversalOrder(node.right, order);

// 	return order;
// }

// Do not edit the lines below.
// exports.BinaryTree = BinaryTree;
// exports.findSuccessor = findSuccessor;

/* Solve two number sum */
// function twoNumberSum(array, targetSum) {
// O(n) time | O(n) space.
// 	const obj = {}
// 	for(const num of array){
// 		const potentialMatch = targetSum - num;
// 		if (potentialMatch in obj){
// 			return [potentialMatch, num];
// 		}else {
// 			obj[num] = true;
// 		}
// 	}
// 	return []
// }

// Do not edit the line below.
// exports.twoNumberSum = twoNumberSum;

/* solve validate subsequence */

// function isValidSubsequence(array, sequence) {
// O(n) time | O(1) space.
// 	let arrIdx = 0;
// 	let seqIdx = 0;

// 	while(arrIdx < array.length && seqIdx < sequence.length){
// 		if(sequence[seqIdx] === array[arrIdx]) seqIdx++;
// 		arrIdx++
// 	}
// 	return seqIdx == sequence.length
// }

// Do not edit the line below.
// exports.isValidSubsequence = isValidSubsequence;

// function isValidSubsequence(array, sequence) {
// O(n) time | O(1) space.
// 	let seqIdx = 0;
// 	for(const value of array){
// 		if(seqIdx === sequence.length) break;
// 		if(sequence[seqIdx] === value) seqIdx++
// 	}
// 	 return seqIdx == sequence.length
// }

// Do not edit the line below.
// exports.isValidSubsequence = isValidSubsequence;
//

/* solve sorted squared array */

// function sortedSquaredArray(array) {
// O(nlogn) time | O(n) time.
//   const sortedSqArr = new Array(array.length).fill(0);

// 	for(let i = 0; i < array.length; i++){
// 		const value = array[i];
// 		sortedSqArr[i] = value * value;
// 	}
// 	sortedSqArr.sort((a,b) => a - b);
// 	return sortedSqArr;
// }

// Do not edit the line below.
// exports.sortedSquaredArray = sortedSquaredArray;

// function sortedSquaredArray(array) {
// O(n) time | O(n) space.
//   const sortedSqArr = new Array(array.length).fill(0);

// 	let smallestValueIdx = 0;
// 	let largestValueIdx = array.length - 1;
// 	for(let i = array.length - 1; i >= 0; i--){
// 		const smallestValue = Math.abs(array[smallestValueIdx]);
// 		const largestValue = Math.abs(array[largestValueIdx]);
// 		if(smallestValue > largestValue){
// 			sortedSqArr[i] = smallestValue * smallestValue;
// 			smallestValueIdx++;
// 		}else {
// 			sortedSqArr[i] = largestValue * largestValue;
// 			largestValueIdx--;
// 		}
// 	}
// 	 return sortedSqArr;
// }

// Do not edit the line below.
// exports.sortedSquaredArray = sortedSquaredArray;

// function tournamentWinner(competitions, results) {
// O(n) time | O(k) space.
//   const Home_Team_Won = 1;
// 	let currentBestTeam = "";
// 	const scores = {[currentBestTeam]: 0 }

// 	for(let idx = 0; idx < competitions.length; idx++){
// 		const result = results[idx];
// 		const [homeTeam, awayTeam] = competitions[idx];
// 		const winningTeam = result === Home_Team_Won ? homeTeam : awayTeam

// 		updateScores(winningTeam, 3, scores)
// 		if(scores[winningTeam] > scores[currentBestTeam]){
// 			currentBestTeam = winningTeam;
// 		}
// 	}
// 	 return currentBestTeam;
// }

// function updateScores(team, points, scores){
// 	if(!(team in scores)) scores[team] = 0;
// 	scores[team] += points
// }

// // Do not edit the line below.
// exports.tournamentWinner = tournamentWinner;

// function reverseNum(num){
//   return(
//     parseFloat(
//       num.toString().split('').reverse().join('')
//     )
//   )
// }

// console.log(reverseNum(378))

/* Solved tournament winner */
// function tournamentWinner(competitions, results) {
// Write your code here.
//   let currentBestTeam = '';
// 	const scores = {[currentBestTeam]: 0}
// 	const Home_Team_Won = 1;

// 	for(let idx = 0; idx < competitions.length; idx++){
// 		const result = results[idx];
// 		const [homeTeam, awayTeam] = competitions[idx];

// 		const winningTeam = result === Home_Team_Won ? homeTeam : awayTeam
// 		updateScores(winningTeam, 3, scores);

// 		if(scores[winningTeam] > scores[currentBestTeam]){
// 			currentBestTeam = winningTeam
// 		}
// 	}
// 	 return currentBestTeam;
// }

// function updateScores(team, points, scores){
// 	if(!(team in scores)) scores[team] = 0;
// 	scores[team] += points
// }

// Do not edit the line below.
// exports.tournamentWinner = tournamentWinner;

// function binarySearch(array, target) {
//   Write your code here.
//   return binarySearchHelper(array, target, 0, array.length - 1)
// }

// function binarySearchHelper(array, target, left, right){
//   while (left <= right){
//     const middle = Math.floor((left + right) / 2);
//     const potentialMatch = array[middle];
//   if(target === potentialMatch) return middle
//     else if(target < potentialMatch){
//       right = middle - 1;
//     }else {
//       left = middle + 1;
//     }
//   }
//    return -1
// }

// Do not edit the line below.
// exports.binarySearch = binarySearch;

/* Solve three number sum */

// function threeNumberSum(array, targetSum) {
// O(logn^2) time | O(n) space.
// 	const triplets = [];
// 	array.sort((a,b) => a - b);
// 	for(let idx=0; idx < array.length - 2; idx++){
// 		let left = idx+1;
// 		let right = array.length - 1;

// 		while(left < right){
// 			const currentSum = array[idx] + array[left] + array[right];
// 			if(currentSum === targetSum) {
// 				triplets.push([array[idx], array[left], array[right]]);
// 				left++;
// 				right--;
// 			}else if (currentSum < targetSum) {
// 				left++
// 			}else if (currentSum > targetSum) {
// 				right--
// 			}
//   	}
// 	}
// 		return triplets
// }

// // Do not edit the line below.
// exports.threeNumberSum = threeNumberSum;

/* smallest difference */

// function smallestDifference(arrayOne, arrayTwo) {
// O(nlogn + mlogn) time | O(1) space.
// 	arrayOne.sort((a,b) => a - b);
// 	arrayTwo.sort((a,b) => a - b);
// 	let smallest = Infinity
// 	let current  = Infinity
// 	let smallestPair = []
// 	let idxOne = 0;
// 	let idxTwo = 0;
// 	while(idxOne < arrayOne.length && idxTwo < arrayTwo.length){
// 		const firstNum = arrayOne[idxOne];
// 		const secondNum = arrayTwo[idxTwo];
// 		if(firstNum < secondNum){
// 			current = secondNum - firstNum;
// 			idxOne++
// 		}else if(secondNum < firstNum){
// 			current = firstNum - secondNum;
// 			idxTwo++;
// 		}else {
// 			return [firstNum, secondNum]
// 		}

// 		if(smallest > current){
// 			smallest = current
// 			smallestPair = [firstNum, secondNum]
// 		}
// 	}
// 	 return smallestPair;
// }

// Do not edit the line below.
// exports.smallestDifference = smallestDifference;

/* Move element to the end */

// function moveElementToEnd(array, toMove) {
// Write your code here.
// 	let i = 0;
// 	let j = array.length - 1;
// 	while(i < j){
// 		while(i < j && array[j] === toMove)j--
// 		if(array[i] === toMove){
// 			swap(i, j, array);
// 		}
// 		i++
// 	}
// 	 return array
// }

// function swap(i, j, array){
// 	[array[i], array[j]] = [array[j], array[i]]
// }

// Do not edit the line below.
// exports.moveElementToEnd = moveElementToEnd;

/* Kadane's algorithm */

// function kadanesAlgorithm(array) {
// O(n) time | O(1) space.
// 	let maxEndingHere = array[0];
// 	let maxSoFar = array[0];
// 	for(let i=1; i < array.length; i++){
// 		let num = array[i];
// 		maxEndingHere = Math.max(num, maxEndingHere + num);
// 		maxSoFar = Math.max(maxSoFar, maxEndingHere)
// 	}
// 	 return maxSoFar
// }

// Do not edit the line below.
// exports.kadanesAlgorithm = kadanesAlgorithm;

// function isMonotonic(array) {
// O(n) time | O(1) space.
// 	let nonIncreasing = true;
// 	let nonDecreasing = true;

// 	for(let i=1; i < array.length; i++){
// 		if(array[i] > array[i-1]){
// 			nonIncreasing = false
// 		}else if(array[i] < array[i-1]){
// 			nonDecreasing = false
// 		}
// 	}
// 	return nonIncreasing || nonDecreasing

// }

// Do not edit the line below.
// exports.isMonotonic = isMonotonic;

// function spiralTraverse(array) {
// O(n) time | O(n) space
// 	const result = [];
// 	let startRow = 0,
// 			endRow = array.length - 1;
// 	let startCol = 0,
// 			endCol = array[0].length - 1

// 	while (startRow <= endRow && startCol <= endCol){
// 		for(let col = startCol; col <= endCol; col++){
// 			result.push(array[startRow][col])
// 		}
// 		for(let row = startRow + 1; row <= endRow; row++){
// 			result.push(array[row][endCol])
// 		}
// 		for(let col = endCol - 1; col >= startCol; col--){
// 			if(startRow === endRow) break;
// 			result.push(array[endRow][col])
// 		}

// 		for(let row = endRow -1; row > startRow; row--){
// 			if(startCol === endCol) break;
// 			result.push(array[row][startCol])
// 		}

// 		startRow++;
// 		endRow--
// 		startCol++
// 		endCol--
// 	}
// 		return result
// }

// Do not edit the line below.
// exports.spiralTraverse = spiralTraverse;

// function longestPeak(array) {
// O(n) time | O(1) space.
// 	let longestPeakLength = 0;
// 	let i = 1;
// 	while(i < array.length - 1){
// 		const isPeak = array[i-1] < array[i] && array[i+1] < array[i]
// 		if(!isPeak){
// 			i += 1;
// 			continue;
// 		}
// 		let leftIdx = i - 2;
// 		while(leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]){
// 			leftIdx--;
// 		}
// 		 let rightIdx = i + 2;
// 		 while(rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]){
// 			 rightIdx++;
// 		 }

// 		 let currentPeakLength = rightIdx - leftIdx - 1

// 		 longestPeakLength = Math.max(longestPeakLength, currentPeakLength)
// 		 i = rightIdx;
// 	}
// 	 return longestPeakLength;
// }

// Do not edit the line below.
// exports.longestPeak = longestPeak;

/* solve array of products */

// function arrayOfProducts(array) {
//   // O(n^2) time | O(n) space.
// 	const product = [];

// 	for(let i = 0; i < array.length; i++){
// 		 let runningProduct = 1;
// 		for(let j=0; j < array.length; j++){
// 			if(i !== j){
// 				runningProduct *= array[j]
// 			}
// 			product[i] = runningProduct
// 		}

// 	}
// 	 return product;
// }

// Do not edit the line below.
// exports.arrayOfProducts = arrayOfProducts;

// function fizzBuzz(min, max){
//   for(let i=min; i <= max; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//       console.log('FizzBuzz')
//     }else if(i % 5 === 0){
//        console.log('Buzz');
//     }else if (i % 3 === 0){
//       console.log('Fuzz');
//     }else {
//       console.log(i)
//     }
//   }
// }

// console.log(fizzBuzz(1, 100))

/* Solve first duplicate value */
// function firstDuplicateValue(array) {
// O(n^2) time | O(1) space.
//   let minimumSecondIndex = array.length;
// 	for(let i=0; i < array.length; i++){
// 		for(let j=i+1; j < array.length; j++){
// 			if(array[i] === array[j]){
// 				minimumSecondIndex = Math.min(minimumSecondIndex, j)
// 			}
// 		}
// 	}
// 	 if (minimumSecondIndex === array.length) return -1
// 	 return array[minimumSecondIndex];
// }

// function firstDuplicateValue(array) {
// O(n) time | O(n) space.
//   const seen = new Set();
// 	for(const value of array){
// 		if(seen.has(value)) return value
// 		seen.add(value)
// 	}
// 	 return -1
// }

// function firstDuplicateValue(array) {
// O(n) time | O(1) space - where n is the length of the input array.
//   for(const value of array){
// 		const absValue = Math.abs(value)
// 		if(array[absValue - 1] < 0) return absValue
// 		array[absValue - 1] *= -1
// 	}
// 	 return -1
// }

// function mergeOverlappingIntervals(array) {
// O(nlogn) time | O(n) space. Where n is the length of the input array
// 	const sortedArray = array.sort((a,b) => a[0] - b[0]);
// 	const mergedArray = [];
// 	let currentInterval = sortedArray[0];
// 	mergedArray.push(currentInterval);

// 	for(const nextInterval of sortedArray){
// 		const [_, currentIntervalEnd] = currentInterval;
// 		const [nextIntervalStart, nextIntervalEnd] = nextInterval;
// 		if(currentIntervalEnd >= nextIntervalStart){
// 			currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd)

// 		}else{
// 			currentInterval = nextInterval
// 			mergedArray.push(currentInterval)
// 		}
// 	}
// 	 return mergedArray;
// }

// Do not edit the line below.
// exports.mergeOverlappingIntervals = mergeOverlappingIntervals;

// const a = String('11' + 1);
// console.log(
//   a
// )

// function beautifulDays(i, j, k) {
// Write your code here
// loop thru the range from i to j
// i-reverse(i) % k === 0 count += 1
//   let count = 0;
//    for(let idx = i; idx <= j; idx++){
//        if((idx - reverse(idx)) % k === 0){
//            count += 1;
//        }
//    }
//    return count;
// }

// function reverse(index){
//  return parseInt(
//      index.toString().split('').reverse().join('')
//  )
// }

// function twoNumberSum(array, targetSum) {
// O(n^2) time | O(1) space.
// 	for(let i = 0; i < array.length - 1; i++){
// 		for(let j = i+1; j < array.length; j++){
// 			if(array[i] + array[j] === targetSum){
// 				return [array[i], array[j]];
// 			}
// 		}
// 	}
// 	 return [];
// }

// Do not edit the line below.
// exports.twoNumberSum = twoNumberSum;

/* Solved tournament winner */
// function tournamentWinner(competitions, results) {
//   Write your code here.
//   let currentBestTeam = '';
// 	const scores = {[currentBestTeam]: 0}
// 	const Home_Team_Won = 1;

// 	for(let idx = 0; idx < competitions.length; idx++){
// 		const result = results[idx];
// 		const [homeTeam, awayTeam] = competitions[idx];

// 		const winningTeam = result === Home_Team_Won ? homeTeam : awayTeam
// 		updateScores(winningTeam, 3, scores);

// 		if(scores[winningTeam] > scores[currentBestTeam]){
// 			currentBestTeam = winningTeam
// 		}
// 	}
// 	 return currentBestTeam;
// }

// function subarraySort(array) {
//   // O(n) time | O(1) space. Where n is the length of the input array
// 	let minOutOfOrder = Infinity;
// 	let maxOutOfOrder = -Infinity;

// 	for(let i=0; i < array.length; i++){
// 		const num = array[i];
// 		if(isOutOfOrder(i, num, array)){
// 			minOutOfOrder = Math.min(minOutOfOrder, num);
// 			maxOutOfOrder = Math.max(maxOutOfOrder, num);
// 		}
// 	}
// 	if (minOutOfOrder === Infinity) return [-1, -1];

// 	let subArrayLeftIdx = 0;
// 	while(minOutOfOrder >= array[subArrayLeftIdx]){
// 		subArrayLeftIdx++;
// 	}
// 	let subArrayRightIdx = array.length - 1;
// 	while(maxOutOfOrder <= array[subArrayRightIdx]){
// 		subArrayRightIdx--;
// 	}
// 	return [subArrayLeftIdx, subArrayRightIdx];
// }

// function isOutOfOrder(i, num, array){
// 	if(i === 0) return num > array[i+1];
// 	if(i === array.length - 1) return num < array[i-1];
// 	return num > array[i+1] || num < array[i-1]
// }

// Do not edit the line below.
// exports.subarraySort = subarraySort;

// function dictionary(word) {
//   const count = [];
//   for(let i=0; i < word.length; i++){
//     if (word[i].includes(word[i].substr(0, word[i].length - 3)) && word[i].substr(0, word[i].length - 3).length === 4){
//       count.push(word[i].substr(0, word[i].length - 3), word[i])
//     }
//     else if (word[i].includes(word[i].substr(0, word[i].length)) && word[i].substr(0, word[i].length).length === 4){
//       count.push(word[i].substr(0, word[i].length), word[i])
//     }
//     else if ((word[i].substr(0, word[i].length).length === 4) && !(word[i].substr(0, word[i].length))
//     ? word[i].substr(0, word[i].length) = true : false)
//      {
//        count.push(count.push(word[i].substr(1, word[i].length), word[i]) )
//     }

//   }
//    return count;
// }

// const wrd = ['arrows', 'carrots', 'give', 'me']
// console.log(dictionary(wrd))

// function largestRange(array) {
// O(n) time | O(n) space. where n is the length of the input array.
// 	const nums = {};
// 	let bestRange = [];
// 	let longestLength = 0;

// 	for(const num of array){
// 		nums[num] = true;
// 	}
// 	for(const num of array){
// 		if(!nums[num]) continue;
// 		nums[num] = false;
// 		let currentLength = 1;
// 		let left = num - 1;
// 		let right = num + 1;

// 		while(left in nums){
// 			nums[left] = false;
// 			currentLength++;
// 			left--
// 		}
// 		while(right in nums){
// 			nums[right] = false;
// 			currentLength++;
// 			right++
// 		}
// 		if(currentLength > longestLength){
// 			longestLength = currentLength;
// 			bestRange = [left + 1, right - 1];
// 		}
// 	}
// 	 return bestRange;
// }

// // Do not edit the line below.
// exports.largestRange = largestRange;

// function minRewards(scores) {
//   // O(n^2) time | O(n) space. Where n is the length of the input scores
// 	const rewards = scores.map(_ => 1)
// 	for(let i=1; i < scores.length; i++){
// 		let j = i - 1;
// 		if(scores[i] > scores[j]){
// 			rewards[i] = rewards[j] + 1
// 		}else{
// 			while(j >= 0 && scores[j] > scores[j+1]){
// 				rewards[j] = Math.max(rewards[j], rewards[j+1] + 1)
// 				j--
// 			}
// 		}
// 	}
// 	return rewards.reduce((a, b) => a + b)
// }

// // Do not edit the line below.
// exports.minRewards = minRewards;

// function addBinary(a,b){
//   let result = '';
//   let carry = 0;

//   while(a || b || carry){
//     let sum = +a.slice(-1) + +b.slice(-1) + carry;
//     if(sum > 1){
//       result = sum % 2 + result;
//       carry = 1
//     }else{
//       result = sum + result;
//       carry = 0;
//     }
//     a = a.slice(0, -1);
//     b = b.slice(0, -1);
//   }
//   return result;
// }

// let c = "1010";
// let d = "1011";
// console.log(addBinary(c, d))
// Output: "10101"

// a = '1010'

// console.log(a.pop());

// function minRewards(scores) {
// O(n) time | O(n) space.
// 	const rewards = scores.map(_ => 1);
// 	for(let i=1; i < scores.length; i++){
// 		if(scores[i] > scores[i-1]){
// 			rewards[i] = rewards[i-1] + 1
// 		}
// 		for(let i = scores.length - 2; i >= 0; i--){
// 			if(scores[i] > scores[i+1]){
// 				rewards[i] = Math.max(rewards[i], rewards[i+1] + 1)
// 			}
// 		}
// 	}
// 	return rewards.reduce((a,b) => a + b);
// }

// Do not edit the line below.
// exports.minRewards = minRewards;

// function kadanesAlgorithm(array) {
//   O(n) time | O(1) space.
// 	let maxEndingHere = array[0];
// 	let maxSoFar = array[0];
// 	for(let i=1; i < array.length; i++){
// 		let num = array[i];
// 		maxEndingHere = Math.max(num, maxEndingHere + num);
// 		maxSoFar = Math.max(maxSoFar, maxEndingHere)
// 	}
// 	 return maxSoFar
// }

// function sqrt(x){
//   return parseInt(Math.sqrt(x).toString().split('.')[0])
// }

// console.log(sqrt(4))
// 2

// function removeDuplicates(num){
//   let i = 0;
//   let j = i+1;
//   while(j < num.length){
//     if(num[i] !== num[j]){
//       i++;
//       num[i] = num[j]
//     }
//     j++;
//   }
//    return i+1;
// }

// const nums = [6,6,1,1,1,2,2,3,3,4]
// console.log(removeDuplicates(nums))

// function getNthFib(n) {
// O(2^n) time | O(n) space
// 	if (n === 2) {
// 		return 1
// 	}else if(n === 1){
// 		return 0
// 	}else{
// 		return getNthFib(n-1) + getNthFib(n-2)
// 	}
// }
// Do not edit the line below.
// exports.getNthFib = getNthFib;

// This is an input class. Do not edit.
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
// 		currentNode.next = nextDistinctNode;
// 		currentNode = nextDistinctNode;
// 	}
// 	 return linkedList;
// }

// Do not edit the lines below.
// exports.LinkedList = LinkedList;
// exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;

// function meetingPlanner(slotsA, slotsB, dur) {
//   // your code goes here
//   let ia = 0;
//   let ib = 0;

//   while(ia < slotsA.length && ib < slotsB.length){
//     const start = Math.max(slotsA[ia][0], slotsB[ib][0]);
//     const end = Math.min(slotsA[ia][1], slotsB[ib][1]);

//     if(start + dur <= end) return [start, start + dur];

//     slotsA[ia][1] < slotsB[ib][1] ? ia++ : ib++
//   }

//   return [];
// }

// const slotA = [[10, 50], [60, 120], [140, 210]]
// const slotB = [[0, 15], [60, 70]]
// const  dur = 8
// console.log(meetingPlanner(slotA, slotB, dur)) //output: [60, 68]

// const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

// //spreading numbers of the object into an array using the new operator
// console.log([...new Set(numbers)])

// function winningCard(cards) {
//   const uniq = []
//   const flattenCards = cards.flat()
//   console.log(flattenCards)
//   for (let i = 0; i < flattenCards.length; i++) {
//     for (let j = 0; j < flattenCards.length; j++) {
//       if (flattenCards[i] === flattenCards[j] && i !== j) break;
//       if (j === flattenCards.length - 1) uniq.push(flattenCards[i])
//     }
//   }

//   return Math.max(...uniq);
// }

// const cards = [[5, 7, 3, 9, 4, 9, 8, 3, 1], [1, 2, 2, 4, 4, 1], [1, 2, 3]]
// console.log(winningCard(cards)) // 8

// const obj = {
//   "user":
//    {
//       "email": "fadagmail.com",
//       "password": "fada123"
//    }
// }

// console.log(obj.user.email)

// function longestPeak(array) {
//   // O(n) time | O(1) space
//   let i = 1;
//   let longestPeakLength = 0;
//   while (i < array.length - 1) {
//     let isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];
//     if (!isPeak) {
//       i++;
//       continue;
//     }
//     let leftIdx = i - 2;
//     while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
//       leftIdx--;
//     }
//     let rightIdx = i + 2;
//     while (rightIdx < array.length && array[rightIdx] < array[rightIdx - 1]) {
//       rightIdx++;
//     }
//     const currentPeakLength = rightIdx - leftIdx - 1;
//     longestPeakLength = Math.max(longestPeakLength, currentPeakLength);
//     i = rightIdx;
//   }
//   return longestPeakLength;
// }

// const array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];
// console.log(longestPeak(array));

// Valid palindrome
// const validPalindrome = (s) => {
//   if (s === '') return true;
//   const str = s.replace(/[^A-Z0-9]/gi, '').toLowerCase('');
//   const revStr = str.split('').reverse('').join('');
//   if (str === revStr) return true;
//   return false;
// };

// const s = 'A man, a plan, a canal: Panama';

// console.log(validPalindrome(s)); // true

// const findKthLargest = (nums, k) => {
//   return nums.sort((a, b) => b - a)[k - 1];
// };
// const nums = [3, 2, 1, 5, 6, 4];
// const k = 2;

// console.log(findKthLargest(nums, k)); // 5

// var generateParenthesis = function (n) {
//   const res = [];
//   let iterate = (str, open, close) => {
//     if (open > n || close > n || close > open) return;
//     if (str.length === n * 2 && open === close) {
//       res.push(str);
//       return;
//     }
//     iterate(str + '(', open + 1, close);
//     iterate(str + ')', open, close + 1);
//   };
//   iterate('', 0, 0);
//   return res;
// };
// n = 3;
// console.log(generateParenthesis(n)); //["((()))","(()())","(())()","()(())","()()()"]

// function getPermutations(array) {
//   const permutations = [];
//   permutationsHelper(0, array, permutations);
//   return permutations;
// }

// function permutationsHelper(i, array, permutations) {
//   if (i === array.length - 1) {
//     permutations.push(array.slice());
//   } else {
//     for (let j = i; j < array.length; j++) {
//       swap(i, j, array);
//       permutationsHelper(i + 1, array, permutations);
//       swap(i, j, array);
//     }
//   }
// }

// function swap(i, j, array) {
//   [array[i], array[j]] = [array[j], array[i]];
// }

// const array = [1, 2, 3];
// console.log(getPermutations(array));

// function mergeSortedArray(nums1, m, nums2, n) {
//   // O(n) time | O(1) space
//   let count = 0;
//   for (let i = 0; i < nums1.length; i++) {
//     if (i >= m) {
//       nums1.splice(i, 1, nums2[count]);
//       count++;
//     }
//   }
//   return nums1.sort((a, b) => a - b);
// }

// const nums1 = [1, 2, 3, 0, 0, 0],
//   m = 3,
//   nums2 = [2, 5, 6],
//   n = 3;

// console.log(mergeSortedArray(nums1, m, nums2, n)); // [1,2,2,3,5,6]

// function singleNumber(nums) {
//   const set = new Set();
//   for (let i = 0; i < nums.length; i++) {
//     if (set.has(nums[i])) {
//       set.delete(nums[i]);
//     } else {
//       set.add(nums[i]);
//     }
//   }
//   const [index] = set;
//   return index;
// }

// const nums = [4, 1, 2, 1, 2]; // 4
// console.log(singleNumber(nums));

// function sum(arr) {
//   const min = Math.min(arr[0], arr[1]);
//   const max = Math.max(arr[0], arr[1]);
//   let temp = 0;
//   for (let i = min; i <= max; i++) {
//     temp += i;
//   }
//   return temp;
// }

// console.log(sum([1, 4]));
// console.log(sum([4, 1]));

// function factorial(num) {
//   if (num === 0 || num === 1) return 1;
//   return num * factorial(num - 1);
// }

// console.log(factorial(4)); // 24
// console.log(factorial(5)); // 120

// function printFibonacci(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(fibonacci(i));
//   }
// }

// function fibonacci(n) {
//   if (n < 2) return n;
//   return fibonacci(n - 1) + fibonacci(n - 2);
// }
// printFibonacci(2); // returns 0 1
// printFibonacci(7); // returns 0 1 1 2 3 5 8

// function printPrime(min, max) {
//   const isPrime = (n) => {
//     let primeFlag = true;
//     for (let i = 2; i <= n / 2; i++) {
//       if (n % i === 0) {
//         primeFlag = false;
//         break;
//       }
//     }
//     if (primeFlag) console.log(n);
//   };
//   for (let i = min; i <= max; i++) {
//     if (i === 0 || i === 1) {
//       continue;
//     }
//     isPrime(i);
//   }
// }

// printPrime(0, 20); // Returns 2 3 5 7 11 13 17 19

// function isPalindrome(str) {
//   return str === str.split('').reverse().join('');
// }
// console.log(isPalindrome('racecar')); // Returns true

// console.log(isPalindrome('race')); // Returns false

// function isAnagram(str1, str2) {
//   str1 = str1.toLowerCase();
//   str2 = str2.toLowerCase();
//   if (str1.length !== str2.length) return false;
//   return str1.split('').sort().join('') === str2.split('').sort().join('');
// }

// console.log(isAnagram('racecar', 'carrace')); // Returns true

// console.log(isAnagram('racecar', 'carracr')); // Returns false

// function reverseWords(str) {
//   return str.split(/\s+/).reverse().join(' ');
// }
// console.log(reverseWords('Hello World')); // Returns 'World Hello'

// console.log(reverseWords(' This is  a  test string ')); // Returns 'string test a is This'

// function removeVowels(str) {
//   return str.replace(/[aeiou]/gi, '');
// }

// console.log(removeVowels('Hello World')); // Returns Hll Wrld

// function countPalindromicSubstrings(str) {
//   let count = 0;
//   if (!str) return 0;
//   for (let i = 0; i < str.length; i++) {
//     count += countPalindrome(str, i, i); // odd length
//     count += countPalindrome(str, i, i + 1); // even length
//   }
//   return count;
// }

// function countPalindrome(str, left, right) {
//   let count = 0;
//   while (
//     left >= 0 &&
//     right < str.length &&
//     str.charAt(left) === str.charAt(right)
//   ) {
//     count++;
//     left--;
//     right++;
//   }
//   return count;
// }
// console.log(countPalindromicSubstrings('abcd')); // Returns 4 (a, b, c, d)

// console.log(countPalindromicSubstrings('aaa')); // Returns 6 (a, a, a, aa, aa, aaa)

// function fullNames(names) {
//   return names.map((name) => `${name.firstname} ${name.lastname}`);
// }

// const names = [
//   { firstname: 'Bruce', lastname: 'Wayne' },
//   { firstname: 'Clark', lastname: 'Kent' },
// ];

// console.log(fullNames(names)); // - Returns ['Bruce Wayne', 'Clark Kent']

// function longestWord(str) {
//   const longestStr = str.split(' ');
//   return longestStr.reduce((acc, curr) => {
//     return acc.length >= curr.length ? acc : curr;
//   }, '');
// }

// console.log(longestWord('My name is Vishwas')); // - Returns 'Vishwas'

// console.log(longestWord('Hello world')); //- Returns 'Hello'

// function myArrayWithNoDuplicates(myArray) {
//   return myArray.reduce((acc, curr) => {
//     return !acc.includes(curr) ? [...acc, curr] : acc;
//   }, []);
// }

// const myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];

// console.log(myArrayWithNoDuplicates(myArray));

// postgres://rails_api_user:sMZt1CoqElWXw9F1nxHzH5hnW9X8nuSh@dpg-cgbgfqg2qv267u8jfahg-a/rails_api

// function createArray(nums, index) {
//   const target = [];
//   for (let i = 0; i < nums.length; i++) {
//     target.splice(index[i], 0, nums[i]);
//   }
//   return target;
// }

// const nums = [0, 1, 2, 3, 4];
// const index = [0, 1, 2, 2, 1];

// console.log(createArray(nums, index)); // Returns [0,4,1,3,2]

// function union(arr1, arr2) {
//   return [...arr1, ...arr2];
// }
// const arr1 = [1, 2, 3];
// const arr2 = [2, 3, 4];

// console.log(union(arr1, arr2)); // Returns [1, 2, 3, 2, 3, 4]

// function intersection(arr1, arr2) {
//   return arr1.filter((item) => arr2.includes(item));
// }

// console.log(intersection(arr1, arr2)); // Returns [2, 3]

// function difference(arr1, arr2) {
//   return arr1.filter((item) => !arr2.includes(item));
// }

// function difference(arr2, arr1) {
//   return arr2.filter((item) => !arr1.includes(item));
// }

// console.log(difference(arr1, arr2)); // Returns [1]

// console.log(difference(arr2, arr1)); // Returns [4]

// function symmetricDifference(arr1, arr2) {
//   return arr1
//     .filter((item) => !arr2.includes(item))
//     .concat(arr2.filter((item) => !arr1.includes(item)));
// }
// console.log(symmetricDifference(arr1, arr2)); // Returns [1, 4]

// npx eslint "**/*.{js,jsx}"

// function flattenArray(arr) {
//   return arr.flat(3);
// }

// function flattenArray(arr) {
//   return arr.reduce(
//     (acc, curr) =>
//       Array.isArray(curr) ? acc.concat(flattenArray(curr)) : acc.concat(curr),
//     []
//   );
// }

// const arr = [1, [2], [3, [[4]]]];

// console.log(flattenArray(arr)); // Returns [1, 2, 3, 4]

// function findDuplicate(arr) {
//   const set = new Set();
//   for (let i = 0; i < arr.length; i++) {
//     if (set.has(arr[i])) {
//       return arr[i];
//     } else {
//       set.add(arr[i]);
//     }
//   }
// }

// const arr = [2, 4, 6, 8, 2];

// console.log(findDuplicate(arr)); // Returns 2

// function nonRepeatingWords(str1, str2) {
//   const map = new Map();
//   const result = [];
//   const str = str1 + ' ' + str2;
//   str.split(' ').forEach((word) => {
//     map.has(word) ? map.set(word, map.get(word) + 1) : map.set(word, 1);
//   });
//   for (const [key, val] of map) {
//     if (val === 1) result.push(key);
//   }
//   return result;
// }

// const str1 = 'Hello world';
// const str2 = 'Hello Vishwas';

// console.log(nonRepeatingWords(str1, str2)); // Returns ['world', 'Vishwas']

// const str3 = 'Hello Hello';
// const str4 = 'Welcome Vishwas';
// console.log(nonRepeatingWords(str3, str4)); // Returns ['Welcome', 'Vishwas']

// function longestPalindrome(str) {
//   const set = new Set();
//   let length = 0;
//   for (const c of str) {
//     if (set.has(c)) {
//       set.delete(c);
//       length++;
//     } else {
//       set.add(c);
//     }
//   }
//   if (set.size) {
//     return 2 * length + 1;
//   } else {
//     return 2 * length;
//   }
// }

// console.log(longestPalindrome('abccccdd')); // Returns 7 ('dccaccd')

// function longestSubstringLength(str) {
//   const set = new Set();
//   let i = 0;
//   let j = 0;
//   let max = 0;
//   while (i < str.length) {
//     if (!set.has(str.charAt(i))) {
//       set.add(str.charAt(i++));
//       max = Math.max(max, set.size);
//     } else {
//       set.delete(str.charAt(j++));
//     }
//   }
//   return max;
// }

// console.log(longestSubstringLength('abcabcbd')); // Returns 3 ('abc')

// console.log(longestSubstringLength('aaaa')); // Returns 1 ('a')

// console.log(longestSubstringLength('abbcdb')); // Returns 3 ('bcd')

// function groupAnagrams(arr) {
//   const map = new Map();
//   for (const word of arr) {
//     const key = [...word].sort().join('');
//     if (!map.has(key)) {
//       map.set(key, [word]);
//     } else {
//       let curr = map.get(key);
//       map.set(key, [...curr, word]);
//     }
//   }
//   return map.values();
// }

// const arr = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];

// console.log(groupAnagrams(arr)); // Groups into ["ate","eat","tea"], ["nat","tan"], ["bat"]

// function searchRange(nums, target) {
//   let left = 0;
//   let right = nums.length - 1;
//   let output = [-1, -1];
//   while (left < right) {
//     let mid = Math.floor((left + right) / 2);
//     if (nums[mid] < target) {
//       left = mid + 1;
//     } else {
//       right = mid;
//     }
//   }
//   if (nums[left] !== target) return output;
//   output[0] = left;
//   right = nums.length - 1;
//   while (left < right) {
//     let mid = Math.floor((left + right) / 2 + 1);
//     if (nums[mid] <= target) {
//       left = mid;
//     } else {
//       right = mid - 1;
//     }
//   }
//   output[1] = right;
//   return output;
// }

// const nums = [5, 7, 7, 8, 8, 10];
// const target = 8;

// console.log(searchRange(nums, target));

// function quickSort(array) {
//   quickSortHelper(array, 0, array.length - 1);
//   return array;
// }
// function quickSortHelper(array, startIdx, endIdx) {
//   if (startIdx >= endIdx) return;
//   const pivotIdx = startIdx;
//   let leftIdx = startIdx + 1;
//   let rightIdx = endIdx;
//   while (leftIdx <= rightIdx) {
//     if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
//       swap(leftIdx, rightIdx, array);
//     }
//     if (array[leftIdx] <= array[pivotIdx]) leftIdx++;
//     if (array[rightIdx] >= array[pivotIdx]) rightIdx--;
//   }
//   swap(pivotIdx, rightIdx, array);
//   const isSmallestSubarray = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1);
//   if (isSmallestSubarray) {
//     quickSortHelper(array, startIdx, rightIdx - 1);
//     quickSortHelper(array, rightIdx + 1, endIdx);
//   } else {
//     quickSortHelper(array, rightIdx + 1, endIdx);
//     quickSortHelper(array, startIdx, rightIdx - 1);
//   }
// }
// function swap(i, j, array) {
//   const temp = array[i];
//   array[i] = array[j];
//   array[j] = temp;
// }

// const array = [8, 5, 2, 9, 5, 6, 3];
// console.log(quickSort(array)); // [2, 3, 5, 5, 6, 8, 9]

// function findKthLargest(nums, k) {
//   const position = k - 1;
//   return quickselect(nums, 0, nums.length - 1, position);
// }

// function quickselect(nums, startIdx, endIdx, position) {
//   while (true) {
//     if (startIdx > endIdx) {
//       throw new Error("This code shouldn't get here");
//     }
//     const pivotIdx = startIdx;
//     let leftIdx = startIdx + 1;
//     let rightIdx = endIdx;
//     while (leftIdx <= rightIdx) {
//       if (nums[leftIdx] < nums[pivotIdx] && nums[rightIdx] > nums[pivotIdx]) {
//         swap(leftIdx, rightIdx, nums);
//       }
//       if (nums[leftIdx] >= nums[pivotIdx]) leftIdx++;
//       if (nums[rightIdx] <= nums[pivotIdx]) rightIdx--;
//     }
//     swap(pivotIdx, rightIdx, nums);
//     if (rightIdx === position) {
//       return nums[rightIdx];
//     } else if (rightIdx < position) {
//       startIdx = rightIdx + 1;
//     } else {
//       endIdx = rightIdx - 1;
//     }
//   }
// }

// function swap(i, j, nums) {
//   const temp = nums[i];
//   nums[i] = nums[j];
//   nums[j] = temp;
// }

// const nums1 = [3, 2, 1, 5, 6, 4];

// const k1 = 2;
// const nums2 = [3, 2, 3, 1, 2, 4, 5, 5, 6];
// const k2 = 4;
// console.log(findKthLargest(nums1, k1)); // 5
// console.log(findKthLargest(nums2, k2)); // 4

// function binarySearch(array, target) {
//   // O(logn) time | O(1) space
//   let left = 0;
//   let right = array.length - 1;
//   while (left <= right) {
//     const middle = Math.floor((left + right) / 2);
//     const potentialMatch = array[middle];
//     if (target === potentialMatch) {
//       return middle;
//     } else if (target < potentialMatch) {
//       right = middle - 1;
//     } else {
//       left = middle + 1;
//     }
//   }
//   return -1;
// }

// const array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
// const target = 33;
// console.log(binarySearch(array, target)); // 3

// function searchRange(nums, target) {
//   // O(logn) time | O(1) space
//   const finalRange = [-1, -1];
//   searchRangeHelper(nums, target, 0, nums.length - 1, finalRange, true);
//   searchRangeHelper(nums, target, 0, nums.length - 1, finalRange, false);
//   return finalRange;
// }

// function searchRangeHelper(nums, target, left, right, finalRange, goLeft) {
//   while (left <= right) {
//     const mid = Math.floor((left + right) / 2);
//     if (target < nums[mid]) {
//       right = mid - 1;
//     } else if (target > nums[mid]) {
//       left = mid + 1;
//     } else {
//       if (goLeft) {
//         if (mid === 0 || nums[mid - 1] !== target) {
//           finalRange[0] = mid;
//           return;
//         } else {
//           right = mid - 1;
//         }
//       } else {
//         if (mid === nums.length - 1 || nums[mid + 1] !== target) {
//           finalRange[1] = mid;
//           return;
//         } else {
//           left = mid + 1;
//         }
//       }
//     }
//   }
// }

// const nums = [5, 7, 7, 8, 8, 10];
// const target = 8;
// console.log(searchRange(nums, target)); // [3, 4]

// function generateParenthesis(n) {
//   const res = [];
//   const iterate = (str, open, close) => {
//     if (open > n || close > n || close > open) return;
//     if (str.length === n * 2 && close === open) {
//       res.push(str);
//       return;
//     }
//     iterate(str + '(', open + 1, close);
//     iterate(str + ')', open, close + 1);
//   };
//   iterate('', 0, 0);
//   return res;
// }
// const n = 3;
// console.log(generateParenthesis(n));

// function canCompleteCircuit(gas, cost) {
//   let start = gas.length - 1;
//   let end = 0;
//   let gasInTank = gas[start] - cost[start];
//   while (start >= end) {
//     if (gasInTank >= 0) {
//       gasInTank += gas[end] - cost[end];
//       end++;
//     } else {
//       start--;
//       gasInTank += gas[start] - cost[start];
//     }
//   }
//   return gasInTank >= 0 ? start : -1;
// }
// const gas = [1, 2, 3, 4, 5];
// const cost = [3, 4, 5, 1, 2];
// console.log(canCompleteCircuit(gas, cost));

// function canFinish(numCourses, prerequisites) {
//   let adjList = {};
//   let visited = new Set();

//   for (let [a, b] of prerequisites) {
//     if (!adjList[a]) {
//       adjList[a] = [b];
//     } else {
//       adjList[a].push(b);
//     }
//   }

//   function dfs(curr) {
//     if (visited.has(curr)) return false;
//     if (adjList[curr] === []) return true;
//     visited.add(curr);

//     if (adjList[curr]) {
//       for (let neigh of adjList[curr]) {
//         if (!dfs(neigh)) {
//           return false;
//         }
//       }
//     }
//     visited.delete(curr);
//     adjList[curr] = [];

//     return true;
//   }

//   for (let key in adjList) {
//     if (!dfs(key)) {
//       return false;
//     }
//   }
//   return true;
// }

// function canFinish(numCourses, prerequisites) {
//   // initialize an adjList and inDegree array
//   const adjList = Array.from({ length: numCourses }, () => []);
//   const inDegree = Array(numCourses).fill(0);
//   // populate the adjList and inDegree array
//   for (const [course, prereq] of prerequisites) {
//     adjList[prereq].push(course);
//     inDegree[course]++;
//   }
//   // initialize a queue with virtices with inDegree 0
//   const queue = [];
//   for (let i = 0; i < numCourses; i++) {
//     if (inDegree[i] === 0) {
//       queue.push(i);
//     }
//   }
//   // process the virtices in the queue
//   let count = 0;
//   while (queue.length > 0) {
//     const vertex = queue.shift();
//     count++;
//     for (const neighbor of adjList[vertex]) {
//       inDegree[neighbor]--;
//       if (inDegree[neighbor] === 0) {
//         queue.push(neighbor);
//       }
//     }
//   }
//   // check if count === numCourses and return it.
//   return count === numCourses;
// }
// const numCourses1 = 2;
// const prerequisites1 = [[1, 0]];
// console.log(canFinish(numCourses1, prerequisites1)); // true

// const numCourses2 = 2;
// const prerequisites2 = [
//   [1, 0],
//   [0, 1],
// ];
// console.log(canFinish(numCourses2, prerequisites2)); // false

// function sum(arr) {
//   const min = Math.min(arr[0], arr[1]);
//   const max = Math.max(arr[0], arr[1]);
//   let temp = 0;
//   for (let i = min; i <= max; i++) {
//     temp += i;
//   }
//   return temp;
// }

// console.log(sum([1, 4])); // Returns 10

// console.log(sum([4, 1])); // Returns 10

/*Give an integer (num), find the factorial of that integer.

If the integer is represented as num, the factorial of num is the product of all positive integers less than or equal to num.

Example

Factorial of 4 = 4 * 3 * 2 * 1

Factorial of 4 = 24
*/

// function factorial(num) {
//   if (num === 0 || num === 1) return 1;
//   return num * factorial(num - 1);
// }

// console.log(factorial(0)); // Returns 1 (We're not going to understand the math behind this)
// console.log(factorial(1)); // Returns 1
// console.log(factorial(4)); // Returns 24
// console.log(factorial(5)); // Returns 120

// Given two numbers min and max, find all the prime numbers in the range of min to max. (min and max included)

// function printPrime(min, max) {
//   const primes = [];
//   for (let num = min; num <= max; num++) {
//     let isPrime = true;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         console.log(i);
//         isPrime = false;
//         break;
//       }
//     }
//     if (isPrime && num >= 2) primes.push(num);
//   }
//   return primes;
// }

// console.log(printPrime(0, 20)); // Returns 2 3 5 7 11 13 17 19

/*Given a string (str), determine if it is a palindrome.

Note: A plaindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam.
*/

// function isPalindrome(str) {
//   return str === str.split('').reverse().join('');
// }

// console.log(isPalindrome('racecar')); // Returns true

// console.log(isPalindrome('race')); // Returns false

// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   return str1.split('').sort().join('') === str2.split('').sort().join('');
// }

// console.log(isAnagram('racecar', 'carrace')); // Returns true

// console.log(isAnagram('racecar', 'carracr')); // Returns false

// function reverseStr(str) {
//   const strArr = str.split('');
// let result = '';
// for (let i = strArr.length - 1; i >= 0; i--) {
//   result += strArr[i];
// }
// return result;
//   return strArr.reduce((x, y) => y + x);
// }

// const str = 'mango';
// console.log(reverseStr(str));

// function reverseWords(str) {
//   return str.split(' ').reduce((x, y) => y + ' ' + x);
// }

// console.log(reverseWords('Hello World')); // Returns 'World Hello'

// console.log(reverseWords(' This is  a  test string ')); // Returns 'string test a is This'

// function removeVowels(str) {
//   return str.replace(/[aeiou]/gi, '');
// }

// console.log(removeVowels('Hello World')); // Returns Hll Wrld

// Given a string str, return the number of palindromic substrings in str.

// Note: The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

// function countPalindromicSubstrings(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i; j < str.length; j++) {
//       const sub = str.substring(i, j + 1);
//       if (isPalindrome(sub)) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

// function isPalindrome(str) {
//   return str === str.split('').reverse().join('');
// }

// console.log(countPalindromicSubstrings('abcd')); // Returns 4 (a, b, c, d)

// console.log(countPalindromicSubstrings('aaa')); // Returns 6 (a, a, a, aa, aa, aaa)

// Given an array (names) of objects where each object contains the firstname and lastname of a person, return an array that contains the fullname of each person.

// function fullNames(names) {
//   const fullNames = names.map((name) => Object.values(name).join(' '));

//   return fullNames;
// }

// const names = [
//   { firstname: 'Bruce', lastname: 'Wayne' },
//   { firstname: 'Clark', lastname: 'Kent' },
// ];

// console.log(fullNames(names)); // Returns ['Bruce Wayne', 'Clark Kent']

// Given a string (str), find the longest word in the string.

// Note: If one more more words have the same length, return the first occuring word of the same length.

// function longestWord(str) {
//   const strArr = str.split(' ');
// let longestStr = '';
// for (let i = 0; i < strArr.length; i++) {
//   const word = strArr[i];
//   if (word.length > longestStr.length) {
//     longestStr = word;
//   }
// }
//   const longestStr = strArr.reduce((acc, curr) => {
//     return acc.length >= curr.length ? acc : curr;
//   }, '');
//   return longestStr;
// }

// console.log(longestWord('My name is Vishwas')); // Returns 'Vishwas'

// console.log(longestWord('Hello world')); // Returns 'Hello'

// Given two arrays (arr1) and (arr2) return the union, intersection, difference and symmetric difference of the two arrays.
// const arr1 = [1, 2, 3];
// const arr2 = [2, 3, 4];

// function union(arr1, arr2) {
//   return arr1.concat(arr2);
// }

// console.log(union(arr1, arr2)); // Returns [1, 2, 3, 2, 3, 4]
// function intersection(arr1, arr2) {
//   return arr1.filter((item) => arr2.includes(item));
// }
// console.log(intersection(arr1, arr2)); // Returns [2, 3]
// function difference(arr1, arr2) {
//   return arr1.filter((item) => !arr2.includes(item));
// }
// console.log(difference(arr1, arr2)); // Returns [1]
// console.log(difference(arr2, arr1)); // Returns [4]
// function symmetricDifference(arr1, arr2) {
//   return arr1
//     .filter((item) => !arr2.includes(item))
//     .concat(arr2.filter((item) => !arr1.includes(item)));
// }
// console.log(symmetricDifference(arr1, arr2)); // Returns [1, 4]

/*Given two arrays of integers (nums) and (index), create and return a new array (arr) which satisfies the following rules:

Initially array (arr) is empty.

From left to right read nums[i] and index[i] and insert at index index[i] the value nums[i] in array (arr) .

Repeat the previous step until there are no elements to read in nums and index.
*/

// function createArray(nums, index) {
//   const target = [];
//   for (let i = 0; i < nums.length; i++) {
//     target.splice(index[i], 0, nums[i]);
//   }
//   return target;
// }

// const nums = [0, 1, 2, 3, 4];
// const index = [0, 1, 2, 2, 1];

// console.log(createArray(nums, index)); // Returns [0,4,1,3,2]

// Given a nested array (arr), return the flattened array.

// function flattenArray(arr) {
//   return arr.flat(Infinity);
// }

// const arr = [1, [2], [3, [[4]]]];

// console.log(flattenArray(arr)); // Returns [1, 2, 3, 4]

// Given an array (arr) of elements, one element in the array occurs twice. Find the element.

function findDuplicate(arr) {
  const set = new Set();
  for (const num of arr) {
    if (set.has(num)) {
      return num;
    } else {
      set.add(num);
    }
  }
}

const arr = [2, 4, 6, 8, 2];

console.log(findDuplicate(arr)); // Returns 2
