import { Heap, min } from "../../DataStructures/Heap/heap.ts"

export function heapSort<T>(array: T[]) {
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
