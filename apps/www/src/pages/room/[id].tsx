import { useRouter } from "next/router";
import { useSocket, useSocketEvent } from "socket.io-react-hook";
import { FormEventHandler, useState } from "react";
import { useMotion } from "react-use";
import type { User } from "@pkg/domain";
import { Layout } from "@/components/Layout";
import { Text } from "@/components/Text";
import { Stack } from "@/components/Stack";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Avatar } from "@/components/Avatar";

export default function Home() {
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState(false);
  const { query: { id } } = useRouter();
  const { socket } = useSocket(process.env.NEXT_PUBLIC_IO_SERVER);
  const { lastMessage: data } = useSocketEvent(socket, 'data');
  const { lastMessage: presence = [] } = useSocketEvent<User[]>(socket, 'presence');
  const state = useMotion();

  const disabled = name.length < 3;

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (disabled) return;
    setSubmit(true);
    socket.emit('join', id, name);
  };

  const onNameChange: FormEventHandler<HTMLInputElement> = (e) => {
    setName(e.currentTarget.value);
  };

  return (
    <Layout>
      <Stack as="nav">
        <Text h1>Waiting room</Text>
        <Text h2>{id}</Text>
      </Stack>


      <Stack>
        <div>
          {presence.map(({ color, name }) => <Avatar {...{ color, name }} />)}
        </div>
      </Stack>

      {!submit && <Stack as="form" onSubmit={onSubmit}>
        <Text h2>Join this channel</Text>
        <Input name="name" placeholder="What's your name?" onChange={onNameChange} />
        <Button disabled={disabled} type="submit">Submit</Button>
      </Stack>}
    </Layout>
  );
}
