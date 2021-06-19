function noRepeatSubString(str) {
    let sliding_window_index = 0;
    let maxLength = 0;
    let counter = {}

    for(let i=0; i<str.length; i++) {
        let char = str[i]
        if(!(str[i] in counter)) {
            counter[char] = 0
        }
        counter[char] = counter[char] + 1

        if(Object.keys(counter).length === i - sliding_window_index + 1) {
            maxLength = Math.max(maxLength, i - sliding_window_index + 1)
        }

        while(Object.keys(counter).length < i - sliding_window_index + 1) {
            const left = str[sliding_window_index]
            counter[left] = counter[left] - 1
            if(counter[left] === 0) {
                delete counter[left]
            }
            sliding_window_index = sliding_window_index + 1
        }

    }

    console.log(maxLength)
}

noRepeatSubString("abccde")