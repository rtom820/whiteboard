const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");
const server = app.listen(8000, function() {
  console.log("listening on port 8000");
})

app.use(bodyParser.json());

app.use(express.static( __dirname + "/public/dist/public" ));

require("./server/config/mongoose.js");
require("./server/config/routes.js")(app);

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

module.exports = server;

