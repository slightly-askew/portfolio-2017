//@flow

import React from "react";
import type { Children } from "react";

type FunctionComponent<P> = (props: P) => ?React$Element<any>;
type ClassComponent<D, P, S> = Class<React$Component<D, P, S>>;
type GenericComponent = ClassComponent<*, *, *> | FunctionComponent<*>;

const addActiveState = (
  Component: ClassComponent<*, *, *> | FunctionComponent<*>
): ClassComponent<*, *, *> =>
  class extends React.Component {
    state: {
      isActive: boolean
    } = {
      isActive: false
    };

    toggleActive = () =>
      this.setState((oldState: { isActive: boolean }) => ({
        isActive: !oldState.isActive
      }));

    addActive = () =>
      this.setState(() => ({
        isActive: true
      }));

    rmActive = () =>
      this.setState(() => ({
        isActive: false
      }));

    addStateToChild = (
      child: Children,
      state: { isActive: boolean },
      i: number = 0
    ) => {
      if (typeof child === "object") {
        const newProps = Object.assign({}, child.props, state ? state : {}, {
          key: i
        });
        return React.cloneElement(
          child,
          newProps,
          this.addStateToChildren(child.props.children, state)
        );
      }
      return child;
    };

    addStateToChildren = (children: Children, state: { isActive: boolean }) => {
      if (Array.isArray(children)) {
        return children.map((c, i) => this.addStateToChild(c, state, i));
      }
      return this.addStateToChild(children, state);
    };

    render = () => {
      const children = this.addStateToChildren(this.props.children, this.state);
      return (
        <Component
          {...this.props}
          {...this.state}
          onMouseEnter={this.addActive}
          onMouseLeave={this.rmActive}
          onFocus={this.addActive}
          onBlur={this.rmActive}
          onTouchStart={this.addActive}
        >
          {children}
        </Component>
      );
    };
  };

export default addActiveState;
