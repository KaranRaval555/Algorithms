class Stack<T> {
    private items: T[];
    private len: number;

    constructor() {
        this.items = [];
        this.len = 0;
    }
    isEmpty(): boolean {
        return this.len === 0;
    }
    push(item: T): void {
        this.items[this.len] = item;
        this.len++;
    }
    pop(): T | null {
        return this.isEmpty() ? null : this.items[--this.len]
    }
    peek(): T | null {
        return this.isEmpty() ? null : this.items[this.len - 1]
    }
    size(): number {
        return this.len
    }
    print(): T[] {
        return this.items.slice(0, this.len)
    }
    clear(): void {
        this.items = [];
        this.len = 0;
    }
}

let stack: Stack<number> = new Stack();
stack.push(10)
console.log(stack.peek())
stack.push(20)
console.log(stack.peek())
console.log(stack.size())
console.log(stack.print())
console.log(stack.pop())
console.log(stack.size())
console.log(stack.peek())
console.log(stack.print())
console.log(stack.pop())
console.log(stack.isEmpty())
