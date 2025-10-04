import { Heap, min } from "../../DataStructures/Heap/heap.ts"

function heapSort<T>(array: T[]) {
    const sortedArray: T[] = []
    const heap: Heap<T> = new Heap(min)
    heap.heapify(array)
    while (!heap.isEmpty()) {
        const item = heap.delete()
        if (item !== undefined) {
            sortedArray.push(item)
        }
    }
    return sortedArray
}
console.log(heapSort([3, 5, 1, 65, 23, 644, 12, 35, 63, 23, 34, 76, 78, 45, 78, 88, 298]))
