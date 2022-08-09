const express = require("express");

const server = express();

server.all("/", (req, res) =>{
    res.send("Kei Shirogane v2.2.0 is running!")
})

function keepAlive(){
server.listen(80, () =>{
    console.log("Server is ready at port 80")
})
}

module.exports = keepAlive