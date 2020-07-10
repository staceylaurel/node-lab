const path = require("path");
const fs = require("fs");
const rp = require('request-promise');

let dataPath = path.join(__dirname, '../reddit.json');
const essentials = []

rp('https://reddit.com/r/popular.json')
    .then(pizza => {
        const popular = JSON.parse(pizza)
        popular.data.children.forEach(article => {
            essentials.push({
                id: article.data.id, url: article.data.url, subreddit: article.data.subreddit, title: article.data.title,
            }) //reads the speficied data from the list of data on the reddit website
        })
        console.log(essentials)
        fs.writeFile(dataPath, JSON.stringify(essentials), (err) => {
            if (err) console.log(err)
            console.log("Well done!")
        }) //creates and logs the read data and writes it to the reddit.json file
    })
