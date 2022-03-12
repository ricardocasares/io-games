import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import { uniqueNamesGenerator, adjectives, colors, animals } from 'unique-names-generator';

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', width: "100%" }}>
      <h1>
        <p>Hello, get a room!</p>
        <Link href={`/room/${props.roomName}`}>Get a room</Link>
      </h1>
    </div>
  );
}

export const getStaticProps = async () => {
  const roomName: string = uniqueNamesGenerator({
    separator: "-",
    dictionaries: [adjectives, colors, animals]
  });

  return {
    props: {
      roomName
    }
  };
};
