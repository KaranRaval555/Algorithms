function mergeSort<T>(array: T[]): T[] {
    if (array.length == 1) return array;

    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));

    return merge(left, right);
}

function merge<T>(left: T[], right: T[]): T[] {
    const sortedArray: T[] = [];
    let i = 0,
        j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) sortedArray.push(left[i++]);
        else sortedArray.push(right[j++]);
    }

    while (i < left.length) sortedArray.push(left[i++]);
    while (j < right.length) sortedArray.push(right[j++]);

    return sortedArray;
}
const arr = [9, 2, 6, 3, 7, 8, 5, 1];
console.log(mergeSort(arr));
