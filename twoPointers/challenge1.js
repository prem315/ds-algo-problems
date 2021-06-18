function targetSumPair(arr, targetSum) {
    let left_pointer = 0;
    let right_pointer = arr.length - 1

    while(left_pointer < right_pointer) {
        const sum = arr[left_pointer] + arr[right_pointer]
        if(sum === targetSum) {
            return [left_pointer, right_pointer]
        }

        if(targetSum > sum) { 
            left_pointer = left_pointer + 1
        } else {
            right_pointer = right_pointer - 1
        }
    }

    return [-1, -1]
}

const res = targetSumPair([1, 2, 3, 4, 6], 6)
console.log(res)