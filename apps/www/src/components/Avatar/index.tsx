import { styled } from "@/css";
import { VariantProps } from "@stitches/react";
import { FC } from "react";

export const AvatarWrapper = styled("div", {
  width: "40px",
  height: "40px",
  textAlign: "center",
  display: "inline-block",
  margin: 0,
  padding: 0,

  lineHeight: "40px",
  borderRadius: "50%",
  backgroundColor: "$accents-4",
  textTransform: "uppercase",
  fontSize: "$3",
  fontWeight: "bold",
  color: "$accents-1",

  variants: {
    size: {
      lg: {
        width: "60px",
        height: "60px",
        lineHeight: "60px",
        fontSize: "$4",
      },
      xl: {
        width: "80px",
        height: "80px",
        lineHeight: "80px",
        fontSize: "$5",
      },
    },
  },
});

export type AvatarVariants = VariantProps<typeof AvatarWrapper>;
export type AvatarProps = {
  name?: string;
  color?: string;
} & AvatarVariants;

export const Avatar: FC<AvatarProps> = ({
  name,
  color: backgroundColor,
  ...props
}) => (
  <AvatarWrapper {...props} css={{ backgroundColor }} title={name}>
    {name.charAt(0)}
  </AvatarWrapper>
);
