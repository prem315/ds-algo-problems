// Given an array containing 0s and 1s, if you are allowed to replace no more than ‘k’ 0s with 1s, 
// find the length of the longest contiguous subarray having all 1s.

function findLength(arr, k) {
    let sliding_window_index = 0;
    let maxLength = 0;
    let maxOnceCount = 0;
    
    for(let i=0; i<arr.length; i++) {
        if(arr[i] === 1) {
            maxOnceCount = maxOnceCount + 1
        }

        if((i - sliding_window_index + 1 - maxOnceCount) > k) {
            if(arr[sliding_window_index] === 1) {
                maxOnceCount = maxOnceCount -1;
            }
            sliding_window_index = sliding_window_index + 1
        }

        maxLength = Math.max(maxLength, i - sliding_window_index + 1)
    }

    console.log(maxLength)

    return maxLength
}

findLength([0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], 3)