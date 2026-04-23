function secondLargest(arr) {
    let largest = 0
    let secondLargest = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
            continue
        }

    }
    const newArr = arr.filter(item => item !== largest)
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] > secondLargest) {
            secondLargest = newArr[i]
            continue
        }
    }
    console.log("Second Largest number: ", secondLargest);
}

secondLargest([45,45,464,6841,5,684,684,16,46,84,6,146,84,64,16,4,13,688,51,687,64,1,65])