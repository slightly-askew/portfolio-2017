//@flow

import React, { Component } from "react";
import isEqual from "lodash/isEqual";

type ReactComponent = React$Component<*, *, *> | React$Element<*>;

const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x)
});

const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x)
});

export default (componentName: string) => (
  WrappedComponent: () => React$Element<*>
): Class<ReactComponent> => {
  return class extends Component {
    props: {
      newLayout: () => mixed,
      ui: {
        breakpoints: {
          [componentName: string]: {
            [attribute: string]: string
          }
        }
      },
      queries: {
        [attribute: string]: mixed
      },
      queryEffects?: Array<(*) => mixed>
    };

    updateLayouts = ({ queryEffects, ...props }) => {
      const { newLayout, ui, queries } = props;
      return Object.keys(queries).map(i => {
        if (!isEqual(ui.breakpoints[componentName][i], queries[i])) {
          newLayout(`${componentName}`, { [i]: queries[i] });
          queryEffects && queryEffects.map(q => q(props));
        }
      });
    };

    componentWillMount() {
      this.updateLayouts(this.props);
    }
    componentWillReceiveProps(newProps) {
      this.updateLayouts(newProps);
    }

    render() {
      const { queries, queryEffects, ...props } = this.props;
      return <WrappedComponent {...props} />;
    }
  };
};
