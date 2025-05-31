// The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

function auto_house_assigner(any) {
    for (let x of any) {

        if (x.length < 6) {
            console.log(`${x} belong to Gryffindor`);
        }
        else if (x.length > 6 && x.length < 8) {
            console.log(`${x} belong to Hufflepuff`)
        }
        else if (x.length > 8 && x.length < 12) {
            console.log(`${x} belong to Ravenclaw`)
        }
        else {
            console.log(`${x} belong to Slytherin`)
        }
    }
}
auto_house_assigner([
    "Happy",
    "Mahi",
    "Dad",
    "Ashwin",
    "Mommy",
    "Zoe",
    "Leo",
    "Kai",
    "Maya",
    "Isla",
    "Liam",
    "Olivia",
    "Eleanor",
    "Benjamin",
    "Sebastian",
    "Maximiliano",
    "Alexander",
    "Charlotte",
    "Ava",
    "Maddie",
    "Jonathan",
    "Eliza",
    "Theo",
    "Amelia",
    "Christopher"
])