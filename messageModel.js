const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    email: String,
    comment: String
})

const Message = mongoose.model('Message', messageSchema);

exports.createMessage = (email, comment) => {
    var message = new Message({
        email: email,
        comment: comment
    });

    return message;
}

exports.getMessages = async() => {
    var message = await Message.find({});

    return message;
}

