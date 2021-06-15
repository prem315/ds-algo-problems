// Maximum Sum Subarray of Size K 

function maxSubArr(arr, k) {
    let sliding_window_index = 0
    let window_sum = 0
    let max_sum = 0

    for(let i=0; i<arr.length; i++) {
        window_sum = window_sum + arr[i]
        if(i >= k - 1) {
            max_sum = Math.max(window_sum, max_sum)
            window_sum = window_sum - arr[sliding_window_index]
            sliding_window_index = sliding_window_index + 1
        }

    }

    return max_sum
}

let res = maxSubArr([2, 1, 5, 1, 3, 2], 3)
console.log(res)