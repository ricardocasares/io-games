import { styled } from "@/css";

export const Text = styled("h1", {
  margin: 0,
  padding: 0,
  color: "$accents-3",

  variants: {
    h1: {
      true: {
        color: "$accents-7",
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

    h3: {
      true: {
        fontSize: "$3",
        fontWeight: "normal",
        color: "$accents-4",
      },
    },
  },
});
