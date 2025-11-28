function countingSort(array: number[]) {
    const max = Math.max(...array)
    const frequency: number[] = Array(max + 1).fill(0)
    const newArray = []
    for (let i = 0; i < array.length; i++) {
        const index = array[i]
        frequency[index] += 1
    }
    for (let j = 0; j < frequency.length; j++) {
        while (frequency[j] > 0) {
            newArray.push(j);
            frequency[j]--
        }
    }
    return newArray
}
// console.log(countingSort([3, 5, 1, 3, 2, 5, 2, 4, 4]))
