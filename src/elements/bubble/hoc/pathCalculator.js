//@flow

import { compose } from "recompose";

import genericPath from "../data/svgGenericPathData";
import adjustPath from "../helpers/adjustPath";
import { parsePath } from "../helpers/parsePath";
//import flattenPathData from '../helpers/flattenPathData';

type coordinates = {
  "x": number,
  "y": number
};

type coord = {
  "x"?: number,
  "y"?: number
};

export default ({
  transforms,
  d,
  ...props
}: {
  transforms: {
    flip: coordinates => coordinates,
    morph: coordinates => coordinates,
    offset: coordinates => coordinates
  },
  d: string
}): {} => {
  const { morph, flip, offset } = transforms;

  const orientate = compose(flip, offset, morph);

  const returnPathAsString = (a: Array<string>): string => a.join(" ");

  const transformPath = compose(
    returnPathAsString,
    adjustPath(orientate),
    parsePath
  );

  const pathData = transformPath(d);

  return Object.assign({}, { ...props }, { pathData: pathData });
};
