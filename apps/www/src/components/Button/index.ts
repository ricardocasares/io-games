import { styled } from "@/css";

export const Button = styled("button", {
  border: "none",
  color: "$success",
  backgroundColor: "$success-lighter",
  borderRadius: "$2",
  padding: "$2 $6",
  fontSize: "$2",
  "&[disabled]": {
    color: "$accents-4",
    backgroundColor: "$accents-2",
    cursor: "not-allowed",
  },
});
