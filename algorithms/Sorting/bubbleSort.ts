import { swap } from "../../utils.ts"

export function bubbleSort(nums: number[]) {
    let swapped: boolean;
    for (let i = 0; i < nums.length; i++) {
        swapped = false
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] > nums[j + 1]) {
                swap(nums, j, j + 1)
                swapped = true
            }
        }
        if (!swapped) return nums
    }
    return nums
}
