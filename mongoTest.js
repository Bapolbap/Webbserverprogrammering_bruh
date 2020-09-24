const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bruh', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function() {
    //
});

const monkeySchema = new mongoose.Schema({
    name: String,
    age: Number
});

monkeySchema.methods.speak = () => {
    console.log("MONKEY MONKEY O O A A");
    console.log("monkey name is " + this.name);
}

const Monkey = mongoose.model('Monkey', monkeySchema);

const diddy = new Monkey({ name: 'Diddy', age: 1});
const silence = new Monkey({ name: 'Silence', age: 12});
const chunky = new Monkey({ name: 'chunky', age: 123});

diddy.save();
silence.save();

chunky.save(function (err, chunky) {
    if(err) return console.error(err);
    chunky.speak();
});

Monkey.find(function (err, monkies) {
    if(err) return console.error(err);
    console.log(monkies);
});

Monkey.find({ name: /^chunky/ }, callback);