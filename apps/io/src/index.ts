import { Server } from "socket.io";
import { ColorAssigner } from "@convergence/color-assigner";
import type { Room } from "@app/domain";

const PORT = parseInt(process.env.PORT) || 3001;

const io = new Server({
  cors: {
    origin: [
      "http://localhost:3000",
      "https://io-games.vercel.app",
      "https://io-games-hike.vercel.app",
    ],
    methods: ["GET", "POST"],
  },
});

const colors = new ColorAssigner();
const rooms = new Map<string, Room>();

io.on("connection", (socket) => {
  socket.on("join", (room: string, name: string) => {
    const color = colors.getColorAsHex(socket.id);

    if (!rooms.has(room)) {
      socket.emit("admin", true);
      rooms.set(room, new Map([[socket.id, { name, color, admin: true }]]));
    } else {
      rooms.get(room).set(socket.id, { color, name, admin: false });
    }

    socket.join(room);
    io.to(room).emit("presence", [...rooms.get(room)?.values()]);
  });

  socket.on("data", (data) => {
    console.log(data);
    const [, room] = socket.rooms;
    socket.to(room).emit("data", data);
  });

  socket.on("disconnecting", () => {
    const [, room] = socket.rooms;
    console.log(rooms);
    rooms.get(room)?.delete(socket.id);

    socket.to(room).emit("presence", [...(rooms.get(room)?.values() ?? [])]);
  });
});

console.log(`socket.io running on port ${PORT}`);
io.listen(PORT).addListener("open", () => console.log("started"));
