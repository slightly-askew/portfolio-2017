//@flow

declare type Theme = {
  type: {
    ["title" | "heading" | "paragraph" | "label"]: string
  },
  scale: {
    ["s1" | "s2" | "s3" | "s4"]: (n: number) => string
  },
  color: {
    ["background" | "black" | "primary"]: string
  }
};
