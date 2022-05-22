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


function subarraySort(array) {
  let minOutOfOrder = Infinity;
  let maxOutOfOrder = -Infinity;
  for (let i = 0; i < array.length; i++) {
    let num = array[i];
    if (isOutOfOrder(i, num, array)) {
      minOutOfOrder = Math.min(minOutOfOrder, num);
      maxOutOfOrder = Math.max(maxOutOfOrder, num)
    }
  }
  if(minOutOfOrder === Infinity) return [-1,-1];
  let leftSubArrayIdx = 0;
  while(minOutOfOrder >= array[leftSubArrayIdx]){
    leftSubArrayIdx += 1;
  }

  let rightSubArrayIdx = array.length - 1;
  while(maxOutOfOrder <= array[rightSubArrayIdx]){
    rightSubArrayIdx -= 1;
  }
  return [leftSubArrayIdx, rightSubArrayIdx];
}

function isOutOfOrder(i, num, array) {
  if (i === 0) {
    array[i + 1] < num
  }
  if (i === array.length - 1) {
    array[i - 1] > num
  }
  return array[i - 1] > num || array[i + 1] < num
}

const array = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]

console.log(subarraySort(array)) // [3, 9]