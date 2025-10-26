#include <cstdlib>
#include <iostream>

#define MAX 5

struct Queue {
    int items[MAX];
    int front;
    int rear;
};

void emptyQueue(Queue *q) {
    q->rear = 0;
    q->front = -1;
}

bool isEmpty(Queue *q) {
    return q->front == -1;
}

bool isFull(Queue *q) {
    return q->rear == MAX;
}

void enQueue(Queue *q, int value) {
    if (isFull(q)) {
        std::cout << "QUEUE IS FULL" << '\n';
        return;
    }
    if (isEmpty(q)) {
        q->front = 0;
    }
    q->items[q->rear] = value;
    q->rear++;
}

int deQueue(Queue *q) {
    if (isEmpty(q)) {
        std::cout << "QUEUE IS EMPTY" << '\n';
        return -1;
    }
    int item = q->items[q->front];
    q->front++;
    return item;
}

void printQueue(Queue *q) {
    int i = q->front;
    std::cout << "Queue: " << '\n';
    while (i < q->rear) {
        std::cout << "Value: " << q->items[i] << '\n';
        i++;
    }
}

int main () {
    Queue *q = (Queue*) malloc(sizeof(Queue));
    emptyQueue(q);
    deQueue(q);

    enQueue(q, 1);
    enQueue(q, 2);
    enQueue(q, 3);
    enQueue(q, 4);
    enQueue(q, 5);

    enQueue(q, 5);

    printQueue(q);

    deQueue(q);

    printQueue(q);

    deQueue(q);

    printQueue(q);

    return 0;
}

// QUEUE IS EMPTY
// QUEUE IS FULL
// Queue: 
// Value: 1
// Value: 2
// Value: 3
// Value: 4
// Value: 5
// Queue: 
// Value: 2
// Value: 3
// Value: 4
// Value: 5
// Queue: 
// Value: 3
// Value: 4
// Value: 5
//

