// /* Insert, search and delete a BST  */


// // Do not edit the class below except for
// // the insert, contains, and remove methods.
// // Feel free to add new properties and methods
// // to the class.
// class BST {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
  
//     insert(value) {
//       // Average case: O(logn) time | O(logn) space.
//       // Worst case: O(logn) time | O(logn) space.
//           if (value < this.value){
//               if (this.left === null){
//                   this.left = new BST(value)
//               }else {
//                   this.left.insert(value)
//               }
//           }else {
//               if (this.right === null){
//                   this.right = new BST(value)
//               }else{
//                   this.right.insert(value)
//               }
//           }
//       return this;
//     }
//     contains(value) {
//         // Average case: O(logn) time | O(logn) space.
//         // Worst case: O(logn) time | O(logn) space.
//             if (value < this.value){
//                 if (this.left === null){
//                     return false
//                 }else{
//                     return this.left.contains(value)
//                 }
//             }else if (value > this.value){
//                 if (this.right === null){
//                     return false;
//                 }else{
//                     return this.right.contains(value)
//                 }
//             }else {
//                 return true
//             }
//       }

//       remove(value, parent = null) {
//         // Average case: O(logn) time | O(logn) space.
//         // Worst case: O(logn) time | O(logn) space.d.
//             if (value < this.value){
//                 if (this.left !== null){
//                     this.left.remove(value, this)
//                 }
//             }else if (value > this.value){
//                 if (this.right !== null){
//                     this.right.remove(value, this)
//                 }
//             }else {
//                 if (this.left !== null && this.right !== null){
//                     this.value = this.right.getMinValue();
//                     this.right.remove(this.value, this)
//                 }else if (parent === null){
//                     if (this.left !== null){
//                         this.value = this.left.value;
//                         this.right = this.left.right;
//                         this.left = this.left.left;
//                     }else if (this.right !== null){
//                         this.value = this.right.value;
//                         this.left = this.right.left;
//                         this.right = this.right.right;
//                     }
//                 }else if (parent.left === this){
//                     parent.left = this.left !== null ? this.left : this.right;
//                 }else if (parent.right === this){
//                     parent.right = this.left !== null ? this.left : this.right;
//                 }
//             }
//         return this;
//       }
            
//         getMinValue(){
//             if (this.left === null){
//                 return this.value;
//             }else {
//                 return this.left.getMinValue();
//             }
//         }	
//     }

    

// // Validate a BST

// // This is an input class. Do not edit.
// class BST {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   function validateBst(tree) {
//     // O(n) time | O(d) space complexity
//       return validateBstHelper(tree, -Infinity, Infinity)
//   }
  
//   function validateBstHelper(tree, minValue, maxValue){
//       if (tree === null) return true;
//       if (tree.value < minValue || tree.value >= maxValue) return false
      
//       const leftIsValid = validateBstHelper(tree.left, minValue, tree.value);
//       return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue);
//   }
  
//   // Do not edit the line below.
//   exports.BST = BST;
//   exports.validateBst = validateBst;
  

//   /* BST traversal */

//   function inOrderTraverse(tree, array) {
//     // time O(n) | space O(n).
//       if (tree !== null){
//           inOrderTraverse(tree.left, array);
//           array.push(tree.value);
//           inOrderTraverse(tree.right, array);
//       }
//       return array;
//   }
  
//   function preOrderTraverse(tree, array) {
//     // time O(n) | space O(n).
//       if (tree !== null){
//           array.push(tree.value);
//           preOrderTraverse(tree.left, array);
//           preOrderTraverse(tree.right, array);
//       }
//       return array;
//   }
  
//   function postOrderTraverse(tree, array) {
//     // time O(n) | space O(n).
//       if (tree !== null){
//           postOrderTraverse(tree.left, array);
//           postOrderTraverse(tree.right, array);
//           array.push(tree.value);
//       }
//       return array;
//   }
  
//   // Do not edit the lines below.
//   exports.inOrderTraverse = inOrderTraverse;
//   exports.preOrderTraverse = preOrderTraverse;
//   exports.postOrderTraverse = postOrderTraverse;


//   /* finding minHeightBst */

//   // solution 1: Non Optimize code

//   function minHeightBst(array) {
//     // time O(NlogN) | space O(N)
//       return constructMinHeightBst(array, null, 0, array.length - 1)
//   }
  
//   function constructMinHeightBst(array, bst, startIdx, endIdx){
//       if (endIdx < startIdx) return;
//       const midIdx = Math.floor((startIdx + endIdx) / 2);
      
//       const valueToAdd = array[midIdx]
//       if (bst === null){
//           bst = new BST(valueToAdd)
//       }else {
//           bst.insert(valueToAdd)
//       }
//       constructMinHeightBst(array, bst, startIdx, midIdx - 1);
//       constructMinHeightBst(array, bst, midIdx + 1, endIdx);
//       return bst
//   }
  
//   class BST {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
  
//     insert(value) {
//       if (value < this.value) {
//         if (this.left === null) {
//           this.left = new BST(value);
//         } else {
//           this.left.insert(value);
//         }
//       } else {
//         if (this.right === null) {
//           this.right = new BST(value);
//         } else {
//           this.right.insert(value);
//         }
//       }
//     }
//   }
  
//   // Do not edit the line below.
//   exports.minHeightBst = minHeightBst;

  
//   // solution 2, using manual insertion
//   function minHeightBst(array) {
//     // time O(N) | space O(N);
//       return constructMinHeightBst(array, null, 0, array.length - 1)
//   }
  
//   function constructMinHeightBst(array, bst, startIdx, endIdx){
//       if (endIdx < startIdx) return
      
//       const midIdx = Math.floor((startIdx + endIdx) / 2);
//       const newBstNode = new BST(array[midIdx])
      
//       if (bst === null){
//           bst = newBstNode
//       }else {
//           if (array[midIdx] < bst.value){
//               bst.left = newBstNode;
//               bst = bst.left;
//           }else{
//               bst.right = newBstNode;
//               bst = bst.right;
//           }
//       }
      
//       constructMinHeightBst(array, bst, startIdx, midIdx - 1);
//       constructMinHeightBst(array, bst, midIdx + 1, endIdx)
      
//       return bst
//   }
  
//   class BST {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
  
//     insert(value) {
//       if (value < this.value) {
//         if (this.left === null) {
//           this.left = new BST(value);
//         } else {
//           this.left.insert(value);
//         }
//       } else {
//         if (this.right === null) {
//           this.right = new BST(value);
//         } else {
//           this.right.insert(value);
//         }
//       }
//     }
//   }
  
//   // Do not edit the line below.
//   exports.minHeightBst = minHeightBst;
  

//   // solution 3: refactor solution, same optimization with solution 2
//   function minHeightBst(array) {
//     // time O(N) | space O(N)
//       return constructMinHeightBst(array, 0, array.length - 1);
  
//   }
  
//   function constructMinHeightBst(array, startIdx, endIdx){
//       if (endIdx < startIdx) return null
      
//       const midIdx = Math.floor((startIdx + endIdx) / 2);
//       const bst = new BST(array[midIdx]);
      
//       bst.left = constructMinHeightBst(array, startIdx, midIdx - 1);
//       bst.right = constructMinHeightBst(array, midIdx + 1, endIdx);
//       return bst
//   }
  
//   class BST {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
  
//     insert(value) {
//       if (value < this.value) {
//         if (this.left === null) {
//           this.left = new BST(value);
//         } else {
//           this.left.insert(value);
//         }
//       } else {
//         if (this.right === null) {
//           this.right = new BST(value);
//         } else {
//           this.right.insert(value);
//         }
//       }
//     }
//   }
  
//   // Do not edit the line below.
//   exports.minHeightBst = minHeightBst;



//   /* Find Kth largest value in BST */
// // Non optimal value using brute force approach

// // This is an input class. Do not edit.
// class BST {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   function findKthLargestValueInBst(tree, k) {
//     // time O(n) | space O(n)
//     const sortedNodeValues = [];
//       inorderTraverse(tree, sortedNodeValues);
//       return sortedNodeValues[sortedNodeValues.length - k];
//   }
  
//   function inorderTraverse(node, sortedNodeValues){
//       if (node === null) return
      
//       inorderTraverse(node.left, sortedNodeValues);
//       sortedNodeValues.push(node.value);
//       inorderTraverse(node.right, sortedNodeValues);
//   }
  
//   // Do not edit the lines below.
//   exports.BST = BST;
//   exports.findKthLargestValueInBst = findKthLargestValueInBst;

  
  
//   // optimal approach by tracking the values

//   // This is an input class. Do not edit.
// class BST {
//     constructor(value) {
//       this.value = value;
//       this.left = null;
//       this.right = null;
//     }
//   }
  
//   class TreeInfo{
//       constructor(numbersOfNodesVisited, latestNodeValueVisited){
//           this.numbersOfNodesVisited = numbersOfNodesVisited;
//           this.latestNodeValueVisited = latestNodeValueVisited;
//       }
//   }
  
//   function findKthLargestValueInBst(tree, k) {
//     // time O(h + k), where h is the depth of Bst branch | space )(h) 
//     const treeInfo = new TreeInfo(0, -1);
//       reverseInorderTraverse(tree, k, treeInfo);
//       return treeInfo.latestNodeValueVisited;
//   }
  
//   function reverseInorderTraverse(node, k, treeInfo){
//       if (node === null || treeInfo.numbersOfNodesVisited >= k) return
      
//       reverseInorderTraverse(node.right, k, treeInfo);
      
//       if(treeInfo.numbersOfNodesVisited < k){
//           treeInfo.numbersOfNodesVisited++
//           treeInfo.latestNodeValueVisited = node.value;
//           reverseInorderTraverse(node.left, k, treeInfo)
//       }
//   }
  
//   // Do not edit the lines below.
//   exports.BST = BST;
//   exports.findKthLargestValueInBst = findKthLargestValueInBst;
  

  

//   /* Reconstruct BST */

//   // This is an input class. Do not edit.
// class BST {
//     constructor(value, left = null, right = null) {
//       this.value = value;
//       this.left = left;
//       this.right = right;
//     }
//   }
  
//   function reconstructBst(preOrderTraversalValues) {
//     // time O(n^2) | space O(h)
//     if (preOrderTraversalValues.length === 0) return null;
      
//       const currentValue = preOrderTraversalValues[0]
//       let rightNodeRootIdx = preOrderTraversalValues.length;
      
//       for(let idx = 1; idx < preOrderTraversalValues.length; idx++){
//           const value = preOrderTraversalValues[idx]
//           if (value >= currentValue){
//               rightNodeRootIdx = idx;
//               break;
//           }
//       }
      
//       const leftSubtree = reconstructBst(preOrderTraversalValues.slice(1, rightNodeRootIdx));
//       const rightSubtree = reconstructBst(preOrderTraversalValues.slice(rightNodeRootIdx));
//       return new BST(currentValue, leftSubtree, rightSubtree);
//   }
  
//   // Do not edit the lines below.
//   exports.BST = BST;
//   exports.reconstructBst = reconstructBst;




//   /* Find a successor */

//   // This is an input class. Do not edit.
// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//     this.parent = null;
//   }
// }

// function findSuccessor(tree, node) {
//   // O(n) time | O(n) space.
//   const inOrderTraversalOrder = getInOrderTraversalOrder(tree);
	
// 	for(let idx=0; idx < inOrderTraversalOrder.length; idx++){
// 		const currentNode = inOrderTraversalOrder[idx];
// 		if(currentNode !== node) continue
		
// 		if(idx === inOrderTraversalOrder.length - 1) return null
		
// 		return inOrderTraversalOrder[idx + 1];
// 	}
// }

// function getInOrderTraversalOrder(node, order=[]){
// 	if(node === null) return order
	
// 	getInOrderTraversalOrder(node.left, order);
// 	order.push(node);
// 	getInOrderTraversalOrder(node.right, order);
	
// 	return order
// }

// // Do not edit the lines below.
// exports.BinaryTree = BinaryTree;
// exports.findSuccessor = findSuccessor;

  


// /* Height balanced binary tree */

// // This is an input class. Do not edit.
// class BinaryTree {
//   constructor(value) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }

// function heightBalancedBinaryTree(tree) {
//   // O(n) time | O(h) space
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

// // Do not edit the lines below.
// exports.BinaryTree = BinaryTree;
// exports.heightBalancedBinaryTree = heightBalancedBinaryTree;


// /* Max subset sum No adjacent */

// function maxSubsetSumNoAdjacent(array) {
//   // O(n) time | O(n) space.
	
// 	if(!array.length) return 0
// 	if(array.length === 1) return array[0];
	
// 	const maxSums = array.slice();
// 	maxSums[1] = Math.max(maxSums[0], maxSums[1]);
	
// 	for(let i = 2; i < array.length; i++){
// 		maxSums[i] = Math.max(maxSums[i-1], maxSums[i-2] + array[i]);
// 	}
// 	return maxSums[maxSums.length - 1];
	
// }

// // Do not edit the line below.
// exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;



// function maxSubsetSumNoAdjacent(array) {
//   // O(n) time | O(1) space.
	
// 	if(!array.length) return 0;
// 	if(array.length === 1) return array[0];
	
// 	let second = array[0];
// 	let first = Math.max(array[0], array[1]);
	
// 	for(let i=2; i < array.length; i++){
// 		const current = Math.max(first, second + array[i])
// 		second = first
// 		first = current
// 	}
// 	return first
// }

// // Do not edit the line below.
// exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;




// /* Numbers of ways to make change */

// function numberOfWaysToMakeChange(n, denoms) {
//   // O(nd) time | O(n) space
// 	const ways = new Array(n+1).fill(0);
// 	ways[0] = 1;
// 	for(const denom of denoms){
// 		for(let amount=0; amount < n+1; amount++){
// 			if(denom <= amount){
// 				ways[amount] += ways[amount - denom]
// 			}
// 		}
// 	}
// 	return ways[n];
// }

// // Do not edit the line below.
// exports.numberOfWaysToMakeChange = numberOfWaysToMakeChange;




// /* Min Number of coins for change */

// function minNumberOfCoinsForChange(n, denoms) {
//   // O(nd) time | O(n) space
// 	const minNumCoins = new Array(n+1).fill(Infinity);
// 	minNumCoins[0] = 0;
// 	for(const denom of denoms){
// 		for(let amount = 0; amount < n+1; amount++){
// 			if(denom <= amount){
// 				minNumCoins[amount] = Math.min(minNumCoins[amount], minNumCoins[amount - denom] + 1);
// 			}
// 		}
// 	}
// 	return minNumCoins[n] !== Infinity ? minNumCoins[n] : -1
// }

// // Do not edit the line below.
// exports.minNumberOfCoinsForChange = minNumberOfCoinsForChange;




// /* Levenshtein Distance */

// function levenshteinDistance(str1, str2) {
//   // O(nm) time | O(nm) space.
// 	const edits = [];
// 	for(let i=0; i < str2.length + 1; i++){
// 		const row = [];
// 		for(let j=0; j < str1.length + 1; j++){
// 			row.push(j);
// 		}
// 		row[0] = i;
// 		edits.push(row)
// 	}
	
// 	for(let i=1; i < str2.length + 1; i++){
// 		for(let j=1; j < str1.length + 1; j++){
// 			if(str2[i-1] === str1[j-1]){
// 				edits[i][j] = edits[i-1][j-1];
// 			}else{
// 				edits[i][j] = 1 + Math.min(edits[i-1][j-1], edits[i][j-1], edits[i-1][j]);
// 			}
// 		}
// 	}
// 	return edits[str2.length][str1.length]
// }

// // Do not edit the line below.
// exports.levenshteinDistance = levenshteinDistance;




// /* Solved numbers of ways to traverse a graph */

// function numberOfWaysToTraverseGraph(width, height) {
//   // O(2^(n+m)) time | O(n+m) space.
//   if(width === 1 || height === 1) return 1
	
// 	return numberOfWaysToTraverseGraph(width - 1, height) + numberOfWaysToTraverseGraph(width, height - 1);
// }

// // Do not edit the line below.
// exports.numberOfWaysToTraverseGraph = numberOfWaysToTraverseGraph;



// function numberOfWaysToTraverseGraph(width, height) {
//   // O(n*m) time | O(n*m)
//   const numberOfWays = [];
// 	for(let i=0; i < height + 1; i++){
// 		numberOfWays.push([]);
// 		for(let j=0; j < width + 1; j++){
// 			numberOfWays[i].push(0);
// 		}
// 	}
	
// 	for(let widthIdx = 1; widthIdx < width + 1; widthIdx++){
// 		for(let heightIdx = 1; heightIdx < height + 1; heightIdx++){
// 			if(widthIdx === 1 || heightIdx === 1){
// 				numberOfWays[heightIdx][widthIdx] = 1
// 			}else{
// 				const leftWays = numberOfWays[heightIdx][widthIdx - 1];
// 				const topWays = numberOfWays[heightIdx - 1][widthIdx];
// 				numberOfWays[heightIdx][widthIdx] = leftWays + topWays
// 			}
// 		}
// 	}
// 	  return numberOfWays[height][width]; 
// }

// // Do not edit the line below.
// exports.numberOfWaysToTraverseGraph = numberOfWaysToTraverseGraph;


// function numberOfWaysToTraverseGraph(width, height) {
//   // O(n+m) time | O(1) where n is the width of the graph and m is the height.
//   const xdistanceFromCorner = width - 1;
// 	const ydistanceFromCorner = height - 1;
	
// 	const numerator = factorial(xdistanceFromCorner + ydistanceFromCorner);
// 	const denominator = factorial(xdistanceFromCorner) * factorial(ydistanceFromCorner);
	
// 	return Math.floor(numerator / denominator)
// }

// function factorial(num){
// 	let result = 1
// 	for(let n=2; n < num+1; n++){
// 		result *= n
// 	}
// 	return result;
// }

// // Do not edit the line below.
// exports.numberOfWaysToTraverseGraph = numberOfWaysToTraverseGraph;


// /* Kadane's Algorithm */

// function kadanesAlgorithm(array) {
//   // O(n) time | O(1) space
// 	let maxEndingHere = array[0];
// 	let maxSoFar = array[0];
	
// 	for(let i=1; i < array.length; i++){
// 		const num = array[i];
// 		maxEndingHere = Math.max(num, num + maxEndingHere);
// 		maxSoFar = Math.max(maxSoFar, maxEndingHere);
// 	}
// 	return maxSoFar;
// }

// // Do not edit the line below.
// exports.kadanesAlgorithm = kadanesAlgorithm;




// /* Single Cycle Check */

// function hasSingleCycle(array) {
//   // O(n) time | O(1) where n is the length of the array.
// 	let numElementsVisited = 0;
// 	let currentIdx = 0;
// 	while(numElementsVisited < array.length){
// 		if(numElementsVisited > 0 && currentIdx === 0) return false;
// 		numElementsVisited++;
// 		currentIdx = getNextIdx(currentIdx, array)
// 	}
// 	 return currentIdx === 0
// }

// function getNextIdx(currentIdx, array){
// 	const jump = array[currentIdx];
// 	const nextIdx = (currentIdx + jump) % array.length;
// 	return nextIdx >= 0 ? nextIdx : nextIdx + array.length;
// }

// // Do not edit the line below.
// exports.hasSingleCycle = hasSingleCycle;



/* Two Number sum */

// function twoNumberSum(array, targetSum) {
//   // O(n^2) time | O(1) space.
// 	for(let i=0; i < array.length - 1; i++){
// 		for(let j=i+1; j < array.length; j++){
// 			if(array[i] + array[j] === targetSum){
// 				return [array[i], array[j]]
			
// 			}
// 		}
// 	}
// 	 return [];
// }

// // Do not edit the line below.
// exports.twoNumberSum = twoNumberSum;

// function twoNumberSum(array, targetSum) {
//   // O(n) time | O(n) space.
// 	const nums = {};
// 	for(const num of array){
// 		const potentialMatch = targetSum - num
// 		if(potentialMatch in nums){
// 			return [potentialMatch, num];
// 		}else{
// 			nums[num] = true;
// 		}
// 	}
// 	 return [];
// }

// // Do not edit the line below.
// exports.twoNumberSum = twoNumberSum;



// function twoNumberSum(array, targetSum) {
//   // O(nlogn) time | O(1) space.
// 	array.sort((a, b) => a - b);
// 	let left = 0;
// 	let right = array.length - 1;
// 	while(left < right){
// 		const currentSum = array[left] + array[right];
// 		if(currentSum === targetSum) return [array[left], array[right]];
// 		else if(currentSum < targetSum) left++;
// 	  else if(currentSum > targetSum) right--;
// 	}
// 	return [];
// }

// // Do not edit the line below.
// exports.twoNumberSum = twoNumberSum;



// const getSorted = (arr) => {
//   let i = 0;
//   while(i < arr.length){
//     let j = i+1;
//     while(j < arr.length){
//       if(arr[j] < arr[i]){
//         swap(i,j, arr)
//       }
//       j++
//     }
//     i++;

//   }
// }



// function swap(i,j, arr){
//   [arr[i], arr[j]] = [arr[j], arr[i]]
// }

// const cards = ['Jack', 1, 8, 4, 2,'King','Sheep'];
// console.log(getSorted(cards));

// // exports.getSorted = getSorted;





/* Sorted square array */

function sortedSquaredArray(array) {
    // O(nlogn) time | O(n) space.
    const sorted = new Array(array.length).fill(0);
      
      for(let idx=0; idx < array.length; idx++){
          const value = array[idx];
          sorted[idx] = value * value;
      }
      sorted.sort((a, b) => a - b);
      return sorted;
  }
  
  // Do not edit the line below.
  exports.sortedSquaredArray = sortedSquaredArray;


  function sortedSquaredArray(array) {
    // O(n) time | O(n) space.
    const sorted = new Array(array.length).fill(0);
      let startIdx = 0;
      let endIdx = array.length - 1;
      for(let idx = array.length - 1; idx >= 0; idx--){
          const smallestValue = array[startIdx];
          const largestValue = array[endIdx];
          if(Math.abs(smallestValue) > Math.abs(largestValue)){
              sorted[idx] = smallestValue * smallestValue;
              startIdx++;
          }else{
              sorted[idx] = largestValue * largestValue;
              endIdx--
          }
      }
       return sorted;
  }
  
  // Do not edit the line below.
  exports.sortedSquaredArray = sortedSquaredArray;
 
  



  /* Tournament winner */

  function tournamentWinner(competitions, results) {
    // O(n) time | O(k) space.
    let currentBestTeam = '';
      const scores = { [currentBestTeam]: 0 };
      const homeTeamWon = 1;
      
      for(let i=0; i < competitions.length; i++){
          const result = results[i]
          const [homeTeam, awayTeam] = competitions[i];
          const winningTeam = result === homeTeamWon ? homeTeam : awayTeam
          updateScores(winningTeam, 2, scores);
          if(scores[winningTeam] > scores[currentBestTeam]){
              currentBestTeam = winningTeam;
          }
      }
       return currentBestTeam;
  };
  
  function updateScores(team, points, scores){
      if(!(team in scores)) scores[team] = 0;
      scores[team] += points
  }
  
  // Do not edit the line below.
  exports.tournamentWinner = tournamentWinner;



  /* Solved Permutations */

  function getPermutations(array) {
    // O(n^2 * n!) | O(n*n!).
      const permutations = [];
      permutationsHelper(array, [], permutations)
      return permutations;
  }
  
  function permutationsHelper(array, currentPermutation, permutations){
      if(!array.length && currentPermutation.length){
          permutations.push(currentPermutation);
      }else{
          for(let i = 0; i < array.length; i++){
              const newArr = array.slice(0, i).concat(array.slice(i+1));
              const newPermutation = currentPermutation.concat([array[i]]);
              permutationsHelper(newArr, newPermutation, permutations);
          }
      }
  }


  function getPermutations(array) {
    // O(n * n!) | O(n * n!).
      const permutations = [];
      helperPermutations(0, array, permutations);
      return permutations
  }
  
  function helperPermutations(i, array, permutations){
      if(i === array.length - 1){
          permutations.push(array.slice());
      }else{
          for(let j=i; j < array.length; j++){
              swap(i, j, array);
              helperPermutations(i+1, array, permutations);
              swap(i, j, array);
          }
      }
  }
  
  function swap(i, j, array){
      [array[i], array[j]] = [array[j], array[i]];
  }
  
  // Do not edit the line below.
  exports.getPermutations = getPermutations;




  /* Solved tournament winner */

  function tournamentWinner(competitions, results) {
    // O(n) time | O(k) space.
    const homeTeamWon = 1;
      let currentBestTeam = '';
      let scores = { [currentBestTeam]: 0 };
      for(let idx = 0; idx < competitions.length; idx++){
          const result = results[idx]
          const [homeTeam, awayTeam] = competitions[idx]
          
          const winningTeam = result === homeTeamWon ? homeTeam : awayTeam;
          updateScores(winningTeam, 3, scores);
          
          if(scores[winningTeam] > scores[currentBestTeam]){
              currentBestTeam = winningTeam
          }
      }
       return currentBestTeam;
  }
  
  function updateScores(team, points, scores){
      if(!(team in scores)) scores[team] = 0;
      scores[team] += points;
  }
  
  // Do not edit the line below.
  exports.tournamentWinner = tournamentWinner;

  


  /* Solved non-constructible change */

  function nonConstructibleChange(coins) {
    // O(nlogn) time | O(1) space.
      let currentChangeCreated = 0;
      coins.sort((a, b) => a - b);
      for(const coin of coins){
          if(coin > currentChangeCreated + 1){
              return currentChangeCreated + 1;
          }else{
              currentChangeCreated += coin;
          }
      }
       return currentChangeCreated + 1;
      
  }
  
  // Do not edit the line below.
  exports.nonConstructibleChange = nonConstructibleChange;
  
  
  


  /* Find closest value in BST */

  function findClosestValueInBst(tree, target) {
    // O(logn) time | O(1) space.
      return findClosestValueInBstHelper(tree, target, tree.value)
  }
  
  function findClosestValueInBstHelper(tree, target, closest){
      while(tree !== null){
          if(Math.abs(target - closest) > Math.abs(target - tree.value)){
              closest = tree.value
          }
          
          if(target < tree.value){
              tree = tree.left
          }else if(target > tree.value){
              tree = tree.right
          }else{
              break;
          }
      }
      return closest
  }
  
  // This is the class of the input tree. Do not edit.
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.findClosestValueInBst = findClosestValueInBst;


  function findClosestValueInBst(tree, target) {
    // Avg case: O(logn) time | O(logn) space
      // worst case: O(n) time | O(n) space
      
      return findClosestValueInBstHelper(tree, target, tree.value)
  }
  
  function findClosestValueInBstHelper(tree, target, closest){
      if(tree === null) return closest;
      
      if(Math.abs(target - closest) > Math.abs(target - tree.value)){
          closest = tree.value
      }
      
      if(target < tree.value){
          return findClosestValueInBstHelper(tree.left, target, closest)
      }else if(target > tree.value){
          return findClosestValueInBstHelper(tree.right, target, closest)
      }else{
          return closest
      }
  }
  
  // This is the class of the input tree. Do not edit.
  class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.findClosestValueInBst = findClosestValueInBst;
  
  

  /* Solved branch sums */

  // This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  function branchSums(root) {
    // O(n) time | O(n) space.
      const sums = [];
      calculateBranchSums(root, 0, sums);
      return sums;
  }
  
  function calculateBranchSums(node, runningSum, sums){
      if(!node) return
      const currentRunningSum = runningSum + node.value;
      
      if(!node.left && !node.right){
          sums.push(currentRunningSum);
          return
      }
      
      calculateBranchSums(node.left, currentRunningSum, sums);
      calculateBranchSums(node.right, currentRunningSum, sums)
  }
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.branchSums = branchSums;
  
  

  /* Solved node depths using iterative approach*/

  function nodeDepths(root) {
    // O(n) time | O(h) space
      let sumOfDepth = 0;
      const stack = [{ node: root, depth: 0 }];
      
      while(stack.length > 0){
          const { node, depth } = stack.pop();
          if(node === null) continue;
          sumOfDepth += depth;
          
          stack.push({ node: node.left, depth: depth + 1 })
          stack.push({ node: node.right, depth: depth + 1 })
      }
      
      return sumOfDepth;
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.nodeDepths = nodeDepths;


  /* Solved node depths using Recursive approach*/

  function nodeDepths(root, depth = 0) {
    // O(n) time | O(h) space.
      if(root === null) return 0;
      return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1);
  }
  
  // This is the class of the input binary tree.
  class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  
  // Do not edit the line below.
  exports.nodeDepths = nodeDepths;
  
  

  /* Solved interview questions */

//   #multiply_nums("2, 3") ➞ 6
// #multiply_nums("1, 2, 3, 4") ➞ 24
// #multiply_nums("54, 75, 453, 0") ➞ 0
// #multiply_nums("10, -2") ➞ -20
// def multiply_nums(nums)
//   nums.split(',').map {|x| x.to_i }.inject(1) { |a, b| a*b }
// end
// p multiply_nums("2, 3")
// p multiply_nums("1, 2, 3, 4")
// p multiply_nums("54, 75, 453, 0")
// p multiply_nums("10, -2")

  

/* Find closest value in a BST */
function findClosestValueInBst(tree, target) {
  // avg: O(logn) time | O(logn) space.
	// worst: O(n) time | O(n) space.
	return findClosestValueInBstHelper(tree, target, tree.value)
}

function findClosestValueInBstHelper(tree, target, closest){
	if(tree === null) return closest
	
	if(Math.abs(target - closest) > Math.abs(target - tree.value)){
		closest = tree.value
	}
	if(target < tree.value){
		return findClosestValueInBstHelper(tree.left, target, closest)
	}else if(target > tree.value){
		return findClosestValueInBstHelper(tree.right, target, closest)
	}else {
		return closest
	}
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;


function findClosestValueInBst(tree, target) {
  // avg: O(logn) time | O(1) space.
	// worst: O(logn) time | O(1) space
	return findClosestValueInBstHelper(tree, target, tree.value)
}

function findClosestValueInBstHelper(tree, target, closest){
	let currentNode = tree
	while(currentNode !== null){
		if(Math.abs(target - closest) > Math.abs(target - currentNode.value)){
			closest = currentNode.value
		}
		
		if(target < currentNode.value){
			currentNode = currentNode.left
		}else if(target > currentNode.value){
			currentNode = currentNode.right
		}else break;
	}
	return closest
}

// This is the class of the input currentNode. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;




// Branch sums

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
  // O(n) time | O(n) space.
	const sums = []
	calculateBranchSums(root, 0, sums)
	return sums
}

function calculateBranchSums(node, runningSum, sums){
	if(!node) return
	
	const currentRunningSum = runningSum + node.value;
	
	if(!node.left && !node.right){
		sums.push(currentRunningSum);
		return;
	}
	
	calculateBranchSums(node.left, currentRunningSum, sums)
	calculateBranchSums(node.right, currentRunningSum, sums)
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;


/* Node depths using iteration */

function nodeDepths(root) {
  // O(n) time | O(d) space.
	let sumOfDepths = 0;
	let stack = [{node: root, depth: 0 }]
	
	while(stack.length > 0){
		const {node, depth} = stack.pop();
		if(!node) continue
		sumOfDepths += depth;
		
		stack.push({ node: node.left, depth: depth + 1 })
		stack.push({ node: node.right, depth: depth + 1 })
	}
	return sumOfDepths
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;




/* Solve nodeDepths using recursion */

function nodeDepths(root, depth = 0) {
  // O(n) time | O(d) space.
	if(!root) return 0
	return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;




// Solve depth depthFirstSearch

// Do not edit the class below except
// for the depthFirstSearch method.
// Feel free to add new properties
// and methods to the class.
class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // O(v + e) time | O(e).
		array.push(this.name);
		
		for(const child of this.children){
			child.depthFirstSearch(array)
		}
		return array;
  }
}

// Do not edit the line below.
exports.Node = Node;



/* Solved minimum waiting time */

function minimumWaitingTime(queries) {
  // o(nlogn) time | O(1) space.
	let totalWaitingTime = 0;
  queries.sort((a, b) => a - b)
	
	for(let i=0; i < queries.length; i++){
		const duration = queries[i]
		const queriesLeft = queries.length - (i+1)
		totalWaitingTime += duration * queriesLeft;
	}
	return totalWaitingTime;
}

// Do not edit the line below.
exports.minimumWaitingTime = minimumWaitingTime;




/* Solved Balanced binary tree */

// This is an input class. Do not edit.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function heightBalancedBinaryTree(tree) {
  // O(n) time | O(h) space.
  // find the depth of the tree 
	// determine if its balanced
	if(tree === null) return true
	
	if(Math.abs(maxDepth(tree.left) - maxDepth(tree.right)) > 1) return false
		 
	return heightBalancedBinaryTree(tree.left) && heightBalancedBinaryTree(tree.right)	 
	
}

function maxDepth(node){
	if(node === null) return 0;
	const left = maxDepth(node.left);
	const right = maxDepth(node.right);
	
	return Math.max(left, right) + 1
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.heightBalancedBinaryTree = heightBalancedBinaryTree;
