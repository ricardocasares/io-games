import Link from "next/link";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import {
  colors,
  animals,
  adjectives,
  uniqueNamesGenerator,
} from "unique-names-generator";
import QRCode from "react-qr-code";
import { Text } from "@/components/Text";
import { Stack } from "@/components/Stack";
import { Layout } from "@/components/Layout";

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <Layout>
      <Stack>
        <Text h1>Join a room</Text>
      </Stack>
      <Stack>
        <Link href={`/room/${props.roomName}`}>
          <a><QRCode size={400} value={`${process.env.NEXT_PUBLIC_URL}/rooms/${props.roomName}`} /></a>
        </Link>
        <Text>
          Go to room{" "}
          <Link href={`/room/${props.roomName}`}>
            <a>{props.roomName}</a>
          </Link>
        </Text>
      </Stack>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const roomName: string = uniqueNamesGenerator({
    seed: Date.now(),
    separator: "-",
    dictionaries: [adjectives, colors, animals],
  });

  return {
    props: {
      roomName,
    },
  };
};
