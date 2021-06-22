function lengthOfArrAfterremovingDuplicates(arr) {
    let firstPointer = 1;

    for(let i=1; i<arr.length; i++) {
        if(arr[i] !== arr[firstPointer]) {
            arr[firstPointer] = arr[i]
            firstPointer = firstPointer + 1
        }
    }
    
    return firstPointer
}

lengthOfArrAfterremovingDuplicates([2, 3, 3, 3, 6, 9, 9])