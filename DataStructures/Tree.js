class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode;
        }
        else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (!root.left) {
                root.left = newNode;
                return;
            }
            this.insertNode(root.left, newNode)
        }
        if (newNode.value > root.value) {
            if (!root.right) {
                root.right = newNode;
                return;
            }
            this.insertNode(root.right, newNode)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    // deleteNode(root, value) {
    //     if(!root || !(root.left && root.right) ) return null;
    //     if(value < root.value) {
    //         root.left = this.deleteNode(root.left, value)
    //     }
    //     else {
    //         root.right = this.deleteNode(root.right, value)
    //     }
    //     if(!root.left) return root.right
    //     if(!root.right) return root.left
    //
    //     return root;
    // }

    search(root, value) {
        if (!root) return false;
        if (root.value === value) {
            return true;
        }
        else if (value < root.value) {
            return this.search(root.left, value);
        }
        else {
            return this.search(root.right, value)
        }
    }

    preOrder(root) {
        if (!root) return;
        console.log(root.value)
        this.preOrder(root.left)
        this.preOrder(root.right)
    }

    inOrder(root) {
        if (!root) return;
        this.inOrder(root.left)
        console.log(root.value)
        this.inOrder(root.right)
    }

    postOrder(root) {
        if (!root) return;
        this.postOrder(root.left)
        this.postOrder(root.right)
        console.log(root.value)
    }

    bfs() {
        const queue = [this.root];
        while (queue.length) {
            let curr = queue.shift();
            console.log(curr.value)
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    min = (root) =>
        (!root.left)
            ? root.value
            : this.max(root.left)

    max = (root) =>
        (!root.right)
            ? root.value
            : this.max(root.right)

    print() {
        console.log(this.root)
    }
}

const bst = new BinarySearchTree()

console.log(bst.isEmpty())
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)
console.log(bst.isEmpty())
bst.print()
console.log(bst.search(bst.root, 15));
console.log(bst.search(bst.root, 1));
bst.postOrder(bst.root)
bst.print()
bst.bfs()
console.log("min", bst.min(bst.root))
console.log("max", bst.max(bst.root))
