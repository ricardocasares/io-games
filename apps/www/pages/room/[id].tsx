import { useRouter } from "next/router";
import { useSocket, useSocketEvent } from "socket.io-react-hook";
import { FormEventHandler, useState } from "react";
import { Avatar, Input, Button, Container, Grid, Text } from '@nextui-org/react';
import { useMotion } from "react-use";
import type { User } from "@app/domain";

export default function Home() {
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState(false);
  const { query: { id } } = useRouter();
  const { socket } = useSocket(process.env.NEXT_PUBLIC_IO_SERVER);
  const { lastMessage: data } = useSocketEvent(socket, 'data');
  const { lastMessage: presence = [] } = useSocketEvent<User[]>(socket, 'presence');
  const state = useMotion();

  const disabled = name.length < 3;

  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    if (disabled) return;
    setSubmit(true);
    socket.emit('join', id, name);
  };
  return (
    <Container display="flex">
      <div style={{ flex: 1 }}>
        <Text h1>Hello there</Text>
        <pre>
          <code>
            {JSON.stringify(state, null, 1)}
          </code>
        </pre>
      </div>
      <form id="name" style={{ display: "none" }} onSubmit={onSubmit}></form>
      <Grid.Container>
        {!submit && <Grid.Container gap={2} css={{ margin: 0 }}>
          <Grid xs={12}>
            <Input size="md" width="100%" form="name" label="Name" labelPlaceholder="Name" type="text" defaultValue={name} onChange={e => setName(e.target.value)} />
          </Grid>
          <Grid xs={12}>
            <Button disabled={disabled} flat={!disabled} type="submit" form="name">Start</Button>
          </Grid>
        </Grid.Container>}
        {Boolean(presence.length) && <Grid xs={6}>
          <Avatar.Group>
            {presence.map((user, index) => (
              <Avatar bordered css={{ ".nextui-avatar-bg": { background: user.color }, ".nextui-avatar-text": { color: "white", textTransform: "capitalize" } }} key={index} size="lg" text={user.name} stacked src={`https://avatars.dicebear.com/api/pixel-art-neutral/${user.name}.svg`} />
            ))}
          </Avatar.Group>
        </Grid>}
      </Grid.Container>
    </Container >
  );
}
