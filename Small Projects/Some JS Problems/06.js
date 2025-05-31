// The Vowel Counter: You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.

function vowel_counter(word) {
    let total = 0
    let lowerword =word.toLowerCase()
    for (const x of lowerword) {
        if (x === "a" || x==="e"|| x=== "i" || x==="o"|| x==="u") {
            total = total+1
        }
    }
    console.log(total);
    
}
vowel_counter("HiiiiWIWilou")