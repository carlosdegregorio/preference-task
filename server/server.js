const express = require("express");
const http = require("http");
const path = require("path");
const socketIo = require("socket.io");
const db = require("monk")("localhost:27017/test");

const collection = db.get("collection");

const port = process.env.PORT || 4001;
const index = require("./routes/index");

const app = express();

const server = http.createServer(app);

const io = socketIo(server);

let interval;

// socket.io connection
io.on('connection', (socket) => {
    console.log("Connected to Socket!!" + socket.id);
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => getIssues(socket), 1000);
    socket.on("disconnect", () => {
        console.log("Client disconnected");
        clearInterval(interval);
    });


    /*  // Receiving Todos from client
     socket.on('addTodo', (Todo) => {
         console.log('socketData: ' + JSON.stringify(Todo));
         todoController.addTodo(io, Todo);
     });
 
     // Receiving Updated Todo from client
     socket.on('updateTodo', (Todo) => {
         console.log('socketData: ' + JSON.stringify(Todo));
         todoController.updateTodo(io, Todo);
     });*/

    // Create action
    socket.on('CREATE_ISSUE', (issue) => {
        collection.insert(issue).then((doc) => { })
    });
    
    // Delete action
    socket.on('DELETE_ISSUE', (id) => {
        console.log(id);
        collection.findOneAndDelete({ _id: id }).then((doc) => { })
    });
})

const getIssues = socket => {
    collection.find({}).then(data =>
        socket.emit("GET_ISSUES", { issues: data }));
}

app.use(express.static(path.join(__dirname, 'public')));

server.listen(port, () => console.log(`Listening on port ${port}`));
