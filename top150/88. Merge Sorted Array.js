function merge(nums1, m, nums2, n) {
  let counter = 0;
  
  for (let i = m; i < m + n; i++) {
    nums1[i] += nums2[counter];
    counter++;
  }

  return nums1.sort((a, b) => a - b);
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
