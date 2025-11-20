"use strict";

import CSSNode from "../../node/css";

export default class SelectorsCSSNode extends CSSNode {
  asCSS(context) {
    let css;

    const { cssSelectorsString } = context;

    css = this.reduceChildNode((css, childNode) => {
      const childNodeCSS = childNode.asCSS(context);

      css = (css !== null) ?
              `${css}${childNodeCSS}` :
                childNodeCSS; ///

      return css;
    }, null);

    css = `${cssSelectorsString} ${css}`;

    return css;
  }

  static fromNothing() { return CSSNode.fromNothing(SelectorsCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(SelectorsCSSNode, outerNode); }
}
