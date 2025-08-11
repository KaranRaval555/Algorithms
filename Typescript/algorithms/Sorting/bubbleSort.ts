import { swap } from "../../utils.ts"

function bubbleSort(array: number[]) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) swap(array, j, j + 1);
        }
    }
    return array;
}
console.log(bubbleSort([9, 8, 7, 6, 5, 3, 2, 1]))
