function subStrwithSameCharsAfterReplacement(str, k) {

    let sliding_window_index = 0;
    let maxLength = 0;
    let counter = {}

    for(let i=0; i<str.length; i++) {
        let char = str[i]

        if(!(char in counter)) {
            counter[char] = 0
        }

        counter[char] = counter[char] + 1

        
    }

}

subStrwithSameCharsAfterReplacement("aabccbb", 2) 