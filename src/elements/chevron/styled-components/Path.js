//@flow

import styled, { css } from "styled-components";

export const Path = styled.path.attrs({
  d: "M4.98890354,8.25713675 L5.84428923,6.97405821 L5.84428923,6.97405821 C5.88258329,6.91661713 5.96019195,6.90109539 6.01763304,6.93938945 C6.027153,6.94573609 6.03575652,6.95335973 6.04320259,6.96204682 L11.840911,13.72604 L11.840911,13.72604 C11.8858388,13.7784557 11.9647513,13.7845259 12.017167,13.7395981 C12.0220269,13.7354326 12.0265596,13.7308998 12.0307252,13.72604 L17.8284336,6.96204682 L17.8284336,6.96204682 C17.8733614,6.90963109 17.9522739,6.90356089 18.0046896,6.94848866 C18.0133767,6.95593474 18.0210003,6.96453826 18.027347,6.97405821 L18.8827327,8.25713675 L18.8827327,8.25713675 C18.9140594,8.30412692 18.9099876,8.36628547 18.8727985,8.40878735 L12.0298902,16.229254 L12.0298902,16.229254 C11.9844299,16.2812085 11.9054596,16.2864732 11.853505,16.241013 C11.8493287,16.2373587 11.8454003,16.2334303 11.841746,16.229254 L4.99883774,8.40878735 L4.99883774,8.40878735 C4.96164859,8.36628547 4.95757676,8.30412692 4.98890354,8.25713675 Z"
})`
  ${({ theme, isActive }: { theme: Theme, isActive: boolean }): string => `

    fill: ${theme.color.black};

  `}
`;