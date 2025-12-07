import { bubbleSort } from '../algorithms/Sorting/bubbleSort.ts';
import { selectionSort } from '../algorithms/Sorting/selectionSort.ts';
import { insertionSort } from '../algorithms/Sorting/insertionSort.ts';
import { countingSort } from '../algorithms/Sorting/countingSort.ts';
import { heapSort } from '../algorithms/Sorting/heapSort.ts';
import { describe, expect, it } from 'vitest';
import { mergeSort } from '../algorithms/Sorting/mergeSort.ts';
// import { quickSort } from '../algorithms/Sorting/quickSort.ts';

describe("Sorting Algorithms", () => {
    const array = [3, 5, 1, 65, 23, 644, 12, 35, 63, 23, 34, 76, 78, 45, 78, 88, 298]
    const sortedArray = [1, 3, 5, 12, 23, 23, 34, 35, 45, 63, 65, 76, 78, 78, 88, 298, 644]

    it("Bubble Sort", () => {
        expect(bubbleSort([...array])).toEqual(sortedArray);
    });

    it("Selection Sort", () => {
        expect(selectionSort([...array])).toEqual(sortedArray);
    });

    it("Insertion Sort", () => {
        expect(insertionSort([...array])).toEqual(sortedArray);
    });

    it('Counting Sort', () => {
        expect(countingSort([2, 5, 3, 0, 2, 3, 0, 3])).toEqual([0, 0, 2, 2, 3, 3, 3, 5])
    })

    it("Merge Sort", () => {
        expect(mergeSort([...array])).toEqual(sortedArray);
    });

    it("Heap Sort", () => {
        expect(heapSort([...array])).toEqual(sortedArray);
    });
});
