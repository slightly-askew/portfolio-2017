//@flow

import createRowDataShape from "../helpers/createRowDataShape";

type Props = {
  textItems: Array<{
    label: string,
    target: string
  }>,
  textPadding: {
    ["top" | "right" | "bottom" | "left"]: number
  },
  textHeight: number,
  textElementWidths: { [string]: number },
  textMargin: number,
  dividerWidth: number,
  textColumns: number,
  rowSize: number,
  textboxOrigin: {
    x: number,
    y: number
  }
};

export default (props: Props) => {
  const checkItemAgainstMax = (i: ?number = 0, max: ?number = 0): number => {
    return Math.max(max ? max : 0, i ? i : 0);
  };

  const getMaximumRangeCount = (shape: {
    shape: Array<Array<number>>,
    numColumns: number
  }): number[] => {
    //const rangeSizes = new Array(shape.numColumns).fill(1);
    const rangeSizes = [];
    shape.shape.map(row =>
      row.map(
        (val, i) => (rangeSizes[i] = checkItemAgainstMax(val, rangeSizes[i]))
      )
    );
    return rangeSizes;
  };

  const childrenAsWidths = props.textElementWidths
    ? Object.values(props.textElementWidths)
    : new Array(props.textItems.length).fill(1);
  const widthsAsShape = createRowDataShape(childrenAsWidths, props.textColumns);
  const colWidths = getMaximumRangeCount(widthsAsShape);
  const columnMargin = props.textMargin * 2;

  const textOriginsX: Array<number> = colWidths
    .reduce(
      (acc, c, i) =>
        acc.concat(acc[i] + c + columnMargin * 2 + props.dividerWidth),
      [0]
    )
    .slice(0, props.textColumns);

  const getLastValue = (a: Array<number>): number => a.slice().pop();

  const textFullWidth: number =
    getLastValue(textOriginsX) + getLastValue(colWidths);

  const columnDividerOrigins = textOriginsX
    .slice(1)
    .map(o => o - columnMargin - props.dividerWidth);

  // Height
  const numRows = widthsAsShape.numRows;
  const childrenAsHeights = props.textElementHeights
    ? Object.values(props.textElementHeights)
    : new Array(props.textItems.length).fill(1);
  const heightShape = createRowDataShape(childrenAsHeights, numRows);
  const rowHeights = getMaximumRangeCount(heightShape);

  const configureY = (
    rowHeights: number[],
    margin: number
  ): { origins: number[], height: number } => {
    let origins = [];
    const height = rowHeights.reduce((acc, h, i, ary) => {
      acc += h;
      origins.push(acc);
      if (i + 1 < ary.length) {
        acc += margin;
      }
      return acc;
    }, 0);
    return {
      origins: origins,
      height: height
    };
  };

  const yAxis = configureY(rowHeights, props.textMargin);

  /* end column logic */

  return Object.assign(
    {},
    { ...props },
    {
      textDimensions: {
        x: textFullWidth,
        y: yAxis.height
      }
    },
    {
      textGrid: {
        x: textOriginsX,
        y: yAxis.origins
      }
    },
    {
      dividerGrid: {
        x: columnDividerOrigins,
        y: [0]
      }
    },
    { colSize: numRows }
  );
};
