import { swap } from "../../utils.ts";

export function insertionSort(array: number[]) {
    for (let i = 1; i < array.length; i++) {
        let j = i - 1;
        while (j >= 0 && array[j] > array[j + 1]) {
            swap(array, j, j + 1);
            j--;
        }
    }
    return array;
}
