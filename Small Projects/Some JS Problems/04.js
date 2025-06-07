// The Password Validator: You are building a password validation feature. Create a function that checks if a given password meets the following criteria: at least 8 characters long, contains both uppercase and lowercase letters, and includes at least one digit.

function pass_vailder(value){
    if (value.length < 8) {
        console.log('Please make it 8 digits');
    }
    let num =false
    let lowerword=false
    let upperword=false
    for (const x of value) {
        if (x >= "a" && x <= "z") {
            lowerword=true
        }
        else if(x >= "A" && x <= "Z") {
            upperword=true
        }    
        else if (x >= "0" && x <= "9") {
            num = true
        }
    }

        if (num === true && upperword === true && lowerword === true) {
            console.log("Password Set")
        } 

        else {
            console.log("Password must have uppercase, lowercase, and a digit");
        }
}

pass_vailder("Hellooooooo")
