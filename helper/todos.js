var db = require('../models/index');


exports.getTodo = function (req, res) {
    db.Todo.find()
        .then(function (todos) {
            res.json(todos);
        })
        .catch(function (err) {
            res.send(err);
        })
};

exports.postTodo = function (req, res) {
    db.Todo.create(req.body)
        .then(function (newTodo) {
            res.status(201).json(newTodo);
        })
        .catch(function (err) {
            res.send(err);
        })
};

exports.getTodoId = function (req, res) {
    db.Todo.findById(req.params.todoId)
        .then(function (foundTodo) {
            res.json(foundTodo);
        })
        .catch(function (err) {
            res.send(err);
        })
};

exports.putTodoId = function (req, res) {
    db.Todo.findByIdAndUpdate(req.params.todoId, req.body, { new: true })
        .then(function (updatedtoDo) {
            res.status(201).json(updatedtoDo);
        })
        .catch(function (err) {
            res.send(err);
        });
};

exports.deleteTodoId = function (req, res) {
    db.Todo.findByIdAndRemove(req.params.todoId)
        .then(function () {
            res.redirect("/api/todos");
        })
        .catch(function (err) {
            res.send(err);
        })
};