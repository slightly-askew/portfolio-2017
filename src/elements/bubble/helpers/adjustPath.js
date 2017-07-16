//@flow

export type flatPathData = Array<any>;

type coordinates = {
  "x": number,
  "y": number
};

const prepareCoords = (adjustment: (*) => coordinates) => (
  tuple: [number, number]
): string => {
  return Object.values(
    adjustment({
      x: tuple[0],
      y: tuple[1]
    })
  ).join(",");
};

const processPath = adjustment => (p: [string, [number, number][]]): string => {
  const process = prepareCoords(adjustment);

  if (p[0] === "Z") {
    return p[0];
  }

  return `${p[0] + p[1].map(c => process(c)).join(" ")}`;
};

export default (adjustment: () => coordinates) => (
  pathAry: flatPathData
): string[] => {
  const adjustedPath = processPath(adjustment);
  return pathAry.map(adjustedPath);
};
