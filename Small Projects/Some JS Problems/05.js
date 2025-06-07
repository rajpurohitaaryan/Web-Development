// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

function summing(arr) {
    let total = 0
    for (const x of arr) {
        if (x >= 0) {
            total += x
        } else {
            console.log(total);
        }

    }
}
summing([10, 20, 5, 3, -7, 12, 8])
summing([4, 15, 6, 0, -2, 9, 11])


