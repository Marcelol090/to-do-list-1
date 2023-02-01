import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import { BaseButtonWrapper } from "./BaseButton.styles";

interface IBaseButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  height?: string | number;
  width?: string | number;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  color?: string;
  variant: "filled" | "text" | "textWithUnderline" | "outlined";
}

function BaseButton({
  ref,
  height,
  width,
  startIcon,
  endIcon,
  color = "#00B2BF",
  variant = "filled",
  ...props
}: IBaseButtonProps) {
  return (
    <BaseButtonWrapper
      height={height}
      width={width}
      color={color}
      variant={variant}
      {...props}
    >
      {startIcon}
      {props.children}
      {endIcon}
    </BaseButtonWrapper>
  );
}

export default BaseButton;
