export const map = <T>([first, ...rest]: T[], fn: (x: T) => T) =>
    first === undefined ? [] : [fn(first), ...map(rest, fn)]

export const filter = <T>([first, ...rest]: T[], pred: (x: T) => boolean) =>
    first === undefined ? [] : pred(first) ? [first, ...filter(rest, pred)] : filter(rest, pred)

// foldLeft/reduceLeft
export const reduce = <T>([first, ...rest]: T[], reducer: (acc: T, x: T) => T, initialVal: T): T => // top-down
    first === undefined ? initialVal : reduce(rest, reducer, reducer(initialVal, first))

// foldRight
export const reduceRight = <T>([first, ...rest]: T[], reducer: Reducer<T>, initialVal: T): T => // bottom-up
    first === undefined ? initialVal : reducer(reduceRight(rest, reducer, initialVal), first)

export const forEach = <T>([first, ...rest]: T[], fn: Func<T>): void =>
    first === undefined ? undefined : (fn(first), forEach(rest, fn))

export const compose = <T>(...fns) =>
    <T>(value: T) => reduceRight(fns, (acc, fn) => fn(acc), value)

export const pipe = (...fns) =>
    <T>(value: T) => reduce(fns, (acc, fn) => fn(acc), value)

export const member = <T>([first, ...rest]: T[], x: T): boolean =>
    first === undefined ? false :
        first === x ? true : member(rest, x)

export const intersection = <T>([first, ...rest]: T[], array: T[]): T[] =>
    first === undefined ? [] :
        member(array, first) ? [first, ...intersection(rest, array)] : intersection(rest, array)

export const combine = <T>([first, ...rest]: T[], array2: T[]) =>
    first === undefined ? array2 :
        [first, ...combine(rest, array2)]

export const makeSet = <T>([first, ...rest]: T[]): T[] =>
    first === undefined ? [] :
        !member(rest, first) ? [first, ...makeSet(rest)] : makeSet(rest)

export const diff = <T>([first, ...rest]: T[], array: T[]) =>
    first === undefined ? [] :
        !member(array, first) ? [first, ...diff(rest, array)] : diff(rest, array)

export const symmetricDiff = <T>(array1: T[], array2: T[]): T[] => combine(diff(array1, array2), diff(array2, array1))

export const union = (array1, array2) => combine(symmetricDiff(array1, array2), intersection(array1, array2))

export const countBy = (fn) =>
    (array) =>
        reduce(array, (acc, x) => {
            const result = fn(x)
            return !acc[result] ?
                { ...acc, [result]: 1 } :
                { ...acc, [result]: acc[result] + 1 }
        }, {})

export const groupBy = (fn) =>
    (array) =>
        reduce(array, (acc, x) => {
            const result = fn(x)
            return !acc[result] ?
                { ...acc, [result]: [x] } :
                { ...acc, [result]: [...acc[result], x] }
        }, {})

// const some = ([first, ...rest], test) =>
//
// const every = ([first, ...rest], test) =>
//
// const once = (fn, result = 0) =>
//
// const append = (val, array) =>
//
// const find = ([first, ...rest], predicate) =>
//
// const flatmap = (array, callback) =>
//
// const scan = (array, callback, initialValue) =>
//
// const add = (x, y) =>
//
//
// const mapReduce = (array, fn) =>
//
// const filterReduce = (array, predicate) =>

// range
// implement map and filter in terms of reduce and range function
// mapObj,filterObj and reduceObj using reduce as more specialized functions for objects
// trampoline
// transducer watch rich hickey talk
// write unit tests for each of the functions
