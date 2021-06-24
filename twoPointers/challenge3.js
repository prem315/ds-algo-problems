function squares(arr) {
    let squares = []
    let highestSquareIdx = arr.length - 1;
    let leftIndex = 0;
    let rightIndex = arr.length - 1;
    while (leftIndex <= rightIndex) {
        let leftSquare = arr[leftIndex] * arr[leftIndex]
        let rightSquare = arr[rightIndex] * arr[rightIndex];
        if (leftSquare > rightSquare) {
            squares[highestSquareIdx] = leftSquare;
            leftIndex += 1;
        } else {
            squares[highestSquareIdx] = rightSquare;
            rightIndex -= 1;
        }
        highestSquareIdx -= 1;
    }
  
    console.log(squares)
    return squares;
}

squares([-2, -1, 0, 2, 4])
