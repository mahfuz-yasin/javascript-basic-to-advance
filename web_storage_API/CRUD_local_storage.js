
const testing = document.getElementById("testing");
// localStorage
// 1. add /create data in local storage usign setItem()
// localStorag store dada as key and value pair as String
console.log(localStorage)
localStorage.setItem("userName", "Mahfuz");
localStorage.setItem("password","12345")

// open inspack -> open aplication

// 2. read data using  getItem(key)

const userName = localStorage.getItem("userName");
const password = localStorage.getItem("password")

console.log(userName, password)

// update data using setItem(target_key , "updating Value")
localStorage.setItem("password","54321")

// remove data in localstorage using removeItem("target_key")

localStorage.removeItem("password")


// how to add array in localstorage 
// use json.stringify(target_array_key)
const famuseParsons = ["D. unus", "donal traump", "hello jone"]
localStorage.setItem("parsons", JSON.stringify(famuseParsons))

// how to read array in localstorage 
// use json.parse()
const parsonList = JSON.parse(localStorage.getItem("parsons"))
console.log(parsonList)