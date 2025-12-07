import { swap } from "../../utils.ts"

export function selectionSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        const min = findSmallest(arr, i);
        if (min !== i) {
            swap(arr, i, min)
        }
    }
    return arr;
}

function findSmallest(arr: number[], index: number) {
    let min = index
    for (let i = index; i < arr.length; i++) {
        if (arr[i] < arr[min]) min = i
    }
    return min
}
