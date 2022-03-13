import { useRouter } from "next/router";
import { useSocket, useSocketEvent } from "socket.io-react-hook";
import { FormEventHandler, useState } from "react";
import { useMotion } from "react-use";
import type { User } from "@pkg/domain";
import { Stack } from "@/components/Stack";
import { Layout } from "@/components/Layout";
import { Text } from "@/components/Text";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Avatar, AvatarGroup } from "@/components/Avatar";

export default function Home() {
  const {
    query: { id },
  } = useRouter();
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState(false);
  const { socket } = useSocket(process.env.NEXT_PUBLIC_IO_SERVER);
  const { lastMessage: data } = useSocketEvent(socket, "data");
  const { lastMessage: admin } = useSocketEvent(socket, "admin");
  const { lastMessage: presence = [] } = useSocketEvent<User[]>(
    socket,
    "presence"
  );
  const state = useMotion();
  const disabled = name.length < 3;
  const emptyRoom = !Boolean(presence.length);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    if (disabled) return;
    setSubmit(true);
    socket.emit("join", id, name);
  };

  const onNameChange: FormEventHandler<HTMLInputElement> = (e) => {
    setName(e.currentTarget.value);
  };

  return (
    <Layout>
      <Stack as="nav">
        <Text>{id}</Text>
        <Text h1>Waiting room</Text>
      </Stack>

      {emptyRoom && (
        <Stack>
          <Text h3>Room is empty so far.</Text>
        </Stack>
      )}

      {!emptyRoom && (
        <Stack>
          <Text h3>Participants</Text>
          <AvatarGroup>
            {presence.map(({ color, name }) => (
              <Avatar {...{ color, name }} />
            ))}
          </AvatarGroup>
        </Stack>
      )}

      {!submit && (
        <Stack space="lg" as="form" onSubmit={onSubmit}>
          <Text h3>Join this room</Text>
          <Input
            name="name"
            placeholder="What's your name?"
            onChange={onNameChange}
          />
          <Button disabled={disabled} type="submit">
            Submit
          </Button>
        </Stack>
      )}


      {admin && (
        <Stack>
          <Button type="submit">
            Start the game
          </Button>
        </Stack>
      )}
    </Layout>
  );
}
