type Cons = {
    head: number;
    tail?: Cons;
}
export const cons = (head: number, tail: Cons | undefined) => ({ head, tail });

export const EMPTY = undefined


const linkedList: Cons = cons(1, cons(2, cons(3, cons(4, cons(5, EMPTY)))));

const isEmpty = (list: Cons) => list === EMPTY

const head = (list: Cons) => !isEmpty(list) ? list.head : EMPTY

const tail = (list: Cons) => !isEmpty(list) ? list.tail : EMPTY

const length = (list: Cons): number => isEmpty(list) ? 0 : 1 + length(list.tail);

const first = ({ first, rest }) => first;
const rest = ({ first, rest }) => rest;

const reverse = (node, delayed = EMPTY) =>
    node === EMPTY
        ? delayed
        : reverse(rest(node), { first: first(node), rest: delayed });

const mapWith = (fn, node, delayed = EMPTY) =>
    node === EMPTY
        ? reverse(delayed)
        : mapWith(fn, rest(node), { first: fn(first(node)), rest: delayed });

const at = (index, list) =>
    index === 0
        ? first(list)
        : at(index - 1, rest(list));

const set = (index, value, list, originalList = list) =>
    index === 0
        ? (list.first = value, originalList)
        : set(index - 1, value, rest(list), originalList)
