const fs = require('fs');
fs.readFile("./data.json", "utf8", (err, jsonString) => {
    console.log(jsonString);
})