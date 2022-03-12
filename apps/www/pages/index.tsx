import { useEffect } from "react";
import { io } from "socket.io-client";

export default function Home() {
  useEffect(() => {
    const socket = io("ws://localhost:4000");
    socket.emit('join', "mamada", "rick");
    socket.on("presence", console.log);
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <h1>
        <p>Hellasdo</p>
      </h1>
    </div>
  );
}
