const express = require('express');
const redis = require("redis");
const app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});

const redisClient = redis.createClient(
    10337,
    "",
    { no_ready_check: true }
);

redisClient.auth("", function (err) {
    if (err) throw err;
});

redisClient.on("connect", async function () {
    console.log("Connected to Redis..");
});

module.exports = {app,redisClient}
