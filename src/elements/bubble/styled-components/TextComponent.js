//@flow

//vendor
import styled from "styled-components";

export const TextComponent = styled.g`
  transform-origin: 50% 60%;
  will-change: transform opacity;
  cursor: pointer;
  &:hover {
    & rect {
      transform: scaleX(1);
    }
    transition: transform 0.1s 0s;
    transform: scale(1.025);
  }
  ${({ isActive }: { isActive: boolean }) => `
    transition: transform 0.1s ${isActive
      ? "0.15s"
      : "0s"}, opacity 0.1s ${isActive ? "0.1s" : "0s"};
    transform: scale(${isActive ? "1" : "0"});
    opacity: (${isActive ? "1" : "0"})
  `}
`;
