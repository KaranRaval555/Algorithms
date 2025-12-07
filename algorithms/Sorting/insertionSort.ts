import { swap } from "../../utils.ts";

export function insertionSort(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i++) {
        let j = i + 1
        while (j >= 0 && arr[j - 1] > arr[j]) {
            swap(arr, j, j - 1)
            j--
        }
    }
    return arr;
}
