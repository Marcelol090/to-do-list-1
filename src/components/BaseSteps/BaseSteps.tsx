import {
  BaseStepsWrapper,
  BaseStepNumberCircle,
  SplitBar,
} from "./BaseSteps.styles";

interface IBaseStepsProps {
  quantitySteps: number;
  currentStep: number;
  vertical?: boolean;
}

function BaseSteps({
  quantitySteps,
  currentStep,
  vertical = false,
  ...props
}: IBaseStepsProps) {
  return (
    <BaseStepsWrapper vertical={vertical} {...props}>
      {Array.from({ length: quantitySteps }, (_, i) => i + 1).map((step) => (
        <div style={{ display: "flex", alignItems: "center" }} key={step}>
          <BaseStepNumberCircle currentStep={currentStep} stepKey={step}>
            {step}
          </BaseStepNumberCircle>
          {step != quantitySteps && <SplitBar vertical={vertical}></SplitBar>}
        </div>
      ))}
    </BaseStepsWrapper>
  );
}

export default BaseSteps;
