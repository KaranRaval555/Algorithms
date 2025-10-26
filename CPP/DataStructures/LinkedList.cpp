#include <cstdlib>
#include <iostream>
#include <ostream>

struct Node {
    int data;
    struct Node *next;
};

void insertAtBeg(Node **node, int value) {
    Node *newNode = (struct Node*)malloc(sizeof(**node)); 
    newNode->data = value;
    newNode->next = *node;

    *node = newNode;
}

void insertAfter(Node *prev, int value) {
    if (!prev) {
        std::cout << "Given node can't be NULL" << '\n';
    }
    Node *newNode = (struct Node*)malloc(sizeof(*prev)); 
    newNode->data = value;
    newNode->next = prev->next;
    prev->next = newNode;
}


void insertAtEnd(Node **node, int value) {
    Node *newNode = (struct Node*)malloc(sizeof(**node)); 
    newNode->data = value;
    newNode->next = NULL;

    Node *head = *node;

    if (!head) {
        *node = newNode;
        return;
    }

    while (head->next != NULL) {
        head = head->next;
    }

    head->next = newNode;
}

void deleteFromBeg(Node **node) {
    Node *head = *node;

    if (!head) {
        std::cout << "LIST IS EMPTY" << '\n';
        return;
    }

    head = head->next;
    *node = head;
}

void deleteFromEnd(Node **node) {
    Node *head = *node;

    if (!head) {
        std::cout << "LIST IS EMPTY" << '\n';
        return;
    }

    if (!head->next) {
        *node = NULL;
        free(*node);
        return;
    }

    while (head->next->next != NULL) {
        head = head->next;
    }

    head->next = NULL;
}

void deleteAtPos(Node **node, int key) {

    if (!*node) return;

    Node *head = *node;
    Node *prev;

    if (head && head->data == key) {
        *node = head->next;
        free(*node);
        return;
    }

    while (head && head->data != key ) {
        prev = head;
        head = head->next;
    }

    if (!head) return;

    prev->next = head->next;

    free(head);
}

void printList(Node *head) {

    if (!head) {
        std::cout << "LIST IS EMPTY" << '\n';
        return;
    }

    while (head != NULL) {
        std::cout << "Value: " << head->data << '\n';
        head = head->next;
    }
}

int main() {
    Node *head = NULL;
    insertAtEnd(&head, 5);
    insertAtEnd(&head, 10);
    insertAtBeg(&head, 4);
    insertAtBeg(&head, 3);
    insertAtBeg(&head, 1);
    insertAtBeg(&head, 0);
    insertAfter(head->next, 2);
    deleteFromBeg(&head);
    deleteFromEnd(&head);
    deleteFromBeg(&head);
    deleteFromEnd(&head);
    printList(head);
    deleteAtPos(&head, 3);
    printList(head);
    deleteAtPos(&head, 4);
    printList(head);
}
