export function binarySearch(sortedArray: number[], item: number): number {
    let low = 0;
    let high = sortedArray.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (sortedArray[mid] === item) return mid;
        else if (item > sortedArray[mid]) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
