export const countingSort = (arr: number[]) => {
    if (arr.length === 0) return []
    const frequencies = new Array(Math.max(...arr) + 1).fill(0)
    for (let i = 0; i < arr.length; i++) {
        frequencies[arr[i]]++
    }
    const newArray: number[] = []
    for (let j = 0; j < frequencies.length; j++) {
        let occurences = frequencies[j]
        while (occurences > 0) {
            newArray.push(j)
            occurences--;
        }
    }
    return newArray
}
