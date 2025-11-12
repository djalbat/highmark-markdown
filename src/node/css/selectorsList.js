"use strict";

import CSSNode from "../../node/css";

import { selectorsCSSNodesFromNode } from "../../utilities/css";

export default class SelectorsListCSSNode extends CSSNode {
  getSelectorsCSSNodes() {
    const node = this,
          selectorsCSSNodes = selectorsCSSNodesFromNode(node);

    return selectorsCSSNodes;
  }

  asCSS(context) {
    let css;

    const { cssSelectorsString } = context;

    css = this.reduceChildNode((css, childNode) => {
      const childNodeCSS = childNode.asCSS(context);

      css = (css !== null) ?
              `${css},
${childNodeCSS}` :
                childNodeCSS; ///

      return css;
    }, null);

    css = `${cssSelectorsString} ${css}`;

    return css;
  }

  static fromNothing() { return CSSNode.fromNothing(SelectorsListCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(SelectorsListCSSNode, outerNode); }
}
