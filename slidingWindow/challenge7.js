function subStrwithSameCharsAfterReplacement(str, k) {

    let sliding_window_index = 0;
    let maxLength = 0;
    let maxRepeatedCharInWindow = 0;
    let counter = {}

    for(let i=0; i<str.length; i++) {
        let char = str[i]

        if(!(char in counter)) {
            counter[char] = 0
        }

        counter[char] = counter[char] + 1

        maxRepeatedCharInWindow = Math.max(maxRepeatedCharInWindow, counter[char])

        if(i - sliding_window_index + 1 - maxRepeatedCharInWindow > k) {
            let leftChar = str[sliding_window_index]
            counter[leftChar] = counter[leftChar] - 1
            sliding_window_index = sliding_window_index + 1
        }

        maxLength = Math.max(maxLength, i - sliding_window_index + 1)
    }

    console.log(maxLength)
    return maxLength
}

subStrwithSameCharsAfterReplacement("bccbababd", 2) 

