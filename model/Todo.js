const { Schema, model } = require('mongoose');

// the Schema is very similar to the "class" that we were creating in sequelize
const todoSchema = new Schema({
    userId: {
        // objectId type
        type: Schema.Types.ObjectId,
        // ref mean which collection does thie objectId referenced.
        ref: 'User'
    },
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