const request = require('request');
const fs = require('fs');
request(`http://www.example.edu`, (error, response,body) => {  
  fs.writeFile('download.txt', body,err => {
    if (err) {
      console.error(err);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ./index.html`);
  });
});