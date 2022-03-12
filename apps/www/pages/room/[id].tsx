import { useRouter } from "next/router";
import { useSocket, useSocketEvent } from "socket.io-react-hook";
import { FormEventHandler, MouseEventHandler, useState } from "react";
import type { User } from "@app/domain";

export default function Home() {
  const [name, setName] = useState("");
  const { query: { id } } = useRouter();
  const { socket } = useSocket(process.env.NEXT_PUBLIC_IO_SERVER);
  const { lastMessage: data } = useSocketEvent(socket, 'data');
  const { lastMessage: presence = [] } = useSocketEvent<User[]>(socket, 'presence');

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    console.log(name, id);
    socket.emit('join', id, name);
  };

  const onClick: MouseEventHandler = (e) => {
    e.preventDefault();
    socket.emit('data', { some: 'data' });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <h1>
        <form onSubmit={onSubmit}>
          <input placeholder="your name" type="text" defaultValue={name} onChange={e => setName(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
        <button onClick={onClick}>Data</button>
        <p>
          {JSON.stringify(data)}
        </p>
        {presence.map((user, id) => <p key={`user-${id}`} style={{ background: user.color }}>{user.name}</p>)}
      </h1>
    </div>
  );
}
