const { Todo } = require('../model');


module.exports = {
    createTodo: async (req, res) => {
        const { text } = req.body;
        try {
            const newTodo = await Todo.create({
                text, userId
            });
            res.json(newTodo);
        } catch (e) {
            res.json(e);
        }
    },
    getAllTodos: async (req, res) => {
        try { 
            const todos = await Todo.find().populate('userId');
            res.json(todos);
        } catch (e) {
            res.json(e);
        }
    },
    getTodoById: async (req, res) => {
        const {todoId} = req.params;
        try {
            const todo = await Todo.findById(todoId);
            res.json(todo)
        } catch (e) {
            res.json(e);
        }
    },
    updateTodoById: async (req, res) => {
        const {todoId} = req.params;
        try{
            const updatedTodo = await Todo.findByIdAndUpdate(
                todoId, 
                {...req.body},
                {
                    new: true,
                }
            );
            res.json(updatedTodo)
        } catch (e) {
            res.json(e);
        }
    },
    deleteTodoById: async (req, res) => {
        const {userId} = req.params;
        try{
            const deletedTodo = await Todo.findByIdAndDelete();
            res.json(deletedTodo)
        } catch (e) {
            res.json(e);
        }
    }
};