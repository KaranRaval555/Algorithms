class Node {
    constructor(value) {
        this.value = value
        this.next = null;
    }
}

class LinkedList {

    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

    size() {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count
    }

    front() {
        return this.head ? this.head.value : null;
    }

    back() {
        if (!this.head) return null;
        let current = this.head;
        while (current.next) {
            current = current.next
        }
        return current.value
    }

    at(index) {
        let current = this.head;
        while (index > 0 && current) {
            current = current.next
            index--;
        }
        return current ? current.value : null;
    }

    append(value) {
        const newNode = new Node(value);
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

    pop() {
        if (!this.head) return null;
        if (!this.head.next) {
            const val = this.head.value
            this.head = null;
            return val;
        }
        let current = this.head;
        while (current.next.next) {
            current = current.next
        }
        const val = current.next.value
        current.next = null;
        return val
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.next = this.head;
        this.head = newNode;
    }

    popFront() {
        if (!this.head) return null;
        const val = this.head.value
        this.head = this.head.next
        return val;
    }

    insert(index, value) {
        if (index === 0) {
            this.prepend(value)
            return;
        }

        if (!this.head) return;

        let current = this.head;
        let prev = null;

        while (index > 0 && current) {
            prev = current
            current = current.next
            index--;
        }
        if (index > 0) return;

        const node = new Node(value)
        prev.next = node;
        node.next = current
    }

    delete(value) {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
                return;
            }
            current = current.next
        }
    }

    search(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) return true;
            current = current.next
        }
        return false;
    }

    reverse() {
        let current = this.head;
        let prev = null;

        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current
            current = next;
        }
        this.head = prev;
    }

    print() {
        let current = this.head;
        const nodes = []
        while (current) {
            nodes.push(current.value)
            current = current.next
        }
        console.log(nodes.join(' -> '))
    }
}

const linkedList = new LinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
console.log(linkedList.at(2))
console.log(linkedList.size())
linkedList.prepend(5);
linkedList.print(); // Output: 5 -> 10 -> 20 -> 30
linkedList.delete(20);
linkedList.print(); // Output: 5 -> 10 -> 30
linkedList.popFront()
linkedList.print(); // Output: 5 -> 10 -> 30
console.log(linkedList.search(10)); // Output: true
console.log(linkedList.search(50)); // Output: false
linkedList.append(40);
linkedList.append(50);
linkedList.print()
console.log(linkedList.pop())
linkedList.print()
console.log(linkedList.front())
console.log(linkedList.back())
linkedList.print()
linkedList.insert(2, 5)
linkedList.insert(0, 15)
linkedList.print()
linkedList.reverse()
linkedList.print()
linkedList.reverse()
linkedList.print()
