//@flow

import React from "react";

import {
  TextGroup,
  TextComponent,
  TextElement,
  Underline
} from "./styled-components";

type coordinates = {
  "x": number,
  "y": number
};

//maintains the width of each textElement for the purpose of measuring underline length
class Block extends React.Component {
  render() {
    const {
      origin,
      isActive,
      children,
      elementRef,
      textElementWidths
    } = this.props;
    const ref = elementRef(children);

    return (
      <TextComponent isActive={isActive}>
        <Underline
          origin={origin}
          width={textElementWidths ? textElementWidths[children] : 0}
        />
        <TextElement origin={origin} innerRef={ref}>
          {children}
        </TextElement>
      </TextComponent>
    );
  }
}

class Text extends React.Component {
  elements = {};
  state = {};

  componentDidMount() {
    this.setState(() => ({
      textElementDimensions: this.elements
    }));
  }

  getTextItems = ({
    elementRef,
    textOrigins,
    textItems,
    ...props
  }: {
    elementRef: () => any,
    textOrigins: Array<coordinates>,
    textItems: Array<{
      label: string,
      target: string
    }>,
    props: Array<{
      isActive: boolean
    }>
  }) =>
    textItems.map((child: { label: string, target: string }, i) => {
      const origin = textOrigins[i];

      return (
        <Block
          key={i}
          origin={origin}
          elementRef={elementRef}
          target={child.target}
          {...props}
        >
          {child.label}
        </Block>
      );
    });

  render() {
    return (
      <TextGroup innerRef={this.props.textBoxSize}>
        {this.getTextItems(this.props)}
      </TextGroup>
    );
  }
}

export default Text;

/*({
  textOrigins,
  textWidths,
  isActive,
  textItems
}: {
  textOrigins: coordinates[],
  textWidths: number[],
  isActive: boolean,
  textItems: Array<{
    label: string,
    target: string
  }>
}): React$Element<*> => (
  <TextGroup>

    {textItems.map((child, i) => {
      const origin = textOrigins[i];
      const width = textWidths[i];
      let textElementWidth = null;
      const underlineWidth = () => textElementWidth.width;

      return (
        <TextComponent key={i} isActive={isActive} target={child.target}>
          <Underline origin={origin} width={console.log(underlineWidth)} />
          <TextElement
            origin={origin}
            innerRef={el => {
              const bbox = el.getBBox();
              textElementWidth = bbox;
            }}
          >
            {child.label}
          </TextElement>
        </TextComponent>
      );
    })}

  </TextGroup>
);
*/
