const mongoose = require('mongoose');

const URI = "mongodb+srv://TodoListDB:todolistdb@cluster0.xq3p2.mongodb.net/TodoListDB?retryWrites=true&w=majority"


// to see if there is potensial errors
// mongoose.set('debug', true)

// connect to the db 
// mongoose.connect( 'mongodb://localhost:27017/todo-api' , { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(process.env.MONGODB_URI || URI , { useNewUrlParser: true, useUnifiedTopology: true } );

// When successfully connected
mongoose.connection.on('connected', () => {
	console.log('Established Mongoose Default Connection');
});

// When connection throws an error
mongoose.connection.on('error', err => {
	console.log('Mongoose Default Connection Error : ' + err);
});
// // to allow us to use (promise) syntax
mongoose.Promise = Promise;

module.exports.Todo = require("./todo");