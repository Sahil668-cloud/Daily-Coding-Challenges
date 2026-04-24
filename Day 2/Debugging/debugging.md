# Problem: Fix the Loop

## Code
let arr = [1, 2, 3, 4];

for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i]);
}

## Issue
The loop prints an extra undefined value.

## Task
Fix the loop so it only prints valid elements.

## Expected Output
1
2
3
4