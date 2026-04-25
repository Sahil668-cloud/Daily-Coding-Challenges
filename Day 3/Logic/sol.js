function isPalindrome(str) {
    let status = true
    let newStr = (str.replace(" ", "")).toLowerCase()
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] !== newStr[newStr.length - (i +1)]) {
            status = false
            break
        }
    }
    return status
}


console.log(isPalindrome("race car"));