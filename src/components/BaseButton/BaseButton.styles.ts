import styled, { css } from "styled-components";

interface IBaseButtonWrapperProps {
  height?: string | number;
  width?: string | number;
  color: string;

  variant: "filled" | "text" | "textWithUnderline" | "outlined";
}

export const BaseButtonWrapper = styled.button<IBaseButtonWrapperProps>`
  ${({ height, width, color, variant, disabled }) => css`
    width: ${width != null
      ? typeof width === "number"
        ? `${width}px`
        : width
      : "fit-content"};
    height: ${height != null
      ? typeof height === "number"
        ? `${height}px`
        : height
      : "fit-content"};
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    font-size: 16px;
    cursor: pointer;

    ${variant == "filled" &&
    css`
      background-color: ${disabled ? "gray" : color};
      color: white;
      outline: none;
      border-radius: 8px;
      padding: 12px 76px;
    `}

    ${variant == "outlined" &&
    css`
      background-color: transparent;
      color: ${disabled ? "gray" : color};
      outline: 1px solid ${disabled ? "gray" : color};
      border-radius: 8px;
      padding: 12px 76px;
    `}

    ${variant == "textWithUnderline" &&
    css`
      background-color: transparent;
      color: ${disabled ? "gray" : color};
      outline: none;
      padding: 0;
      text-decoration: underline ${disabled ? "gray" : color}; ;
    `}

    ${variant == "text" &&
    css`
      background-color: transparent;
      color: ${disabled ? "gray" : color};
      outline: none;
      padding: 0;
    `}
  `}
`;
