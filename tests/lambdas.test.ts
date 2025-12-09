import { map, filter, reduce, reduceRight, forEach, compose, pipe, member, intersection, combine, makeSet, diff, symmetricDiff, union, countBy, groupBy, some, every, mapReduce, filterReduce, once, append, find, flatten, flatmap } from "../FP/lambdas.js"
import { describe, expect, it } from 'vitest';

describe('Pure lambda functions', () => {
    const numbers = [1, 2, 3, 4, 5]
    const names = ["Linus Torvalds", "Richard Stallman", "John Carmack"]
    it('Map', () => {
        expect(map(numbers, (x: number) => x * x)).toEqual([1, 4, 9, 16, 25])
        expect(map(names, (fullName: string) => fullName.split(' ')[0])).toEqual(["Linus", "Richard", "John"])
    })
    it('Filter', () => {
        expect(filter(numbers, (x: number) => x % 2 === 0)).toEqual([2, 4])
        expect(filter(names, (name: string) => name.includes('s'))).toEqual(["Linus Torvalds"])
    })
    it('Reduce', () => {
        expect(reduce(numbers, (acc, x) => acc + x, 0)).toEqual(15)
        expect(reduce(names, ((acc: string[], fullName: string) => [...acc, fullName.split(' ')[0]]), [])).toEqual(["Linus", "Richard", "John"])
    })
    it('ReduceRight', () => {
        expect(reduceRight(names, ((acc: string[], fullName: string) => [...acc, fullName.split(' ')[0]]), [])).toEqual(["John", "Richard", "Linus"])
        expect(reduceRight(numbers, (acc, x) => acc + x, 0)).toEqual(15)
    })
    it('MapReduce', () => {
        expect(mapReduce(numbers, (x: number) => x * x)).toEqual([1, 4, 9, 16, 25])
        expect(mapReduce(names, (fullName: string) => fullName.split(' ')[0])).toEqual(["Linus", "Richard", "John"])
    })
    it('FilterReduce', () => {
        expect(filterReduce(numbers, (x: number) => x % 2 === 0)).toEqual([2, 4])
        expect(filterReduce(names, (name: string) => name.includes('s'))).toEqual(["Linus Torvalds"])
    })
    it('ForEach', () => {
        expect(forEach(names, console.log))
    })
    it('Compose', () => {
        expect(compose((x) => x + 2, (x) => x - 1, (x) => x * x)(5)).toEqual(26)
    })
    it('Pipe', () => {
        expect(pipe((x) => x + 2, (x) => x - 1, (x) => x * x)(5)).toEqual(36)
    })
    it('Member', () => {
        expect(member(numbers, 5))
        expect(member(names, "Linus Torvalds"))
    })
    it('Intersection', () => {
        expect(intersection(numbers, [1, 4, 5, 7, 8, 10, 2])).toEqual([1, 2, 4, 5])
    })
    it('Combine', () => {
        expect(combine(names, names)).toEqual(["Linus Torvalds", "Richard Stallman", "John Carmack", "Linus Torvalds", "Richard Stallman", "John Carmack"])
    })
    it('Set', () => {
        expect(makeSet(combine(numbers, numbers))).toEqual([1, 2, 3, 4, 5])
    })
    it('Difference', () => {
        expect(diff([1, 30, 4, 6, 50, 2], numbers)).toEqual([30, 6, 50])
    })
    it('SymmetricDifference', () => {
        expect(symmetricDiff([1, 30, 4, 6, 50, 2], numbers)).toEqual([30, 6, 50, 3, 5])
    })
    it('Union', () => {
        expect(union([1, 30, 4, 6, 50, 2], numbers)).toEqual([30, 6, 50, 3, 5, 1, 4, 2])
    })
    it('CountBy', () => {
        const numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
        const letters = ['a', 'b', 'A', 'a', 'B', 'c'];
        expect(countBy(Math.floor)(numbers)).toEqual({ '1': 3, '2': 2, '3': 1 })
        expect(countBy((x) => x.toLowerCase())(letters)).toEqual({ 'a': 3, 'b': 2, 'c': 1 })
    })
    it('GroupBy', () => {
        const people = [
            { name: "Alice", age: 25, city: "New York" },
            { name: "Bob", age: 30, city: "London" },
            { name: "Charlie", age: 25, city: "New York" },
            { name: "David", age: 35, city: "London" },
        ];
        expect(groupBy(person => person.city)(people)).toEqual({
            "New York": [
                { name: "Alice", age: 25, city: "New York" },
                { name: "Charlie", age: 25, city: "New York" }
            ],
            "London": [
                { name: "Bob", age: 30, city: "London" },
                { name: "David", age: 35, city: "London" }
            ]
        })
    })
    it('Some', () => {
        expect(some([1, 3, 5, 7, 2], (element) => element % 2 === 0)).toEqual(true)
    })
    it('Every', () => {
        expect(every([1, 3, 5, 7], (element) => element % 2 !== 0)).toEqual(true)
    })
    it('Once', () => {
        const addOneOnce = once(x => x + 1)
        expect(addOneOnce(10)).toEqual(11)
        expect(addOneOnce(50)).toEqual(11)
    })
    it('Append', () => {
        expect(append([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4, 5])
    })
    it('Find', () => {
        expect(find([1, 2, 4, 5], (x) => x > 4)).toEqual(5)
    })
    it('Flatten', () => {
        expect(flatten([1, [2, 4], [4], [[[5]]], [1, 1, 3], [4, [40]]])).toEqual([1, 2, 4, 4, 5, 1, 1, 3, 4, 40])
    })
    it('FlatMap', () => {
        expect(flatmap([1, 2, 3, 4], (x) => [x * 2])).toEqual([2, 4, 6, 8])
    })
})

