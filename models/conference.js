const Chalk = require('chalk')
const Mongoose = require('mongoose')
//console.log(chalk.blue('Hello world!'));

const ConferenceSchema = new Mongoose.Schema({
    time: Date,
    location: String,
    employees: [{
        type: Mongoose.Schema.Types.ObjectId,
        ref: 'Employee'
    }]
})


module.exports = Mongoose.model('Conference', ConferenceSchema)

//conference keyfi olarak verilen isim klass la ilgisi yok baska isim de verilebilir.
