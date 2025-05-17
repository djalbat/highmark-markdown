"use strict";

import CSSNode from "../../node/css";

import { selectorCSSNodesFromNode } from "../../utilities/css";

export default class SelectorsCSSNode extends CSSNode {
  getSelectorCSSNodes() {
    const node = this,
          selectorCSSNodes = selectorCSSNodesFromNode(node);

    return selectorCSSNodes;
  }

  asCSS(context) {
    let css;

    const { selectorsString } = context;

    css = this.reduceChildNode((css, childNode) => {
      const childNodeCSS = childNode.asCSS(context);

      css = `${css} ${childNodeCSS}`;

      return css;
    }, selectorsString);

    return css;
  }

  static fromNothing() { return CSSNode.fromNothing(SelectorsCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(SelectorsCSSNode, outerNode); }
}
