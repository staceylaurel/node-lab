const path = require("path");
const fs = require("fs");
const rp = require("request-promise"); //similar to fetch that it requests server info and returns that info 

rp('https://reddit.com/r/popular.json')
    .then(data => {
        let articleList = JSON.parse(data); //parse reads the popular list of data on reddit

        articleList.data.children.forEach(article => {
            let ext = path.extname(article.data.url) //downloading each articles urls
            let pathName = article.data.id + ext  //downloading if they are a .jpg or .png and reads what they are 
            if (ext === '.jpg' || ext === '.png') {

                rp(article.data.url, { encoding: "base64" }) //base64 is Mike Tv in the TV room in Wonka's chocolate factory. Pixles broken downs and translates it into 0s and 1s into charcters 
                    .then(image => {
                        fs.writeFile(path.join(__dirname, `./downloads/${pathName}`), image, { encoding: "base64" }, err => {
                            if (err) console.log(err)
                        })
                    })
            }
        })
    })