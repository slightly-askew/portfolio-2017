//@flow

export const parseViewBox = (viewBox: string): {x: number, y: number} => {

  const vb: Array<number> = viewBox.split(' ').map(v => parseFloat(v));

  const xDimension = vb[2] - vb[0];
  const yDimension = vb[3] - vb[1];

  return ({
    x: xDimension,
    y: yDimension
  })
}
