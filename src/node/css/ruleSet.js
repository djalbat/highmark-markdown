"use strict";

import CSSNode from "../../node/css";

import { EMPTY_STRING } from "../../constants";

export default class RuleSetCSSNode extends CSSNode {
  asCSS(context) {
    let css;

    const multiplicity = this.getMultiplicity(),
          firstIndex = 0,
          lastIndex = multiplicity - 1;

    css = this.reduceChildNode((css, childNode, index) => {
      const childNodeCSS = childNode.asCSS(context);

      css = `${css}${childNodeCSS}`;

      if (index === firstIndex) {
        css = `${css} {
`;
      }

      if (index === lastIndex) {
        css = `${css}}`;
      }

      return css;
    }, EMPTY_STRING);

    return css;
  }

  static fromNothing() { return CSSNode.fromNothing(RuleSetCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(RuleSetCSSNode, outerNode); }
}
