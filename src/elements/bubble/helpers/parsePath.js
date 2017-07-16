//@flow

export const parsePath = (path: string): ?(mixed[]) => {
  const segmentTypes = path.match(/[A-Z]/gi);
  const segmentValues = path.split(/[A-Z]/gi).slice(1);

  const splitCoords = (seg: string): string[] =>
    seg.split(" ").filter(f => !!f);

  const splitVals = (seg: string): ?(number[]) => {
    if (seg && seg !== "") {
      return seg.split(",").map(n => parseFloat(n));
    }
  };

  if (
    segmentTypes &&
    segmentValues &&
    Array.isArray(segmentTypes) &&
    Array.isArray(segmentValues)
  ) {
    return segmentTypes.map((t, i) => {
      return [`${t}`, splitCoords(segmentValues[i]).map(s => splitVals(s))];
    });
  }
};
