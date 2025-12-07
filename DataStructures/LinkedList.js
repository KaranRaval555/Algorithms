// interface NodeType<T> {
//     data: T;
//     next: T | null
// }
class Node {
    constructor(data) {
        this.data = data
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }
    append(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode
        }
        else {
            let current = this.head;
            while (current.next) {
                current = current.next
            }
            current.next = newNode;
        }
    }
    prepend(data) {
        const newNode = new Node(data)
        newNode.next = this.head;
        this.head = newNode;
    }

    delete(data) {
        if (!this.head) return;
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                return;
            }
            current = current.next
        }
    }

    search(data) {
        let current = this.head;
        while (current) {
            if (current.data === data) return true;
            current = current.next
        }
        return false;
    }

    print() {
        let current = this.head;
        const nodes = []
        while (current) {
            nodes.push(current.data)
            current = current.next
        }
        console.log(nodes.join(' -> '))
    }
}

const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
linkedList.prepend(5);
linkedList.print(); // Output: 5 -> 10 -> 20 -> 30
linkedList.delete(20);
linkedList.print(); // Output: 5 -> 10 -> 30
console.log(linkedList.search(10)); // Output: true
console.log(linkedList.search(50)); // Output: false
