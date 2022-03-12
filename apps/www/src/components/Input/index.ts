import { styled } from "@/css";

export const Input = styled("input", {
  border: "none",
  backgroundColor: "$accents-2",
  borderColor: "$accents-3",
  borderRadius: "$2",
  padding: "$2 $2",
  fontSize: "$2",

  "&:hover, &:focus": {
    background: "$success-lighter",

    "&::placeholder": {
      color: "$success",
    },
  },
});
