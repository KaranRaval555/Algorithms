import { swap } from "../../utils.ts"

function bubbleSort(array: number[]) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length - i; j++) {
            if (array[j - 1] > array[j]) swap(array, j, j - 1);
        }
    }
    return array;
}
