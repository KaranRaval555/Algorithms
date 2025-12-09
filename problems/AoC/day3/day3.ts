import { readFileSync } from "node:fs"

const file = readFileSync('input.txt', 'utf-8').trim();

const batteries: string[] = file.split('\n');

function partOne() {
    let sum = 0;
    let max: number, secondLargest: number;
    let bank: string, joltage: string;
    for (let i = 0; i < batteries.length; i++) {
        joltage = "";
        max = 0;
        bank = batteries[i]!
        secondLargest = 1;
        for (let j = 0; j < bank.length; j++) {
            const digit = Number(bank[j])
            const maxDigit = Number(bank[max])
            const secondLargestDigit = Number(bank[secondLargest])
            if (digit > maxDigit && j < bank.length - 1) {
                max = j;
                secondLargest = j + 1
            }
            else if (digit > secondLargestDigit && j > max) {
                secondLargest = j;
            }
        }
        joltage = bank[max]! + bank[secondLargest]!
        sum += Number(joltage)
    }
    return sum
}

function partTwo() {
    let sum = 0;

    const findLargestJoltage = (s: string, ans: string): string => {
        if (ans.length === 12) return ans;
        if (ans.length + s.length === 12) return ans + s;
        const n1 = Number(s[0]);
        const n2 = Number(s[1]);
        if (n1 <= n2) {
            return findLargestJoltage(s.slice(1), ans)
        }
        return findLargestJoltage(s.slice(1), ans + s[0])
    }

    for (let i = 0; i < batteries.length; i++) {
        const result = findLargestJoltage(batteries[i]!, "")
        console.log(batteries[i], result)
        sum += Number(result)
    }
    return sum
}

// console.log(partOne())
console.log(partTwo())
