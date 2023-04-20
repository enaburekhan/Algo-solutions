// four number sum
// O(n^2) time | O(n^2) space
// function fourNumberSum(array, targetSum){
//   const quadruplets = [];
//   const allPairsSum = {};
//   for(let i=1; i < array.length - 1; i++){
//       for(let j=i+1; j < array.length; j++){
//           const currentSum = array[i] + array[j];
//           const diff = targetSum - currentSum;
//           if(diff in allPairsSum){
//               for(const pairs of allPairsSum[diff]){
//                   quadruplets.push(pairs.concat([array[i], array[j]]))
//               }

//           }
//       }
//       for(let k=0; k < i; k++){
//         const currentSum = array[k] + array[i];
//         if(!(currentSum in allPairsSum)) {
//             allPairsSum[currentSum] = [[array[k], array[i]]]
//         }else{
//             allPairsSum[currentSum].push([[array[k], array[i]]])
//         }
//       }
//   }
//    return quadruplets
// }

// const array = [7, 6, 4, -1, 1, 2];
// const targetValue = 16;

// console.log(fourNumberSum(array, targetValue)); //[[7, 6, 4, -1], [7, 6, 1, 2]]

// O(n) time | O(1) space
// function subarraySort(array) {
//   let minOutOfOrder = Infinity;
//   let maxOutOfOrder = -Infinity;
//   for (let i = 0; i < array.length; i++) {
//     let num = array[i];
//     if (isOutOfOrder(i, num, array)) {
//       minOutOfOrder = Math.min(minOutOfOrder, num);
//       maxOutOfOrder = Math.max(maxOutOfOrder, num)
//     }
//   }
//   if(minOutOfOrder === Infinity) return [-1,-1];
//   let leftSubArrayIdx = 0;
//   while(minOutOfOrder >= array[leftSubArrayIdx]){
//     leftSubArrayIdx += 1;
//   }

//   let rightSubArrayIdx = array.length - 1;
//   while(maxOutOfOrder <= array[rightSubArrayIdx]){
//     rightSubArrayIdx -= 1;
//   }
//   return [leftSubArrayIdx, rightSubArrayIdx];
// }

// function isOutOfOrder(i, num, array) {
//   if (i === 0) {
//     array[i + 1] < num
//   }
//   if (i === array.length - 1) {
//     array[i - 1] > num
//   }
//   return array[i - 1] > num || array[i + 1] < num
// }

// const array = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]

// console.log(subarraySort(array)) // [3, 9]

// function largestRange(array){
//  const nums = {};
//  let bestRange = [];
//  let longestRange = 0;

//  for(const num of array){
//    num[num] = true;
//  }

//  for(const num of array){
//    if(!nums[num]) continue;
//    nums[num] = false;
//    let currentLength = 1;
//    let left = num - 1;
//    let right = num + 1;
//    while(left in nums){
//      nums[left] = false;
//      currentLength++;
//      left--;
//    }
//    while(right in nums){
//      nums[right] = false;
//      currentLength++;
//      right++;
//    }
//    if(currentLength > longestRange){
//      longestRange = currentLength
//      console.log(longestRange);
//      bestRange = [left + 1, right - 1]
//    }

//  }

//  return bestRange;

// }

// const array = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
// console.log(largestRange(array)) //[0, 7];

// function minRewards(scores){
//   const rewards = Array(scores.length).fill(1);
//   for(let i=0; i < scores.length; i++){
//     if(scores[i] > scores[i-1]){
//       rewards[i] = rewards[i-1] + 1
//     }
//   }

//   for(let i=scores.length - 2; i >= 0; i--){
//     if(scores[i] > scores[i+1]){
//       rewards[i] = Math.max(rewards[i], rewards[i+1] + 1)
//     }
//   }
//   return rewards.reduce((a,b) => a + b, 0);
// }

// const scores = [8, 4, 2, 1, 3, 6, 7, 9, 5]
// console.log(minRewards(scores));  // 25 [4, 3, 2, 1, 2, 3, 4, 5, 1]

// const operator = {
//   id: 3,
//   name: 'operator1'
// }

// console.log(operator.id);

// function zigzagTraverse(array) {
//   const height = array.length - 1;
//   const width = array[0].length - 1;
//   let row = 0;
//   let col = 0;
//   const result = [];
//   let goingDown = true;

//   while(!isOutOfBounds(row, col, height, width)){
//     result.push(array[row][col])
//     if(goingDown){
//       if(col === 0 || row === height){
//         goingDown = false;
//         if(row === height){
//            col += 1;
//         }else {
//           row += 1
//         }
//       }else{
//         row += 1;
//         col -= 1;
//       }
//     }else{
//       if(row === 0 || col === width){
//         goingDown = true;
//         if(col === width){
//           row += 1;
//         }else {
//           col += 1
//         }
//       }else{
//         row -= 1;
//         col += 1;
//       }
//     }
//   }
//    return result
// }

// function isOutOfBounds(row, col, height, width){
//   return row < 0 || row > height || col < 0 || col > width
// }

// const array = [
//   [1, 3, 4, 10],
//   [2, 5, 9, 11],
//   [6, 8, 12, 15],
//   [7, 13, 14, 16],
// ]

// console.log(zigzagTraverse(array)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]

// function isToeplitz(arr) {
//   for(let row=0; row < arr.length; row++){
//     for(let col=0; col < arr[0].length; col++){
//       if(arr[row+1] !== undefined  // has next row
//          && arr[row + 1][col + 1] !== undefined   // has next column
//          && arr[row + 1][col + 1] !== arr[row][col]  // current item isn't equal to the next item in the diagonal
//         ){
//         return false
//       }
//     }
//   }
//    return true
// }
// const arr1 = [[1,2,3,4],
//               [5,1,2,3],
//               [6,5,1,2]]

// const arr2 = [[1,2,3,4],
//               [5,1,9,3],
//               [6,5,1,2]]

// console.log(isToeplitz(arr2));

// function lastNumber(arr) {
//   const arr1 = [];
//   const arr2 = [];
//   for (let i = 0; i < arr.length; i += 2, arr1.push(i)) {
//     console.log(arr1);
//   }
//   let isLeft = true;
//   while (true) {
//     const len = arr1.length;
//     if (len === 1) return arr1;
//     let idx = 1;
//     if (isLeft) {
//     }
//   }
//   return arr;
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(lastNumber(arr));

// function mostRepeatedChar(str) {
//   let highestcount = 0;
//   let highestRepeatedChar = '';
//   const charDictionary = {};
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (!/^[a-zA-Z]+$/.test(char)) continue;
//     // console.log(char);
//     charDictionary[char] = (charDictionary[char] || 0) + 1;
//     if (charDictionary[char] > highestcount) {
//       highestcount = charDictionary[char];
//       highestRepeatedChar = char;
//     }
//   }
//   return highestRepeatedChar;
// }
// const str = 'a,b,c,d,d,d,a,2,3,3,3,3,3,3,d,2,1,1,3';

// console.log(mostRepeatedChar(str)); // d

function frequentRepeatedChar(str) {
  let highestCount = 0;
  let highestRepeatedChar = '';
  const dict = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    dict[char] = (dict[char] || 0) + 1;

    if (dict[char] > highestCount) {
      highestCount = dict[char];
      highestRepeatedChar = char;
    }
  }
  return highestRepeatedChar;
}

const str = 'aabbccdbb';
console.log(frequentRepeatedChar(str));

// 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
