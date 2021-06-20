function fruitsIntoBasket(arr) {
    let sliding_window_index = 0;
    let maxLength = 0;
    let countTree = {}

    for(let i=0; i<arr.length; i++) {
        if(!(arr[i] in countTree)){
            countTree[arr[i]] = 0 
        }
        countTree[arr[i]] = countTree[arr[i]] + 1 

        if(Object.keys(countTree).length === 2) {
            maxLength = Math.max(maxLength, i - sliding_window_index + 1 )
        }

        while(Object.keys(countTree).length > 2) {
            const left = arr[sliding_window_index]
            countTree[left] = countTree[left] - 1
            if(countTree[left] === 0) {
                delete countTree[left]
            }
            sliding_window_index = sliding_window_index + 1
        }       
    } 

    console.log(maxLength)
    return maxLength
   
}

fruitsIntoBasket(['A', 'B', 'C', 'A', 'C'])
fruitsIntoBasket(['A', 'B', 'C', 'B', 'B', 'C'])
