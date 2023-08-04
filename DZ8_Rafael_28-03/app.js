function isPalindrome(inputString) {
    const inputArray = inputString.split('');
    const reversedArray = inputArray.slice().reverse();
    return inputArray.join('') === reversedArray.join('');
}

console.log(isPalindrome("radar"))
