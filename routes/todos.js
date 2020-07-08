const express = require('express');
const router = express.Router();
// or you can type 
// const router = require('express').Router();

const helper = require('../helper/todos');


router.route("/")
    .get(helper.getTodo)
    .post(helper.postTodo);

router.route('/:todoId')
    .get(helper.getTodoId)
    .put(helper.putTodoId)
    .delete(helper.deleteTodoId);

router.use(function (req, res) {
    res.sendFile(path.join(__dirname , '../../FrontendTodo/build/index.html'))
} )


module.exports = router;