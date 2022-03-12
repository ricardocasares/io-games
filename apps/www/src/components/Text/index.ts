import { styled } from "@/css";

export const Text = styled("h1", {
  variants: {
    h1: {
      true: {
        fontSize: "$5",
        fontWeight: "bolder",
        letterSpacing: -1,
      },
    },
    h2: {
      true: {
        fontSize: "$4",
        fontWeight: "bold",
        color: "$accents-4",
      },
    },
  },
});
