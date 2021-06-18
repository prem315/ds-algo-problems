// Given a string, find the length of the longest substring in it with no more than K distinct characters.

function longestSubStr(str, k) {
    // console.log(str)
    let sliding_window_index = 0
    let maxLength = 0
    let charCount = {}
    for(let i=0; i<str.length; i++){
        
        if(!(str[i] in charCount)) {
            charCount[str[i]] = 0
        } 
        charCount[str[i]] = charCount[str[i]] + 1

        if(Object.keys(charCount).length === k) {
            maxLength = Math.max(maxLength, i - sliding_window_index + 1)
        }
        
        if(Object.keys(charCount).length > k) {
            while(Object.keys(charCount).length > k) {
                charCount[str[i]] = charCount[str[i]] - 1
                if(charCount[str[i]] === 0) {
                    delete charCount[str[i]]
                }  
                sliding_window_index = sliding_window_index + 1;
            }
        }
    }

    console.log(maxLength)
}

longestSubStr('aabacebebebe', 3)