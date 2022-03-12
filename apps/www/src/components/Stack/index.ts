import { styled } from "@/css";
import { Box } from "@/components/Box";

export const Stack = styled(Box, {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",

  "> *": {
    marginBlock: 0,
  },

  "> * + *": {
    marginBlockStart: 0,
  },

  variants: {
    pad: {
      xs: {
        padding: "$1",
      },
      sm: {
        padding: "$2",
      },
      md: {
        padding: "$3",
      },
      lg: {
        padding: "$4",
      },
      xl: {
        padding: "$5",
      },
    },
    space: {
      xs: {
        "> * + *": {
          marginBlockStart: "$1",
        },
      },
      sm: {
        "> * + *": {
          marginBlockStart: "$2",
        },
      },
      md: {
        "> * + *": {
          marginBlockStart: "$3",
        },
      },
      lg: {
        "> * + *": {
          marginBlockStart: "$4",
        },
      },
      xl: {
        "> * + *": {
          marginBlockStart: "$5",
        },
      },
    },
  },
  defaultVariants: {
    pad: "md",
    space: "sm",
  },
});
