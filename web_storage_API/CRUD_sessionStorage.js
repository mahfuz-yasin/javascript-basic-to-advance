
const testing = document.getElementById("testing");
// localStorage
// 1. add / create data in local storage usign setItem()
// localStorag store dada as key and value pair as String
console.log(localStorage)
sessionStorage.setItem("userName", "Mahfuz");
sessionStorage.setItem("password","12345")

// open inspack -> open aplication

// 2. read data using  getItem(key)

const userName = sessionStorage.getItem("userName");
const password = sessionStorage.getItem("password")

console.log(userName, password)

// update data using setItem(target_key , "updating Value")
sessionStorage.setItem("password","54321")

// remove data in localstorage using removeItem("target_key")

sessionStorage.removeItem("password")
sessionStorage.clear("password")



// how to add array in localstorage 
// use json.stringify(target_array_key)
const famuseParsons = ["D. unus", "donal traump", "hello jone"]
sessionStorage.setItem("parsons", JSON.stringify(famuseParsons))

// how to read array in localstorage 
// use json.parse()
const parsonList = JSON.parse(sessionStorage.getItem("parsons"))
console.log(parsonList)