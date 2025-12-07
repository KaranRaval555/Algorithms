class Stack {
    constructor() {
        this.data = []
        this.count = 0;
    }
    isEmpty() {
        return this.count === 0;
    }
    size() {
        return this.count
    }
    push(item) {
        this.data[this.count++] = item
    }
    pop() {
        if (this.isEmpty()) return "STACK UNDERFLOW!";
        const ele = this.data[--this.count]
        return ele
    }
    peek() {
        return this.isEmpty() ? "STACK IS EMPTY" : this.data[this.count - 1]
    }
    print() {
        console.log(this.data.slice(0, this.count).join(" "))
    }
}

const stack = new Stack();
stack.push(1)
stack.push(2)
stack.push(3)
stack.print()
console.log(stack.pop())
console.log(stack.peek())
stack.print()
console.log("count:", stack.size())
console.log(stack.pop())
console.log(stack.peek())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.isEmpty())
console.log(stack.size())
console.log(stack.peek())
