const args = process.argv.slice(-2);

const fs = require('fs');
const request = require('request');

request(args[0], (error, response, body) => {
  fs.writeFile(args[1], body, err => {
    if (err) {
      console.log(err);
    }
    else if (body) {
    console.log(`Downloaded and saved ${response.headers['content-length']} to ${args[1]}`)
    }
  });
  return 
});
