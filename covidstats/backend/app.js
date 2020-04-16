const express = require('express');
const https = require('https');
const cors = require('cors');
const app = express();

app.use(cors());
app.use("/api/stats",(req, res, next) => {
  let data = '';
  https.get('https://api.covid19india.org/v2/state_district_wise.json', (resp) => {
    // A chunk of data has been recieved.
    resp.on('data', (chunk) => {
      data += chunk;
    });
    // The whole response has been received. Print out the result.
    resp.on('end', () => {
      res.status(200).json(JSON.parse(data));
    });
  }).on("error", (err) => {
  console.log("Error: " + err.message);
  });
  // console.log('hello');
});
module.exports = app;