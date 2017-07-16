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

const addData = compose(
  pathCalculator,
  originCalculator,
  transformCalculator,
  offsetCalculator,
  textCalculator,
  applyConfig
);

let bubbleId = 0;

class BubbleWrapper extends React.Component {
  maskId = `bubble-mask--${bubbleId++}`;
  elementObj = {};
  state = {};
  maskRef = {};

  acceptElement = (i: string) => (el: *) => {
    this.elementObj[i] = el;
  };

  getBBoxProperty = (element: any) => (property: *): * =>
    element.getBBox()[property];

  findMaxWidth = (ary: number[]): number =>
    ary.reduce((acc, a) => Math.max(acc, a));

  componentDidMount() {
    const elements: *[] = Object.values(this.elementObj);

    console.log(this.maskRef);

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
      textElementHeights: textHeights
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
      <Bubble
        {...newProps}
        elementRef={this.acceptElement}
        maskId={this.maskId}
      >
        {this.props.children}
      </Bubble>
    );
  }
}

export default BubbleWrapper;
