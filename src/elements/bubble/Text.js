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

class Block extends React.Component {
  state = {
    underlineWidth: 0
  };
  componentDidMount() {
    const getUnderlineWidth: ?number = this.textElementWidth.getBBox().width;
    this.setState({ underlineWidth: getUnderlineWidth });
  }

  render() {
    const { origin, isActive, children } = this.props;

    return (
      <TextComponent isActive={isActive}>
        <Underline origin={origin} width={this.state.underlineWidth} />
        <TextElement
          origin={origin}
          innerRef={el => {
            this.textElementWidth = el;
          }}
        >
          {children}
        </TextElement>
      </TextComponent>
    );
  }
}

class Text extends React.Component {
  getTextItems = ({
    textOrigins,
    textItems,
    ...props
  }: {
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
        <Block key={i} origin={origin} target={child.target} {...props}>
          {child.label}
        </Block>
      );
    });

  render() {
    return (
      <TextGroup>
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
