import { swap } from "../utils.ts";

export const max = <T>(x: T, y: T): boolean => x < y
export const min = <T>(x: T, y: T): boolean => x > y

export class Heap<T> {
    items: T[];
    size: number;
    compartor: (parent: T, child: T) => boolean

    constructor(comparator: (parent: T, child: T) => boolean) {
        this.items = [];
        this.size = 0;
        this.compartor = comparator
    }
    isEmpty() {
        return this.size <= 0
    }
    leftChild(index: number) {
        return index * 2 + 1
    }
    rightChild(index: number) {
        return index * 2 + 2
    }
    parent(index: number) {
        return Math.floor((index - 1) / 2)
    }
    insert(item: T) {
        this.items[this.size++] = item
        this.bubbleUp(this.size - 1)
    }
    bubbleUp(index: number) {
        const parentIndex = this.parent(index)
        if (this.compartor(this.items[parentIndex], this.items[index])) {
            swap(this.items, parentIndex, index)
            this.bubbleUp(parentIndex)
        }
    }
    delete(): T | undefined {
        if (!this.isEmpty()) {
            const element = this.items[0]
            swap(this.items, 0, --this.size)
            this.bubbleDown(0)
            return element
        }
    }
    bubbleDown(index: number) {
        if (this.isEmpty()) return
        const left = this.leftChild(index)
        const right = this.rightChild(index)
        if (left < this.size && this.compartor(this.items[index], this.items[left])) {
            swap(this.items, left, index)
            this.bubbleDown(left)
        }
        if (right < this.size && this.compartor(this.items[index], this.items[right])) {
            swap(this.items, right, index)
            this.bubbleDown(right)
        }
    }
    heapify(array: T[]) {
        this.items = array;
        this.size = array.length;
        for (let i = Math.floor(this.size / 2) - 1; i >= 0; i--) {
            this.bubbleDown(i);
        }
    }
    print() {
        return this.items.slice(0, this.size)
    }
}

const heap: Heap<number> = new Heap(min)
heap.insert(5)
console.log(heap.print())
heap.insert(3)
console.log(heap.print())
heap.insert(1)
console.log(heap.print())
heap.insert(2)
console.log(heap.print())
heap.insert(4)
console.log(heap.print())
console.log(heap.delete())
console.log(heap.print())
console.log(heap.delete())
console.log(heap.print())
console.log(heap.delete())
console.log(heap.delete())
console.log(heap.delete())

const arrayToHeap = new Heap(max)
const array = [10, 20, 15, 12, 40, 25, 18]
arrayToHeap.heapify(array)