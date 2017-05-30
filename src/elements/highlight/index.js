//@flow

import React from "react";

import { Link } from "react-router-dom";
import { Underline } from "./Underline";

export class Highlight extends React.Component {
  state = {
    isActive: false
  };

  makeActive = () => this.setState(() => ({ isActive: true }));
  rmActive = () => this.setState(() => ({ isActive: false }));

  createLink = ({ url }: { url: string } = { url: "" }, children: mixed) => {
    if (url) {
      const extLink = url.match(/^http/);
      if (extLink) {
        return <a href={url}>{children}</a>;
      } else {
        return <Link to={url}>{children}</Link>;
      }
    } else {
      return <span>{children}</span>;
    }
  };

  addStateToChild = (child, state, i = 0) => {
    if (typeof child === "object") {
      const newProps = Object.assign({}, child.props, state, { key: i });
      return React.cloneElement(child, newProps, child.props.children);
    }
    return child;
  };

  addStateToChildren = (children: mixed, state: {}) => {
    if (Array.isArray(children)) {
      return children.map((c, i) => this.addStateToChild(c, state, i));
    }
    return this.addStateToChild(children, state);
  };

  render() {
    const children = this.addStateToChildren(this.props.children, this.state);
    return (
      <Underline
        onMouseEnter={this.makeActive}
        onMouseLeave={this.rmActive}
        isActive={this.state.isActive}
        {...this.props}
      >
        {this.createLink(this.props, children)}
      </Underline>
    );
  }
}
