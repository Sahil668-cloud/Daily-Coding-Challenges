function moveZeros(arr) {
    const newArr = []
    let zeroCount = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            newArr.push(arr[i])
        }
        else if (arr[i] === 0) {
            zeroCount += 1
        }
    }

    for (let i = 0; i < zeroCount; i++) {
        newArr.push(0)
    }
    return newArr
}

console.log(moveZeros([0, 1, 0, 3, 5, 12, 0, 8]));