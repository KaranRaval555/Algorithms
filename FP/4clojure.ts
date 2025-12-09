type Func<T> = (x: T) => T
type Pred<T> = (x: T) => boolean
type Reducer<T> = (acc: T, x: T) => T
type NestedArray<T> = Array<T | NestedArray<T>>;


// 4Clojure problems

const lastElement = <T>([first, ...rest]: T[]): T | undefined =>
    rest.length === 0
        ? first
        : lastElement(rest)

const penultimateElement = <T>([first, ...rest]: T[]): T | undefined =>
    rest.length === 1
        ? first
        : penultimateElement(rest)

const nthElement = <T>([first, ...rest]: T[], n: number): T | undefined =>
    n === 0
        ? first
        : nthElement(rest, n - 1)

const count = <T>([first, ...rest]: T[]): number =>
    first === undefined
        ? 0
        : 1 + count(rest)

const reverse = <T>([first, ...rest]: T[]): T[] =>
    first === undefined
        ? []
        : [...reverse(rest), first]

const sum = <T extends number>([first, ...rest]: T[]): number =>
    first === undefined
        ? 0
        : first + sum(rest)

const oddNumbers = (arr: number[]): number[] =>
    arr.filter((x) => x % 2 !== 0)

const fib = (n: number): number =>
    n < 2
        ? n
        : fib(n - 1) + fib(n - 2)

const fibSeq = (n: number): number[] =>
    n === 0
        ? [0]
        : [...fibSeq(n - 1), fib(n)]
