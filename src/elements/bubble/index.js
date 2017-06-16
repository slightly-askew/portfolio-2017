//@flow
import React from "react";
//vendor
import { compose } from "recompose";

//files
import Bubble from "./Bubble";
import applyConfig from "./hoc/applyConfig";
import offsetCalculator from "./hoc/offsetCalculator";
import transformCalculator from "./hoc/transformCalculator";
import textCalculator from "./hoc/textCalculator";
import originCalculator from "./hoc/originCalculator";
import pathCalculator from "./hoc/pathCalculator";

type coordinates = {
  "x": number,
  "y": number
};

const addData = compose(
  pathCalculator,
  originCalculator,
  transformCalculator,
  offsetCalculator,
  textCalculator,
  applyConfig
);

class NewBubble extends React.Component {
  elementObj = {};
  state = {};

  acceptElement = i => el => {
    this.elementObj[i] = el;
  };

  getBBoxProperty = element => property => element.getBBox()[property];

  findMaxWidth = (ary: number[]): number =>
    ary.reduce((acc, a) => Math.max(acc, a));

  componentDidMount() {
    const elements = Object.values(this.elementObj);

    const bBoxes = elements.map(el => this.getBBoxProperty(el));

    const widths = bBoxes.map(b => b("width"));
    const heights = bBoxes.map(b => b("height"));

    const keys = Object.keys(this.elementObj);

    const textWidths = keys.reduce((acc, key, i) => {
      acc[key] = widths[i];
      return acc;
    }, {});

    const textHeights = keys.reduce((acc, key, i) => {
      acc[key] = heights[i];
      return acc;
    }, {});

    this.setState(() => ({
      textElementWidths: textWidths,
      textElementHeights: textHeights,
    }));
  }

  render() {
    const propsForProcess = Object.assign(
      {},
      { ...this.props },
      { ...this.state }
    );
    const newProps = addData(propsForProcess);
    console.log(newProps);
    return (
      <Bubble {...newProps} elementRef={this.acceptElement}>
        {this.props.children}
      </Bubble>
    );
  }
}

const OldBubble = (props: {
  d?: string,
  viewBox?: string,
  children?: [],
  dividerOrigins?: coordinates[],
  dividerWidth?: number,
  textDimensions?: coordinates,
  pathData?: string,
  mask?: string,
  textOrigins?: coordinates[],
  textWidths?: number[],
  isActive?: boolean,
  textItems?: Array<{
    label?: string,
    target?: string
  }>
}) => (
  <Bubble {...addData(props)}>
    {props.children}
  </Bubble>
);

export default NewBubble;
