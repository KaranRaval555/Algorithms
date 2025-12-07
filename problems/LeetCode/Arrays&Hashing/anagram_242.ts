const countBy = (string: string) => {
    return Array.from(string).reduce((acc, x) => {
        return acc[x] ? { ...acc, [x]: ++acc[x] } : { ...acc, [x]: 1 };
    }, {})
}

function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;
    const sFreq = countBy(s)
    const tFreq = countBy(t)
    if (Object.keys(sFreq).length !== Object.keys(tFreq).length) return false
    for (let char in sFreq) {
        if (sFreq[char] !== tFreq[char]) return false
    }
    return true
};
