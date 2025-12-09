class Node {
    constructor(data) {
        this.data = data
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.tail = null;
        this.front = null;
    }
    isEmpty() {
        return this.front === null;
    }
    enqueue(value) {
        const newNode = new Node(value)
        if (!this.front) {
            this.front = newNode;
            this.tail = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }
    dequeue() {
        if (!this.front) return "QUEUE UNDERFLOW";
        const val = this.front.data;
        this.front = this.front.next;
        return val
    }
    peek() {
        return this.front ? this.front.data : "QUEUE IS EMPTY";
    }
    print() {
        const list = []
        let current = this.front;
        while (current) {
            list.push(current.data);
            current = current.next;
        }
        console.log(list.join(" "))
    }
}

const queue = new Queue();
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.print()
queue.dequeue()
queue.dequeue()
queue.print()
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
