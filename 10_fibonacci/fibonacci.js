const fibonacci = function(num) {
    if (num < 0) return "OOPS";
     
    const nums = [0, 1];
    for (let i = 2; i <= num; i++) {
        nums.push(nums[i - 1] + nums[i - 2])
    }
    return nums[nums.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
