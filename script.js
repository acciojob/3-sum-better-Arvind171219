function threeSum(S, target) {
// write your code here
	S.sort((a, b) => a - b);
  let closestSum = Infinity;
  let minDiff = Infinity;
  for (let i = 0; i < S.length - 2; i++) {
    let left = i + 1;
    let right = S.length - 1;
    while (left < right) {
      const sum = S[i] + S[left] + S[right];
      const diff = Math.abs(sum - target);
      if (diff < minDiff) {
        minDiff = diff;
        closestSum = sum;
      }
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return closestSum;
  
}

module.exports = threeSum;
