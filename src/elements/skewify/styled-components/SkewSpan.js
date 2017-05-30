//@flow

import styled from "styled-components";

const random = (): number => Math.random() - 0.5;
const randomTranslate = (n: number): number => random() * n;
const randomRotate = (n: number): number => random() * n * 2;
const randomScale = (n = 1): number => random() * n + 1;

export const SkewSpan = styled.span.attrs({
  style: ({ isActive }) =>
    isActive
      ? {
          transformOrigin: "center center",
          transform: `scale(${randomScale(0.5)}) rotate(${randomRotate(24)}deg) translate(${randomTranslate(0.25)}em, ${randomTranslate(0.25)}em)`
        }
      : {
          transform: "none"
        }
})`
  ${({ isActive }: { isActive: boolean }) => `
    display: inline-block;
    will-change: transform;
    transition: all 0.2s;
  `}
`;
