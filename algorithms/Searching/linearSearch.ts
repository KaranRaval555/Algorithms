function linear_search(array: number[], key: number): number {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === key) return i;
    }
    return -1;
}
