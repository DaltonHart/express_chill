/* === External Modules === */
const express = require("express");

/* === Internal Modules === */

/* === Instanced Modules === */
const app = express();


/* === Middleware === */
// body parsing middle 
// app.use(express.json()); // hey express. acccept json as body data

// custom url logger
app.use(function(req,res,next){
  console.log(req.url);
  next();
})


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

// .get("url", callback)
app.get("/", function(req,res){
  console.log({
    body: req.body,
    params: req.params,
    query: req.query
  });

  res.json({message: "Hello World"});
});

const cats = [
  {
    name: "Elenore"
  },
  {
    name: "Eldritch"
  }
];

app.get("/cats", function(req,res){
  res.json({
    data: cats
  });
});

app.get("/cats/:index", function(req,res){
  console.log(req.params);
  res.json({
    data: cats[req.params.index]
  });
});

// echo 
// callback -> controller -> request handler -> view function
app.post("/echo", function(req,res){
  res.json({
    data: req.body
  })
})


/* === Server Bind === */
//Bind our server to a port

// .listen(number, ?callback)
app.listen(4000, function(){
  console.log("Im a little server hear my port");
});