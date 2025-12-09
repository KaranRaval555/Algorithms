import { swap } from "../../utils.ts";

export function insertionSort(nums: number[]) {
    for (let i = 0; i < nums.length - 1; i++) {
        let j = i + 1
        while (j >= 0 && nums[j - 1] > nums[j]) {
            swap(nums, j, j - 1)
            j--
        }
    }
    return nums;
}
