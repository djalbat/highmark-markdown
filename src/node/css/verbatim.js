"use strict";

import CSSNode from "../../node/css";

import { EMPTY_STRING } from "../../constants";

export default class VerbatimCSSNode extends CSSNode {
  content(context) {
    const content = this.fromFirstChildNode((firstChildNode) => {
      const contentCSSNode = firstChildNode, ///
            content = contentCSSNode.content(context);

      return content;
    });

    return content;
  }

  asCSS(context) {
    const content = this.content(context),
          css = content;  ///

    return css;
  }

  static fromNothing() { return CSSNode.fromNothing(VerbatimCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(VerbatimCSSNode, outerNode); }
}
