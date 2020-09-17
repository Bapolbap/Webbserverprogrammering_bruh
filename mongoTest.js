const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function() {
    //
});

const monkeySchema = new mongoose.Schema({
    name: String
});

const Monkey = mongoose.model('Monkey', monkeySchema);

const silence = new Monkey({ name: 'Silence'});
console.log(silence.name);

monkeySchema.methods.speak = function () {
    const greeting = this.name
        ? "Monkey name is " + this.name
        : "Monkey don't have name";
    console.log(greeting);
}

const chunky = new Monkey({ name: 'chunky'});
chunky.speak();

chunky.save(function (err, chunky) {
    if(err) return console.error(err);
    chunky.speak();
});

Monkey.find(function (err, monkies) {
    if(err) return console.error(err);
    console.log(monkies);
});

Monkey.find({ name: /^chunky/ }, callback);