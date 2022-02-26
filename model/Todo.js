const { Schema, model } = require('mongoose');

// the Schema is very similar to the "class" that we were creating in sequelize
const todoSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    }
});

const Todo = model('Todo', todoSchema);

module.exports = Todo;