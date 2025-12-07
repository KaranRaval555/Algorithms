function longestCommonPrefix(strs: string[]): string {
    let prefix = ""
    for (let c = 0; c < strs[0].length; c++) {
        for (let s = 0; s < strs.length; s++) {
            if (c === strs[s].length || strs[s][c] !== strs[0][c]) {
                return prefix
            }
        }
        prefix += strs[0][c]
    }
    return prefix
};
