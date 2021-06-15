// find the average of all contiguous subarrays of size ‘K’ in the given array

function averageOfSubarray(arr, k){
    let avg_sum = []
    let slide_window_index = 0
    let count = 0
    for(let i=0; i<arr.length; i++) {
        console.log(arr[i])
        count = count + arr[i]
        if(i >= k - 1) {
            avg_sum.push(count / k)
            count = count - arr[slide_window_index]
            slide_window_index = slide_window_index + 1
        }
    }

    return avg_sum
}

let res = averageOfSubarray([1, 3, 2, 5, 7, 3, 2], 3)   
console.log(res);