#! /usr/bin/env node

let data = new Map()

data.set("title","Understanding ECMAScript 6")
data.set("format","ebook")

// same as using data.entries()
for(let [key, value] of data){
  console.log(key + "=" + value)
}
