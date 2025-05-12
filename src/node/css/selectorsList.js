"use strict";

import CSSNode from "../../node/css";

export default class SelectorsListCSSNode extends CSSNode {
  asCSS(context) {
    const css = this.reduceChildNode((css, childNode) => {
      const childNodeCSS = childNode.asCSS(context);

      css = (css !== null) ?
              `${css},
${childNodeCSS}` :
                childNodeCSS; ///

      return css;
    }, null);

    return css;
  }

  static fromNothing() { return CSSNode.fromNothing(SelectorsListCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(SelectorsListCSSNode, outerNode); }
}
