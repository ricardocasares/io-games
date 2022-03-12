import { Server } from "socket.io";
import { ColorAssigner } from "@convergence/color-assigner";
import { Room } from "./domain";

const PORT = parseInt(process.env.PORT);

const io = new Server({
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const colors = new ColorAssigner();
const rooms = new Map<string, Room>();

io.on("connection", (socket) => {
  socket.on("join", (room: string, name: string) => {
    const color = colors.getColorAsHex(socket.id);
    console.log(socket.rooms);
    if (!rooms.has(room)) {
      rooms.set(room, new Map([[socket.id, { name, color, admin: true }]]));
    } else {
      rooms.get(room).set(socket.id, { color, name, admin: false });
    }

    socket.join(room);
    console.log(socket.rooms);
    io.to(room).emit("presence", [...rooms.get(room)?.values()]);
  });

  socket.on("data", (data) => {
    const [, room] = socket.rooms;
    socket.to(room).emit("data", data);
  });

  socket.on("disconnecting", () => {
    const [, room] = socket.rooms;
    console.log(room);

    rooms.get(room)?.delete(socket.id);
    socket.to(room).emit("presence", [...rooms.get(room)?.values()]);
  });
});

console.log(`socket.io running on port ${PORT}`);
io.listen(PORT).addListener("open", () => console.log("started"));
