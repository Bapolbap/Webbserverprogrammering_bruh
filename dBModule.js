const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('open', function() {
    //PogChamp
});

exports.storePerson = (input) => {
    input.save(() => {
        console.log("PogChamp")
    });
};