#! /usr/bin/env node

// exmaple of a simple callback 

let fs = require('fs')

fs.readFile("config.json", function(err, contents){
  if(err){
    throw(err);
  }
  let obj = JSON.parse(contents.toString())
  console.log(obj.name)
  
  console.log("done")
})
