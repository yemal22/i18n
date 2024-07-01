import Browse from "./browse.js";
import fs from 'node:fs/promises'

let browser = Browse.getInstance()

// fetch('./test.json')
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

fs.readFile('module.json', 'utf8')
.then((data) => {
    browser.browseModuleJson(data)
})
.catch((error) => {
    console.log(error)
})