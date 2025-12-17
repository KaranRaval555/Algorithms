import { readFileSync } from 'node:fs'

const input = readFileSync('./input.txt', 'utf8').trim().split('\n')

const partOne = (inp: string[]) => {

    const invalidStrings = /(ab|cd|pq|xy)/
    const doubleChar = /(.)\1/
    const vowels = /[aeiou]/g

    const hasThreeVowels = (s: string) =>
        (s.match(vowels)?.length ?? 0) >= 3

    const isNice = (s: string) =>
        !invalidStrings.test(s) &&
        doubleChar.test(s) &&
        hasThreeVowels(s)

    return inp.filter(isNice).length
}

const partTwo = (inp: string[]) => {
    const pattern1 = /(.{2}).*\1/
    const pattern2 = /.*(.).\1.*/

    const isNice = (s: string) =>
        pattern1.test(s) && pattern2.test(s)

    return inp.filter(isNice).length
}

console.log(partOne(input))
console.log(partTwo(input))
