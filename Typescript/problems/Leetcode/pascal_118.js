import { memoize } from "./memoize_2623.js"

const pascal = memoize((n, k) =>
    k === 0 || n === k ? 1 : pascal(n - 1, k - 1) + pascal(n - 1, k))

function generate(numRows) {
    // const array = []
    // for (let i = 0; i < numRows; i++) {
    //     array.push([pascal(numRows, i)])
    // }
    // return array
}
console.log(generate(2))
