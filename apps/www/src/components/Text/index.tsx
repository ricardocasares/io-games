import { styled } from "@/css";
import { VariantProps } from "@stitches/react";
import { ElementType, FC } from "react";

export const TextStyles = styled("p", {
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


const whitelist: ElementType[] = ['h1', 'h2', 'h3'];

export const Text: FC<VariantProps<typeof TextStyles>> = (props) => {
  const [tag = "p"] = (Object.keys(props) as ElementType[]).filter(x => whitelist.includes(x));

  return <TextStyles as={tag} {...props} />;
};
