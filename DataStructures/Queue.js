class Node {
    constructor(value) {
        this.value = value
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }
    isEmpty() {
        return this.front === null;
    }
    enqueue(value) {
        const newNode = new Node(value)
        if (!this.rear) {
            this.front = newNode;
            this.rear = newNode;
            return;
        }
        this.rear.next = newNode;
        this.rear = newNode;
    }
    dequeue() {
        if (!this.front) return "QUEUE UNDERFLOW";
        const val = this.front.value;
        this.front = this.front.next;
        return val
    }
    peek() {
        return this.front ? this.front.value : "QUEUE IS EMPTY";
    }
    print() {
        const list = []
        let current = this.front;
        while (current) {
            list.push(current.value);
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
