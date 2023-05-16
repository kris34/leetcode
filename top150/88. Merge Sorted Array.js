/* You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
 representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
 To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
  and the last n elements are set to 0 and should be ignored. nums2 has a length of n. */

function merge(nums1, m, nums2, n) {
  let nums2Index = 0;

  for (let i = m; i < m + n; i++) {
    nums1[i] += nums2[nums2Index];
    nums2Index++;
  }

  return nums1.sort((a, b) => a - b);
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));

/* Since always the last n elements are going to be zero,
we dont care about the first m elements so we start the loop from
m onwards. The loop continues untill m + n becasue we have to replace the last n elements of nums1 with all elements from nums2.
Since the last n elements of nums1 will always be 0 we can just do .
The counter comes into play because we have to start from index 0 of nums2
and we just increment it by 1 every time untills the loop is over. 
Once its done we just have to perform a basic sorting operation. */
