// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. text.pdf
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

const path = require("path")
const fs = require("fs")
let files = fs.readdirSync("./Clear Culter/data")

for (const i of files) {
    let ext = path.extname(i)

    if (ext === ".jpg") {
        fs.copyFileSync(`./Clear Culter/Data/${i}`, `./Clear Culter/Organized/JPGs/${i}`)
    }
    else if (ext === ".png") {
        fs.copyFileSync(`./Clear Culter/Data/${i}`, `./Clear Culter/Organized/PNGs/${i}`)
    }
    else if (ext === ".pdf") {
        fs.copyFileSync(`./Clear Culter/Data/${i}`, `./Clear Culter/Organized/PDFs/${i}`)
    }
    else if (ext === ".zip") {
        fs.copyFileSync(`./Clear Culter/Data/${i}`, `./Clear Culter/Organized/ZIPs/${i}`)
    }
    else{
        fs.copyFileSync(`./Clear Culter/Data/${i}`, `./Clear Culter/Organized/Others/${i}`)
    }
}

