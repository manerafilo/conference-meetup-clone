/*const fs = require('fs') // to save a file in node.js
module.exports={
    save:(package)=>{
      console.log(package)
      fs.writeFile('package.json',JSON.stringify(package))
    },
};

load(){
   return JSON.parse (fs.readFile('package.json','utf8'))
}*/


const fs = require('fs') // to save a file in node.js

async function save(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./Employee.json', JSON.stringify(data), (err, file) => {
            if (err) return reject(err)
            resolve()
        })
    })
}

async function load(dbPath){
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, file) => {
            if (err) return reject(err)
            const data = JSON.parse(file)
            resolve(data)
        })
    })
}



module.exports = {
    save,
    load
}

// module.exports={
//     save:(package)=>{
//         return 

//         // console.log(package)
//         // fs.writeFile('./',JSON.stringify(package))
//     },
//     load: () => {
//         return JSON.parse (fs.readFile('package.json','utf8'))
//     }
// };
  

