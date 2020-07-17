const express = require("express");
const http = require("http");
const path = require("path");
const socketIo = require("socket.io");
const controller = require("./issues");

const port = process.env.PORT || 5000;
const app = express();
const server = http.createServer(app);
const io = socketIo(server);


// socket.io connection
io.on('connection', (socket) => {
    
    console.log(`New client connected with the id: ${socket.id}`);

    // Send all issues to the new user 
    controller.readIssues()
        .then(data => { socket.emit("READ_ISSUES", data) });
    
    // Update action
    socket.on('UPDATE_ISSUE', (issue) => {
        controller.updateIssue(issue)
            .then(data => { socket.broadcast.emit("READ_ISSUES", data); socket.emit("READ_ISSUES", data); socket.emit("UPDATE_OK", "Issue updated!");})
            .catch(err => console.log(err));
    });

    // Create action
    socket.on('CREATE_ISSUE', (issue) => {
        controller.createIssue(issue)
            .then(data => { socket.broadcast.emit("READ_ISSUES", data); socket.emit("READ_ISSUES", data); socket.emit("CREATE_OK", "Issue created!"); })
            .catch(err => console.log(err));
    });

    // Delete action
    socket.on('DELETE_ISSUE', (id) => {
        controller.deleteIssue(id)
            .then(data => { socket.broadcast.emit("READ_ISSUES", data); socket.emit("READ_ISSUES", data); socket.emit("DELETE_OK", "Issue deleted!"); })
            .catch(err => console.log(err));
    });

    socket.on("disconnect", () => {
        console.log(`Client ${socket.id} disconnected`);
    });
})

app.use(express.static(path.join(__dirname, 'public')));

server.listen(port, () => console.log(`Server is listening on port ${port}`));
