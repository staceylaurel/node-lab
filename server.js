const path = require("path");
const fs = require("fs");

const chirpsPath = path.join(__dirname, './chirps.json')
console.log(chirpsPath);
console.log("above");

fs.readFile(chirpsPath, (err, data) => {
    if (err) console.log(err)
    console.log("inside READ file")
    const chirps = JSON.parse(data)
    chirps.push({ chirp: "Alexander Hamilton" }) //adding to the array in chirps.json file
    fs.writeFile(chirpsPath, JSON.stringify(chirps),(err) => {
        if (err) console.log(err)
        console.log("inside WRITE file")
    })//writes the push request and creates a new string in the array every request
})  
console.log("below");