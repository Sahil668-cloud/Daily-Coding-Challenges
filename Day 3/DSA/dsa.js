function findElement(arr) {
    let element
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        element = arr[i]
        newArr = arr.filter(item => item === element)
        if (newArr.length == 1) {
            break
        }
        else {
            element = -1
        }
    }
    console.log(element);
}

findElement([4, 5, 1, 2, 0, 4])