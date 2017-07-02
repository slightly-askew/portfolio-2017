//@flow
import styled, { css } from "styled-components";

export const MiddleLine = styled.path.attrs({
  d: "M107,32 L83,32"
})`
${({ buttonStatus, isOpen }: { buttonStatus: string, isOpen: boolean }) => css`
  stroke-dasharray: 24 172;
  transition: stroke-dashoffset 1.2s;

  ${buttonStatus === "willOpen" &&
    css`
    stroke-dashoffset: -4;
    transition: stroke-dashoffset 0.2s;
    `}
  ${isOpen &&
    css`
    stroke-dashoffset: 172;
    transition: stroke-dashoffset 2.2s;
    `}

`}`;
