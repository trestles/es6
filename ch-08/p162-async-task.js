#! /usr/bin/env node

let fs = require("fs")

function readFile(filename){
  return function(callback){
    fs.readFile(filename, callback)
  }
}

function run(taskDef){
  let task = taskDef()
  
  let result = task.next()
  console.log(result)  
  function step(){
    console.log("calling step()")
    if(!result.done){
      if(typeof result.value === "function"){
        result.value(function(err, data){
          if(err){
            result = task.throw(err)
            return 
          }

          result = task.next(data)
          step()
        })
      }else{
        result = task.next(result.value)
        step()
      }
    }
  }
  step()
}

run(function*(){
  console.log("calling run")
  let contents = yield readFile("config.json")
  console.log(JSON.parse(contents.toString()))
  console.log("done")
})
