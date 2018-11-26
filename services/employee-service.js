const fs = require('fs')

const EmployeeModel = require('../models/employee')

const dbPath = `${__dirname}/../Employee.json`

async function findAll() {
    return EmployeeModel.find()
}

async function add(employee) {
    return EmployeeModel.create(employee)
}

async function del(personId) {
    const allPeople = await findAll()
    const personIndex = allPeople.findIndex(p => p.id == personId)
    if (personIndex < 0) return

    allPeople.splice(personIndex, 1)

    saveAll(allPeople)
}

async function find(personId) {
    const allPeople = await findAll()

    return allPeople.find(p => p.id == personId)
}

async function saveAll(people) {
    return new Promise((resolve, reject) => {
        fs.writeFile(dbPath, JSON.stringify(people), (err, file) => {
            if (err) return reject(err)

            resolve()
        })
    })
}

module.exports = {
    findAll,
    find,
    add,
    del,
    saveAll
}
