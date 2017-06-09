//@flow

//vendor
import styled from "styled-components";

export const TextComponent = styled.g`
  transform-origin: center center;
  will-change: transform;
  cursor: pointer;
  &:hover {
    & rect {
      transform: scaleX(1);
    }
    transition: transform 0.1s 0s;
    transform: scale(1.025);
  }
  ${({ isActive }: { isActive: boolean }) => `
    transition: all 0.05s ${isActive ? "0.1s" : "0s"};
    transform: scale(${isActive ? "1" : "0"});
    opacity: (${isActive ? "1" : "0"})
  `}
`;
