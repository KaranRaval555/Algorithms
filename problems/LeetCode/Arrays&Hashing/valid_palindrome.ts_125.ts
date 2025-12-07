const isAlphaNumeric = (char: string) => /^[0-9A-Za-z]$/.test(char)

function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        while (left < right && !isAlphaNumeric(s[left])) left++
        while (left < right && !isAlphaNumeric(s[right])) right--;
        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false
        left++;
        right--;
    }
    return true;
};
