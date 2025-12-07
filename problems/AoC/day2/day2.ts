import { readFileSync } from 'node:fs'

const file = readFileSync('input.txt', 'utf8').trim()

const input = file.split(',').map((range: string) => range.split('-'))

const puzzle = (isNotValid: (s: string) => boolean) => {

    function findInvalidIds(start: number, end: number) {
        let ids = []
        for (let i = start; i <= end; i++) {
            if (isNotValid(i.toString())) {
                ids.push(i)
            }
        }
        return ids
    }

    const sum = (a: number[]) => a.reduce((acc, x) => acc + x, 0)

    const result = input.map(([first, last]: [string, string]) => findInvalidIds(parseInt(first), parseInt(last))).flat()

    return () => sum(result)
}


const partOne = puzzle((x: string) => x.length % 2 === 0 && x.substring(0, x.length / 2) === x.substring(x.length / 2))
const partTwo = puzzle((x: string) => /^([0-9]+)\1+$/.test(x))

console.log(partOne())
console.log(partTwo())

