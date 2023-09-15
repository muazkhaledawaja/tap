// i have two solutions for this problem


const twoSum1 = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (target - nums[i] === nums[j]) {
                return [i, j];
            }
        }
    }
    return [];
};


const twoSum2 = (nums, target) => {
    const numIndexMap = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numIndexMap[complement] !== undefined) {
            return [numIndexMap[complement], i];
        }

        numIndexMap[nums[i]] = i;
    }

    return [];
};