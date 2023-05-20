function fib(nums1, m, nums2, n) {
    let index = 0
    for(let i = m; i < nums1.length;i++){ 
        nums1[i] = nums2[index]
        index++
    }

    return nums1.sort()
   
}
fib([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
