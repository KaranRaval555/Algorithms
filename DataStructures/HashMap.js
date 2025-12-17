class Node {
    constructor(key, val, next = null) {
        this.key = key;
        this.val = val;
        this.next = next;
    }
}
class Bucket {
    constructor() {
        this.head = new Node(-1, -1)
    }

    find(key) {
        let curr = this.head;
        while (curr) {
            if (curr.key === key) return [curr.val, true];
            curr = curr.next;
        }
        return [-1, false];
    }

    add(key, val) {
        if (!this.find(key)[1]) {
            const newNode = new Node(key, val, this.head.next)
            this.head.next = newNode;
        }
        else {
            let curr = this.head;
            while (curr) {
                if (curr.key === key) {
                    curr.val = val;
                    return;
                }
                curr = curr.next;
            }
        }
    }

    delete(key) {
        let prev = this.head;
        let curr = this.head.next;

        while (curr) {
            if (curr.key === key) {
                prev.next = curr.next;
            }
            prev = curr;
            curr = curr.next;
        }
        return null;
    }
}

class HashMap {
    constructor() {
        this.keyRange = 997;
        this.buckets = [];

        for (let i = 0; i < this.keyRange; i++) {
            this.buckets[i] = new Bucket();
        }
    }

    hash(key) {
        return key % this.keyRange;
    }

    get(key) {
        const index = this.hash(key);
        return this.buckets[index].find(key)[0]
    }

    put(key, value) {
        const index = this.hash(key);
        this.buckets[index].add(key, value)
    }

    remove(key) {
        const index = this.hash(key);
        this.buckets[index].delete(key)
    }

}
