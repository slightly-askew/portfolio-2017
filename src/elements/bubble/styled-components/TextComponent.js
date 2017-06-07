//@flow

//vendor
import styled from "styled-components";

export const TextComponent = styled.g`
  transform-origin: center center;
  cursor: pointer;
  &:hover {
    & rect {
      transform: scaleX(1);
    }
  }
  ${({ isActive }: { isActive: boolean }) => `
    transition: all 0.05s ${isActive ? "0.2s" : "0s"};
    transform: scale(${isActive ? "1" : "0"});
    opacity: (${isActive ? "1" : "0"})
  `}
`;
