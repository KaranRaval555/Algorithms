#include <iostream>

#define MAX 5

struct Stack {
    int items[MAX];
    int top;
};

bool isEmpty(Stack *s) {
    return s -> top <= 0;
}

bool isFull(Stack *s) {
    return s -> top >= MAX;
}

void push(Stack *s, int newItem) {
    if (isFull(s)) {
        std::cout << "STACK OVERFLOW" << '\n';
        return;
    }
    s->items[s->top] = newItem;
    s->top++;
}

int pop(Stack *s) {
    if (isEmpty(s)) {
        std::cout << "STACK UNDERFLOW" << '\n';
    }
    int item = s->items[s->top-1];
    s->top--;
    return item;
}

int size(Stack *s){
    return s -> top;
}

void emptyStack(Stack *s) {
    s -> top = 0;
}

void printStack(Stack *s) {
    std::cout << "Stack: " << '\n';
    for (int i = 0; i < s->top ; i++) {
        std::cout << s->items[i] << '\n';
    }
}

int main () {
    Stack *s = (Stack *)malloc(sizeof(Stack));
    emptyStack(s);

    push(s, 1);
    push(s, 2);
    push(s, 3);
    printStack(s);
    std::cout << "removed item:" << pop(s) << '\n';
    printStack(s);

    return 0;
}
