export function linearSearch(nums: number[], key: number): number {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === key) return i;
    }
    return -1;
}
