var prompt = require("prompt-sync")();

function compareObjects(obj1, obj2){
    console.log(obj1)
    console.log(obj2)
}

console.log(compareObjects(prompt("Object 1: "), prompt("Object 2: ")))