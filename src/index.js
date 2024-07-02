import Browse from "./browse.js";
import fs from 'node:fs/promises';
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.resolve(__dirname, 'module.json');



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

fs.readFile(filePath, 'utf8')
.then((data) => {
    browser.browseModuleJson(data)
})
.catch((error) => {
    console.log(error)
})