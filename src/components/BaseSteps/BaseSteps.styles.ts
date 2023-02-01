import styled, { css } from "styled-components";

interface IBaseStepsWrapperProps {
  vertical: boolean;
}
export const BaseStepsWrapper = styled.div<IBaseStepsWrapperProps>`
  ${({ theme, vertical }) => css`
    display: flex;
    flex-direction: ${vertical ? "column" : "row"};
    justify-content: center;
    align-items: center;
    width: fit-content;

    div {
      flex-direction: ${vertical ? "column" : "row"};
    }
  `}
`;

interface IBaseStepNumberCircleProps {
  currentStep: number;
  stepKey: number;
}
export const BaseStepNumberCircle = styled.div<IBaseStepNumberCircleProps>`
  ${({ theme, currentStep, stepKey }) => css`
    background-color: ${stepKey <= currentStep
      ? theme.colors.supportPrimary.dark
      : "#fff"};
    color: ${stepKey <= currentStep
      ? "#fff"
      : `${theme.colors.supportPrimary.dark}`};
    border-radius: 50%;
    border: solid 1px ${theme.colors.supportPrimary.dark};
    width: 26px;
    height: 26px;
    font-size: ${theme.font.size.xxs};
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      cursor: default;
    }
  `}
`;

interface ISplitBarProps {
  vertical: boolean;
}
export const SplitBar = styled.div<ISplitBarProps>`
  ${({ theme, vertical }) => css`
    height: ${vertical ? "22px" : "1px"};
    width: ${vertical ? "1px" : "22px"};
    background-color: ${theme.colors.supportPrimary.dark};
  `}
`;
