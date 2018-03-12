#! /usr/bin/env node

function run(taskDef){
  let task = taskDef()
  let result = task.next()
  
  function step(){
    if(!result.done){
      result = task.next()
      step()
    }
  }

  // start the process
  step()
}


// a generator
run(function*(){
  console.log(1)
  yield
  console.log(2)
  yield
  console.log(3)
})
