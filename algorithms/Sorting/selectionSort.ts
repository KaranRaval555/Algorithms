import { swap } from "../../utils.ts"

export function selectionSort(nums: number[]) {
    for (let i = 0; i < nums.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) minIndex = j
        }
        if (minIndex !== i) swap(nums, i, minIndex)
    }
    return nums;
}