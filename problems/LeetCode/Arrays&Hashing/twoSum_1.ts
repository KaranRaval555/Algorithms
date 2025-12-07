function twoSum(nums: number[], target: number): number[] {
    const obj = {}
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if (diff in obj) return [obj[diff], i]
        obj[nums[i]] = i;
    }
};

const nums = [3, 3], target = 6
console.log(twoSum(nums, target))
