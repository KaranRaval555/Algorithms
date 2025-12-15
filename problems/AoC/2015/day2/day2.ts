import { readFileSync } from 'node:fs';
import { sum } from "../../../../utils.ts"

const file = readFileSync('./input.txt', 'utf8').trim()

const input = file.split('\n').map((present: string) => present.split('x'))

const partOne = () =>
    input.reduce((total: number, present: string[]) => {
        const [l, w, h] = present.map(Number) as [number, number, number]
        const sides = [l * w, w * h, l * h]
        return total + 2 * sum(sides) + Math.min(...sides)
    }, 0)

const partTwo = () => {
    return input.reduce((total: number, present: string[]) => {
        const [l, w, h] = present.map(Number) as [number, number, number]
        const ribbon = 2 * (l + w + h)
        const bow = l * w * h;
        const requiredRibbon = ribbon - (Math.max(l, w, h) * 2)
        return total + requiredRibbon + bow
    }, 0)
}

console.log(partOne())
console.log(partTwo())
