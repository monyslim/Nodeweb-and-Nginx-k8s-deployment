const express = require("express");
const axios = require("axios");
const server = express();


server.get("/", (request, response) => {

    response.send({
        "message": "This is Home Page"
    })

});


server.get("/backend", async (request, response) => {

    const result = await axios.get("http://nginx")

    response.send(result.data)

})


server.listen("4141", () => console.log('Server is listening on port 4141'))