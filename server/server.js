const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const port = process.env.PORT || 6750;

const index = require("./routes/index");

const app = express();
app.use(index);

const server = http.createServer(app);
const io = socketIo(server);


io.on("connection", (socket) => {
  console.log(
    `\x1b[95m${socket.handshake.address}\x1b[39m: \x1b[92mConnected\x1b[39m on \x1b[93m${socket.id}\x1b[39m`
  );
  socket.on("get-messages", (channel) => {
    console.log(
      `\x1b[95m${socket.handshake.address}\x1b[39m: \x1b[94mRequested messages\x1b[39m on for #${channel} \x1b[93m${socket.id}\x1b[39m`
    );
    socket.emit("messages", []);
  });

  socket.on("message", (message) => {
    console.log(
        `\x1b[95m${socket.handshake.address}\x1b[39m: \x1b[94mSent a message in\x1b[39m on for #${message.channel} \x1b[93m${socket.id}\x1b[39m`
      );
    socket.broadcast.emit("message-receive", message);
  })

  socket.on("disconnect", () => {
    console.log(
      `\x1b[95m${socket.handshake.address}\x1b[39m: \x1b[91mDisconnected\x1b[39m from \x1b[93m${socket.id}\x1b[39m`
    );
  });
});

server.listen(port, () =>
  console.log(`Listening on port \x1b[96m${port}\x1b[39m`)
);
