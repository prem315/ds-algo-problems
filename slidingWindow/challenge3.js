// length of the smallest sub array 

function smallest_subarr(arr, k){
    let window_sum = 0;
    let length = Infinity;
    let sliding_window_index = 0;

    for(let i=0; i<arr.length; i++) {
       // console.log(arr[i])
        window_sum = window_sum + arr[i];
        console.log(window_sum)
        while(window_sum >= k) {
            length = Math.min(length, i - sliding_window_index + 1);
            window_sum = window_sum - arr[sliding_window_index]
            sliding_window_index = sliding_window_index + 1;
        }
    }

    if (length === Infinity) {
        return 0;
    }
    return length;
}



let length = smallest_subarr([2, 1, 5, 2, 3, 2], 7)
console.log(length)