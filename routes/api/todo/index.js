const router = require('express').Router();
const { createTodo, getAllTodos, getTodoById, updateTodoById, deleteTodoById } = require('../../../controllers/todoControllers');

router.route('/')
	.get(getAllTodos)
	.post(createTodo);

router.route('/:userId')
    .get(getTodoById)
    .put(updateTodoById)
    .delete(deleteTodoById);

module.exports = router;