// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.


function doubler(any){
    let newer = []
    for (let i = 0; i  < any.length; i++) {
        if (any[i] !== any[i - 1]) {
            newer.push(any[i])
        }
    }
    console.log(newer)
    
}
doubler([2, 2, 3, 4, 4, 4, 5, 6, 6, 7])
