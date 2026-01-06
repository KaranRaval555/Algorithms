class Node {
    constructor(value) {
        this.value = value
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    isEmpty() {
        return this.head === null && this.tail === null
    }

    size() {
        let count = 0;
        let curr = this.head
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
        return this.tail ? this.tail.value : null;
    }

    at(index) {
        let curr = this.head;
        while (index > 0 && curr) {
            curr = curr.next
            index--
        }
        return curr ? curr.value : null
    }

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        if (!this.head.next) {
            newNode.prev = this.head;
            this.head.next = newNode;
            this.tail = newNode;
            return;
        }

        let curr = this.head;

        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        newNode.prev = curr;
        this.tail = newNode
    }

    pop() {
        if (!this.head) return null;
        if (!this.head.next) {
            const val = this.head.value;
            this.head = null;
            this.tail = null;
            return val;
        }

        let prev = null;
        let curr = this.head;

        while (curr.next) {
            prev = curr;
            curr = curr.next;
        }
        const val = curr.value;
        prev.next = null;
        curr.prev = null;
        this.tail = prev;
        return val;
    }

    prepend(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    popFront() {
        if (!this.head) return null;
        const next = this.head.next;
        const val = this.head.value;
        this.head.next = null;
        next.prev = null;
        this.head = next;
        return val;
    }

    insert(index, value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode
            this.tail = newNode
            return;
        }

        if (index > this.size()) return;

        if (index === 0) {
            this.prepend(value);
            return;
        }

        let prev = this.head;
        let curr = this.head.next;

        while (index > 0 && curr.next) {
            prev = curr;
            curr = curr.next;
            index--;
        }
        const next = curr.next;
        prev.next = newNode;
        newNode.next = next;
        newNode.prev = prev;
        next.prev = newNode;
    }

    delete(value) {
        if (!this.head) return null;

        if (this.head.value === value) {
            this.popFront()
            return;
        }

        let prev = null;
        let curr = this.head;
        while (curr.next) {
            if (curr.value === value) {
                const next = curr.next;
                prev.next = next;
                next.prev = prev;
                return;
            }
            prev = curr;
            curr = curr.next
        }
    }

    search(value) {
        let curr = this.head;
        while (curr) {
            if (curr.value === value) return true;
            curr = curr.next;
        }
        return false;
    }


    reverse() {
        let curr = this.head;
        let temp = null;

        while (curr) {
            // swap prev and next
            temp = curr.prev;
            curr.prev = curr.next;
            curr.next = temp;

            curr = curr.prev; // move using swapped pointer
        }

        // swap head and tail
        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }


    print() {
        let curr = this.head;
        const nodes = []
        while (curr) {
            nodes.push(curr.value)
            curr = curr.next;
        }
        console.log(nodes.join(' -> '))
    }
}



const list = new DoublyLinkedList();

/* ---------- EMPTY LIST ---------- */
console.log("empty:", list.isEmpty());
console.log("size:", list.size());
console.log("front:", list.front());
console.log("back:", list.back());
console.log("pop:", list.pop());
console.log("popFront:", list.popFront());
console.log("search(10):", list.search(10));
list.print();

/* ---------- BUILD LIST ---------- */
list.append(10);
list.append(20);
list.append(30);
list.prepend(5);
list.prepend(1);
list.print();

/* ---------- ACCESS ---------- */
console.log("at(0):", list.at(0));
console.log("at(2):", list.at(2));
console.log("at(4):", list.at(4));
console.log("at(10):", list.at(10));

console.log("front:", list.front());
console.log("back:", list.back());
console.log("size:", list.size());

/* ---------- INSERT ---------- */
list.insert(0, 0);      // head
list.insert(3, 15);     // middle
list.insert(7, 40);     // tail
list.insert(100, 999);  // out of bounds
list.print();

/* ---------- SEARCH ---------- */
console.log("search(15):", list.search(15));
console.log("search(999):", list.search(999));

/* ---------- DELETE ---------- */
list.delete(0);    // delete head
list.delete(30);   // delete middle
list.delete(40);   // delete tail
list.delete(999);  // not present
list.print();

/* ---------- POP ---------- */
console.log("pop:", list.pop());
list.print();

/* ---------- POP FRONT ---------- */
console.log("popFront:", list.popFront());
list.print();

/* ---------- REVERSE ---------- */
list.reverse();
list.print();

/* ---------- MORE MUTATIONS ---------- */
list.append(100);
list.prepend(-10);
list.insert(2, 50);
list.print();

/* ---------- DOUBLE REVERSE ---------- */
list.reverse();
list.reverse();
list.print();

/* ---------- FINAL STATE ---------- */
console.log("final size:", list.size());
console.log("final front:", list.front());
console.log("final back:", list.back());
console.log("empty:", list.isEmpty());

