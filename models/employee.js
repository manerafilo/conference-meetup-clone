module.exports = class Employee{

    constructor(name, age) {
        this.name = name
        this.age = age
    }

    participate(conference) {
         conference.employees.push(this)
         //console.log(Chalk.red.bgYellow.bold(this.time,'conference is held at', Chalk.green(this.location), 'and number of participants are', this.employees.length))

    }

    static create({ name, age }){
        return new Employee(name, age)
    }
}