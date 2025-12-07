type Func<T> = (x: T) => T
type Pred<T> = (x: T) => boolean
type Reducer<T> = (acc: T, x: T) => T
type NestedArray<T> = Array<T | NestedArray<T>>;


// 4Clojure problems

const lastElement = <T>([first, ...rest]: T[]): T | undefined =>
    rest.length === 0 ? first : lastElement(rest)

const penultimateElement = <T>([first, ...rest]: T[]): T | undefined =>
    rest.length === 1 ? first : penultimateElement(rest)

const nthElement = <T>([first, ...rest]: T[], n: number): T | undefined =>
    n === 0 ? first : nthElement(rest, n - 1)

const count = <T>([first, ...rest]: T[]): number =>
    first === undefined ? 0 : 1 + count(rest)

const reverse = <T>([first, ...rest]: T[]): T[] =>
    first === undefined ? [] : [...reverse(rest), first]

const sum = <T extends number>([first, ...rest]: T[]): number =>
    first === undefined ? 0 : first + sum(rest)

const oddNumbers = (arr: number[]): number[] =>
    filter(arr, x => x % 2 !== 0)

const fib = (n: number): number =>
    n < 2 ? n : fib(n - 1) + fib(n - 2)

const fibSeq = (n: number): number[] =>
    n === 1 ? [] : [...fibSeq(n - 1), fib(n - 1)]

const palindrome = <T>([first, ...rest]: T[]): boolean =>
    rest.length < 2 ? true : first === lastElement(rest) && palindrome(rest.slice(0, -1))

const flatten = <T>([first, ...rest]: NestedArray<T>): T[] =>
    first === undefined ? [] :
        Array.isArray(first) ?
            [...flatten(first), ...flatten(rest)] :
            [first, ...flatten(rest)]

const compress = <T>([first, ...rest]: T[]): T[] =>
    first === undefined ? [] :
        first !== rest[0] ? [first, ...compress(rest)] : compress(rest)

const intersect = ([first, ...rest], array2) =>
    first === undefined
        ? []
        : array2.includes(first)
            ? [first, ...intersect(rest, array2)]
            : intersect(rest, array2);

const intersection = ([first, ...rest]) =>
    first === undefined ? first : intersect(first, intersection(rest));

const combine = (array1, array2) => [...array1, ...array2];

const makeSet = ([first, ...rest]) =>
    first === undefined
        ? []
        : rest.includes(first)
            ? makeSet(rest)
            : [first, ...makeSet(rest)];

const union = (array1, array2) => makeSet(combine(array1, array2));

const unionAll = ([first, ...rest]) =>
    first === undefined ? first : union(first, unionAll(rest));

const once =
    (fn, result = 0) =>
        (value) =>
            result === 0 ? (result = fn(value)) : result;

const append = (val, array) => [...array, val];

const find = ([first, ...rest], predicate) =>
    first === undefined
        ? undefined
        : predicate(first)
            ? first
            : find(rest, predicate);

const flatmap = (array, callback) => flatten(array.map(callback));

const scan = (array, callback, initialValue) =>
    reduce(array, (acc, x) => [...acc, callback(acc[acc.length - 1], x)], [
        initialValue,
    ]);

const add = (x, y) => y ? x + y : (z) => x + z


const mapReduce = (array, fn) => reduce(
    array,
    (acc, x) => [...acc, fn(x)],
    []
)

const filterReduce = (array, predicate) => reduce(
    array,
    (acc, x) => predicate(x) ? [...acc, x] : []
)


// implement map and filter in terms of reduce and range function
// mapObj,filterObj and reduceObj using reduce as more specialized functions for objects
// trampoline
// transducer watch rich hickey talk
// write unit tests for each of the functions
