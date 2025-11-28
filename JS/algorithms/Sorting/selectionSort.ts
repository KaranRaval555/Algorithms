import { swap } from "../../utils.ts"

export function selectionSort(array: number[]) {
    for (let i = 0; i < array.length; i++) {
        const min = findSmallest(array, i);
        if (min !== i) swap(array, i, min);
    }
    return array;
}

function findSmallest(array: number[], index: number) {
    let minIndex = index;
    for (let i = index; i < array.length; i++) {
        if (array[i] < array[minIndex]) minIndex = i;
    }
    return minIndex;
}
