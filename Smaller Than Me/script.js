function smaller(nums = []) {
    const result = nums.map((num, index, self) => {
        const rightSide = self.slice(index+1).filter(item => item < num).length
        return rightSide
    })
    return result
}

smaller([5, 4, 3, 2, 1])
smaller([1, 2, 0])