import { swap } from "../../utils.ts";

export function quickSort<T>(array: T[], left: number, right: number): void {
    if (left < right) {
        const index = partition(array, left, right);
        quickSort(array, left, index - 1);
        quickSort(array, index, right);
    }
}

function partition<T>(array: T[], low: number, high: number): number {
    const pivot = array[Math.floor((low + high) / 2)];
    while (low <= high) {
        while (array[low] < pivot) low++;
        while (array[high] > pivot) high--;
        if (low < high) {
            swap(array, low, high);
        }
        low++;
        high--;
    }
    return low;
}
