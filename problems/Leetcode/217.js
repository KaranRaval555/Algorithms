function containsDuplicate(nums) {
    const values = {}
    for (let i = 0; i < nums.length; i++) {
        const isDuplicate = values[nums[i]]
        if (isDuplicate) {
            return true
        }
        else {
            values[nums[i]] = true
        }
    }
    return false
};
