export function binarySearch(sortedArray: number[], target: number): number {
    let low = 0;
    let high = sortedArray.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (sortedArray[mid] === target) return mid;
        else if (target > sortedArray[mid]) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}

export const recursiveBinarySearch = (sortedArray: number[], low: number, high: number, target: number): number => {
    if (low > high) return -1;

    const mid = Math.floor((low + high) / 2)

    if (sortedArray[mid] === target) return mid;
    else if (target < sortedArray[mid]) return recursiveBinarySearch(sortedArray, low, mid - 1, target)
    else return recursiveBinarySearch(sortedArray, mid + 1, high, target)
}
