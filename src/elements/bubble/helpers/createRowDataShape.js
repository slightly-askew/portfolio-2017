//@flow

import { compose } from 'recompose';

const getColSize = (list: Array<any>, numColumns: number): {

  list: Array<any>,
  numColumns: number

} => ({
  list: list,
  numRows: Math.ceil(list.length / numColumns),
  numColumns: numColumns,
});

const splitListIntoRows = ({ list, numRows, numColumns }: {

  list: Array<any>,
  numRows: number,
  numColumns: number
}): {
  shape: Array<Array<any>>,
  numRows: number,
  numColumns: number

} => {

  let rowList = [];

  for (let i = 0; i < numRows; i++) {

    const rowStart = i * numColumns;
    const rowFin = i * numColumns + numColumns;

    rowList.push(list.slice(rowStart,rowFin))
  }

  return ({
    shape: rowList,
    numColumns: numColumns,
    numRows: numRows
    });
}

const createRowDataShape = compose(
  splitListIntoRows,
  getColSize
)

export default (list: Array<any>, numColumns: number): {
  shape: Array<Array<any>>,
  numColumns: number,
  numRows: number
  } => (

  createRowDataShape(list, numColumns)
)
