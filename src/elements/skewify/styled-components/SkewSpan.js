//@flow

import styled from "styled-components";

const random = (severity = 1): number => (Math.random() - 0.5) * severity;
const randomTranslate = (n: number, s): number => random(s) * n;
const randomRotate = (n: number, s): number => random(s) * n * 2;
const randomScale = (n = 1, s): number => random(s) * n + 1;

export const SkewSpan = styled.span.attrs({
  style: ({ isActive, severity, theme }) =>
    isActive
      ? {
          transformOrigin: "center center",
          transform: `scale(${randomScale(
            0.25,
            severity
          )}) rotate(${randomRotate(
            15,
            severity
          )}deg) translate(${randomTranslate(
            0.125,
            severity
          )}em, ${randomTranslate(0.125, severity)}em)`
        }
      : {
          transform: "none"
        }
})`
  ${({ isActive }: { isActive: boolean }) => `
    display: inline-block;
    will-change: transform;
    transition: transform 0.2s;
  `}
`;
