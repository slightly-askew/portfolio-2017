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
    ["background" | "black" | "primary" | "pink"]: string
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
