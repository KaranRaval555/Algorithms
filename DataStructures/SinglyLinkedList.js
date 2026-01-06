class Node {
    constructor(value) {
        this.value = value
        this.next = null;
    }
}

class SinglyLinkedList {

    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

    size() {
        let count = 0;
        let curr = this.head;
        while (curr) {
            count++;
            curr = curr.next;
        }
        return count
    }

    front() {
        return this.head ? this.head.value : null;
    }

    back() {
        if (!this.head) return null;
        let curr = this.head;
        while (curr.next) {
            curr = curr.next
        }
        return curr.value
    }

    at(index) {
        let curr = this.head;
        while (index > 0 && curr) {
            curr = curr.next
            index--;
        }
        return curr && index >= 0 ? curr.value : null;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode
        }
        else {
            let curr = this.head;
            while (curr.next) {
                curr = curr.next
            }
            curr.next = newNode;
        }
    }

    pop() {
        if (!this.head) return null;
        if (!this.head.next) {
            const val = this.head.value
            this.head = null;
            return val;
        }
        let curr = this.head;
        while (curr.next.next) {
            curr = curr.next
        }
        const val = curr.next.value
        curr.next = null;
        return val
    }

    prepend(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            return;
        }
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
        if (index < 0 || index > this.size()) return;

        if (index === 0) {
            this.prepend(value)
            return;
        }

        let curr = this.head;
        let prev = null;

        while (index > 0 && curr) {
            prev = curr
            curr = curr.next
            index--;
        }

        const node = new Node(value)
        prev.next = node;
        node.next = curr
    }

    delete(value) {
        if (!this.head) return;

        if (this.head.value === value) {
            this.head = this.head.next;
            return;
        }

        let curr = this.head;
        while (curr.next) {
            if (curr.next.value === value) {
                curr.next = curr.next.next;
                return;
            }
            curr = curr.next
        }
    }

    search(value) {
        let curr = this.head;
        while (curr) {
            if (curr.value === value) return true;
            curr = curr.next
        }
        return false;
    }

    reverse() {
        if (!this.head) return null;

        let curr = this.head;
        let prev = null;

        while (curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr
            curr = next;
        }
        this.head = prev;
    }

    print() {
        let curr = this.head;
        const nodes = []
        while (curr) {
            nodes.push(curr.value)
            curr = curr.next
        }
        console.log(nodes.join(' -> '))
    }
}

const linkedList = new SinglyLinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);
console.log(linkedList.at(2))
console.log(linkedList.size())
linkedList.prepend(5);
linkedList.print();
linkedList.delete(20);
linkedList.print();
linkedList.popFront()
linkedList.print();
console.log(linkedList.search(10));
console.log(linkedList.search(50));
linkedList.append(40);
linkedList.append(50);
linkedList.print()
console.log(linkedList.pop())
linkedList.print()
console.log(linkedList.front())
console.log(linkedList.back())
linkedList.print()
linkedList.insert(2, 5)
linkedList.print()
linkedList.insert(4, 15)
linkedList.print()
linkedList.reverse()
linkedList.print()
linkedList.reverse()
linkedList.print()
