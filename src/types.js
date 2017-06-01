//@flow
/* eslint-disable prettier */

//styled-components theme

declare type Theme = {
  type: {
    ["title" | "heading" | "paragraph" | "label"]: string
  },
  scale: {
    ["s1" | "s2" | "s3" | "s4" | "s8"]: (n?: number) => string
  },
  color: {
    ["background" | "black" | "primary" | "pink" | "yellow" | "green"]: string
  },
  utils: {
    "baseAdjust": (n: number) => string
  },
  effect: {
    ["lighten" | "darken"]: () => string
  }
};

//component queries
//prettier-ignore
type compQuery = Array<(height?: number, width?: number) => { [string]: mixed }>;

declare type compConfig = {
  monitorWidth: boolean,
  monitorHeight: boolean,
  refreshRate: number,
  pure: boolean
};

//prettier-ignore
declare function componentQueries({
  queries?: compQuery,
  config?: compConfig
}): <T>(React$Element<*>) => React$Element<T>;

//HMR

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void
  }
};
 //Bubble
declare type originTuple = [number, number];

declare type dataObject = {
  cx: number,
  cy: number,
  r: number,
  origin: originTuple
};

declare type defaultBubbleConfig = {
  children?: Array<string | Array<string | object<string>>>,
  characterWidth: number,
  minTextWidth: number,
  paddingLrg: number,
  paddingSml: number,
  textHeight: number,
  verticalMargin: number,
  columns: number,
  size: string,
  underlineAdjustment: number,
  speachDirection: String<"top-left"
      | "top-right"
      | "right-top"
      | "right-bottom"
      | "bottom-left"
      | "bottom-right"
      | "left-bottom"
      | "bottom-right">,
  dimentions: {
    x: number,
    y: number
  },
  origin: {
    x: number,
    y: number
  }
};

declare type optionalBubbleConfig = {
  children?: Array<string | [string, { target: string }]>,
  characterWidth?: number,
  minTextWidth?: number,
  paddingLrg?: number,
  paddingSml?: number,
  textHeight?: number,
  verticalMargin?: number,
  columns?: number,
  size?: string,
  underlineAdjustment?: number,
  speachDirection?: String<"top-left"
      | "top"
      | "top-right"
      | "right-top"
      | "right"
      | "right-bottom"
      | "bottom-left"
      | "bottom"
      | "bottom-right"
      | "left-bottom"
      | "bottom"
      | "bottom-right">
};
