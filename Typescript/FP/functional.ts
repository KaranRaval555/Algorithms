const map = <I, O>([first, ...rest]: I[], callback: (x: I) => O): O[] =>
    first === undefined ? [] : [callback(first), ...map(rest, callback)];

const forEach = ([first, ...rest], callback) =>
    first === undefined ? undefined : (callback(first), forEach(rest, callback));

// foldl
const reduce = ([first, ...rest], callback, initialValue) =>
    first === undefined
        ? initialValue
        : reduce(rest, callback, callback(initialValue, first));

// foldr
const reduceRight = ([first, ...rest], callback, initialValue) =>
    first === undefined
        ? initialValue
        : callback(reduceRight(rest, callback, initialValue), first);

const filter = ([first, ...rest], predicate) =>
    first === undefined
        ? []
        : predicate(first)
            ? [first, ...filter(rest, predicate)]
            : filter(rest, predicate);

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

const countBy = (array, callback) =>
    reduce(
        array,
        (acc, x) => {
            const result = callback(x);
            return !acc[result]
                ? { [result]: 1, ...acc }
                : { ...acc, [result]: ++acc[result] };
        },
        {}
    );

const groupBy = (array, callback) =>
    reduce(
        array,
        (acc, x) => {
            const result = callback(x);
            return !acc[result]
                ? { ...acc, [result]: [x] }
                : { ...acc, [result]: [...acc[result], x] };
        },
        {}
    );

const flatten = (arrays) => reduce(arrays, (acc, x) => acc.concat(x), []);

const some = ([first, ...rest], test) =>
    first === undefined ? false : test(first) || some(rest, test);

const every = ([first, ...rest], test) =>
    first === undefined ? true : test(first) && every(rest, test);

const compose =
    (...fns) =>
        (value) =>
            reduceRight(fns, (acc, fn) => fn(acc), value);

const pipe =
    (...fns) =>
        (value) =>
            reduce(fns, (acc, fn) => fn(acc), value);

const once =
    (fn, result = 0) =>
        (value) =>
            result === 0 ? (result = fn(value)) : result;

const sum = (array) => reduce(array, (acc, x) => acc + x, 0);

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

// rambda.js
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

// trampoline

// write unit tests for each of the functions
