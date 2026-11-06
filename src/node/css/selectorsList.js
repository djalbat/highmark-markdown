"use strict";

import CSSNode from "../../node/css";

import { EMPTY_STRING } from "../../constants";
import { selectorsCSSNodesFromNode } from "../../utilities/css";

export default class SelectorsListCSSNode extends CSSNode {
  getSelectorsCSSNodes() {
    const node = this,  ///
          selectorsCSSNodes = selectorsCSSNodesFromNode(node);

    return selectorsCSSNodes;
  }

  asCSS(context) {
    const css = this.reduceChildNode((css, childNode) => {
      const childNodeCSS = childNode.asCSS(context);

      css = (css !== EMPTY_STRING) ?
             `${css},
${childNodeCSS}` :
                childNodeCSS; ///

      return css;
    }, EMPTY_STRING);

    return css;
  }

  static fromNothing() { return CSSNode.fromNothing(SelectorsListCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(SelectorsListCSSNode, outerNode); }
}
