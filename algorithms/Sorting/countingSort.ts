export const countingSort = (nums: number[]) => {
    if (nums.length === 0) return []
    const frequencies = new Array(Math.max(...nums) + 1).fill(0)

    for (let i = 0; i < nums.length; i++) {
        frequencies[nums[i]]++
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
