const mongoose = require('mongoose');

const monkeySchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    location: String
})

const Monkey = mongoose.model('Monkey', monkeySchema);

exports.createMonkey = (name, email, age, location) => {
    var monkey = new Monkey({
        name: name,
        email: email,
        age: age,
        location: location
    });

    return monkey;
}