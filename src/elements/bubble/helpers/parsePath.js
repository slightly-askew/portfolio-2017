//@flow

export const parsePath = (path: string): ?mixed[] => {

  const segmentTypes = path.match(/A-Z/);
  const segmentValues = path.split(/A-Z/);

  const splitCoords = (seg: string): string[] => seg.split(' ');
  const splitVals = (seg: string): number[] => seg.split(',').map(s => parseFloat(s));

  if (segmentTypes && segmentValues && Array.isArray(segmentTypes) && Array.isArray(segmentValues)) {
    return segmentTypes.map((t, i) => ([`${t}`, splitCoords(segmentValues[i]).map(c => splitVals.c)]));
  }
}
