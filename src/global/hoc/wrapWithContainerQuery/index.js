//@flow

import React, { Component } from "react";
import isEqual from "lodash/isEqual";

type ReactComponent = React$Component<*, *, *> | React$Element<*>;

export default (componentName: string) => (
  WrappedComponent: ReactComponent
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
      }
    };

    updateLayout = ({ newLayout, ui, queries }) => {
      if (!isEqual(ui.breakpoints[componentName], queries)) {
        newLayout(`${componentName}`, queries);
      }
    };

    updateLayouts = ({ newLayout, ui, queries }) =>
      Object.keys(queries).map(
        i =>
          !isEqual(ui.breakpoints[componentName][i], queries[i]) &&
          newLayout(`${componentName}`, { [i]: queries[i] })
      );

    componentWillMount() {
      this.updateLayouts(this.props);
    }
    componentWillUpdate(newProps) {
      this.updateLayouts(newProps);
    }

    render() {
      const { queries, ...props } = this.props;
      return <WrappedComponent {...props} />;
    }
  };
};
