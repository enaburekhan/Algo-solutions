// four number sum
// O(n^2) time | O(n^2) space
function fourNumberSum(array, targetSum){
  const quadruplets = [];
  const allPairsSum = {};
  for(let i=1; i < array.length - 1; i++){
      for(let j=i+1; j < array.length; j++){
          const currentSum = array[i] + array[j];
          const diff = targetSum - currentSum;
          if(diff in allPairsSum){
              for(const pairs of allPairsSum[diff]){
                  quadruplets.push(pairs.concat([array[i], array[j]]))
              }

          }
      }
      for(let k=0; k < i; k++){
        const currentSum = array[k] + array[i];
        if(!(currentSum in allPairsSum)) {
            allPairsSum[currentSum] = [[array[k], array[i]]]
        }else{
            allPairsSum[currentSum].push([[array[k], array[i]]])
        }   
      }
  }
   return quadruplets
}

const array = [7, 6, 4, -1, 1, 2];
const targetValue = 16;

console.log(fourNumberSum(array, targetValue)); //[[7, 6, 4, -1], [7, 6, 1, 2]]