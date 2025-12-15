import { readFileSync } from "node:fs"

const file = readFileSync("./input.txt", 'utf8')

const input: string[] = Array.from(file.trim())

const move = (x: string): number => x === '(' ? 1 : -1

const partOne = () => input.reduce((acc: number, x) => acc + move(x), 0)

const partTwo = () => {
    let floor = 1
    return input.findIndex(c => (floor += move(c)) === -1)
}

console.log(partOne())
console.log(partTwo())
