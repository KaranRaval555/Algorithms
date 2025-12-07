import { swap } from "../../utils.ts"

export function bubbleSort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) swap(arr, j, j + 1)
        }
    }
    return arr
}
