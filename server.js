/* === External Modules === */
const express = require("express");
const path = require("path");

/* === Internal Modules === */
const bandController = require("./controllers/band");

/* === Instanced Modules === */
const app = express();

/* === Middleware === */
// body parsing middle
app.use(express.json());
// server public directory
app.use(express.static(path.join(__dirname, "public")));

/*
  req - "/" + "GET"

  execute(callback){
    let req={}
    let res={}
    let map = {
      0: callback,
      1: callback2
      2: callback3
    }

    callback(req,res,callback)
  }

*/

// custom url logger
app.use(function (req, res, next) {
  console.log(req.url);
  next();
});

/* === Routes === */

/*
  request 
  - url path -> /test 
  - method 
      - GET
        - query params ?search=cat+gifs
        - url params /student/:id 
      - POST
          - body data 
      - PUT 
        - body data
      - PATCH
        - body data
      - DELETE
*/

//== api routes 

// bands
app.get("/api/v1/bands", bandController.index);


// react site served 
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

/* === Server Bind === */
//Bind our server to a port

// .listen(number, ?callback)
app.listen(4000, function () {
  console.log("Let's get this music goin~");
});
