
# Socket.io

Socket.io is a library that enable **real-time**, bidirectional & Event-base b/w **`Browser`** and **`Server`**.

This means that the server can push messages to clients. Whenever you write a chat message, the idea is that the server will get it and push it to all other connected clients.

#### [Connect Socket.io with Your HTML App](https://socket.io/get-started/chat)
![Server & Client](https://socket.io/images/bidirectional-communication-socket.png)

![Socket.io](https://socket.io/assets/images/polling-transport-3982c72f867034afb95afd7091297cc1.png)




## Server API

```javascript
npm install socket.io
```
Setup Socket.io in **Node JS**
```javascript
const express = require('express')
const cors = require('cors');
const http = require('http');
const { Server } = require("socket.io");

const app = express();

app.use(cors())

const server = http.createServer(app);

const io = new Server(server,{
    cors:{
        origin: "http://localhost:3000",
        method: ["GET", "POST"],
    }
})

io.on("connection", (socket)=>{

 // ---- Events will written here
});

httpServer.listen(5000);
```

#### Chat Event

```javascript
    // ... Chat Start and Data will sendback
    socket.on("chat", (payload) => {
      console.log("User Chat", payload);
      io.emit("chat", payload)
    });
```

#### Join Chat Event
```javascript
    //---- Join Chat Room Event
    socket.on("join_room", (data)=>{
        socket.join(data);
        console.log(`user with ID: ${socket.id} joined room: ${data}`);
    })
```

#### Send & Receive Message Event

```javascript
    //--- Send and Receive Message Event
     socket.on("send_message", (data) => {
        socket.to(data.room).emit("receive_message", data)
    })
```

#### Disconnect Chat Event

```javascript
  //--- Disconnect Event will trigger
     socket.on("disconnect", (socket) => {
      console.log("User Disconnect")
    })
```

#### **[More Socket.io Events](https://socket.io/docs/v4/server-instance/)**

### Here is a list of common events in a Socket.IO chat application:

1. **connection:** Triggered when a client connects to the server.

2. **disconnect:** Triggered when a client disconnects from the server.

3. **message:** Used to send messages from the client to the server.

4. **broadcast:** Used to broadcast messages to all connected clients.

5. **typing:** Indicates that a user is typing a message.

6. **stop typing:** Indicates that a user has stopped typing a message.

7. **reconnect:**

8. **broadcast:** This event is used to broadcast messages to all connected clients. The server can emit a broadcast event to send a message to all clients.

9. **join:** Triggered when a user joins a chat room.

10. **leave:** Triggered when a user leaves a chat room.

11. **userlist:** Used to send a list of all connected users to a client.

12. **error:** Triggered when an error occurs.

These are some of the common events used in a Socket.IO chat application. You can also create custom events to handle specific functionality in your application.
## Client API

Package to Install
```javascript
npm i socket.io-client
```

Connection & Import
```javascript
import io from 'socket.io-client'

const socket = io.connect("http://localhost:5000");

 socket.emit("join_room",room)
```

Emit Message Event
```javascript
socket.emit("send_message", messageData)
```

Emit Message Event
```javascript
 socket.on("receive_message", (data) => {
        setMessageList((list) => [...list, data])
    })
```

Emit Message Data Event
```javascript
const messageData = {
        room: room,
        author: userName,
        message: currentMessage,
        time: 
            new Date(Date.now()).getHours() +
            ":" +
            new Date(Date.now()).getMinutes()
    }
    await socket.emit("send_message", messageData)
```