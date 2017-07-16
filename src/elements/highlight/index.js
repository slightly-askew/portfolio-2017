//@flow

import React from "react";
import type { Children } from "react";

import { Link } from "react-router-dom";
import { Underline } from "./Underline";

export class Highlight extends React.Component {
  createLink = ({ url }: { url: string } = { url: "" }, children: Children) => {
    if (url) {
      const extLink = url.match(/^http/);
      if (extLink) {
        return (
          <a href={url}>
            {children}
          </a>
        );
      } else {
        return (
          <Link to={url}>
            {children}
          </Link>
        );
      }
    } else {
      return (
        <span>
          {children}
        </span>
      );
    }
  };

  render() {
    return (
      <Underline {...this.props}>
        {this.createLink(this.props, this.props.children)}
      </Underline>
    );
  }
}
