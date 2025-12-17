class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Bucket {
    constructor() {
        this.head = new Node(-1);
    }

    exists(value) {
        let curr = this.head;
        while (curr) {
            if (curr.value === value) {
                return true;
            }
            curr = curr.next;
        }
        return false;
    }

    insert(key) {
        if (!this.exists(key)) {
            const newNode = new Node(key, this.head.next)
            this.head.next = newNode;
        }
    }

    delete(key) {
        let prev = this.head;
        let curr = this.head.next;
        while (curr) {
            if (curr.value === key) {
                prev.next = curr.next;
                return null;
            }
            prev = curr;
            curr = curr.next;
        }
        return null;
    }
}

class HashSet {
    constructor() {
        this.keyRange = 997;
        this.bucket = [];

        for (let i = 0; i < this.keyRange; i++) {
            this.bucket[i] = new Bucket();
        }
    }

    hash(key) {
        return key % this.keyRange;
    }

    add(key) {
        let index = this.hash(key);
        this.bucket[index].insert(key)
    }

    remove(key) {
        let index = this.hash(key);
        this.bucket[index].delete(key)
    }

    contains(key) {
        let index = this.hash(key);
        return this.bucket[index].exists(key)
    }
}
