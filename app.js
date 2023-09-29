const express = require('express')
const app = express()


// middlewares
app.set('view engine', 'ejs')

app.use(express.json());
app.use(express.urlencoded({extended : true}));

// todos list
const todos = [
    {
        "todoId" : "1",
        "todoTask" : "Code"
    },
    {
        "todoId" : "2",
        "todoTask" : "Sleep"
    },
    {
        "todoId" : "3",
        "todoTask" : "Coffee"
    }
]

// get all todos
app.get('/', function(req, res){
    res.render('index', {
        data : todos
    })
}); 

// add new todo
app.post('/', function(req, res){
    const inputTodoId = todos.length + 1;
    const inputTodoTask = req.body.todoTask;
 
    todos.push({
        todoId: inputTodoId,
        todoTask: inputTodoTask
    });
 
    res.render("index", {
        data: todos,
    });
});

// delete a todo 
app.post("/delete", (req, res) => {
    
    var requestedtodoId = req.body.todoId;
    var j = 0;
    todos.forEach((todo) => {
        j = j + 1;
        if (todo.todoId === requestedtodoId) {
            todos.splice(j - 1, 1);
        }
    });
    res.redirect("/");
});

app.listen(8080, (req, res) => {
    console.log("App is running on port 3000");
});