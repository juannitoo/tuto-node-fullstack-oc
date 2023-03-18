const mongoose = require('mongoose');
// const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    email: { type: String, required: true},
    password: { type: String, required: true }
    //   email: { type: String, required: true, unique: true },
    // j'ai commenté ca qui empêche le save sur un post, ac la base vide.
    // on peut donc avoir 2 fois le même mail pr 2 users différents.
    // la version de mongoose-unique-validator n'est pas a jour et a été installé avec --force
});

// userSchema.plugin(uniqueValidator); //  va avec unique : true

module.exports = mongoose.model('User', userSchema);