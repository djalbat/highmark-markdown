"use strict";

import CSSNode from "../../node/css";

import { WEB_TARGET } from "../../targets";
import { EMPTY_STRING } from "../../constants";

export default class VerbatimCSSNode extends CSSNode {
  target(content) {
    const target = this.fromFirstChildNode((firstChildNode) => {
      const targetCSSNode = firstChildNode, ///
            target = targetCSSNode.target(content);

      return target;
    });

    return target;
  }

  content(context) {
    const content = this.fromSecondChildNode((secondChildNode) => {
      const contentCSSNode = secondChildNode, ///
            content = contentCSSNode.content(context);

      return content;
    });

    return content;
  }

  asCSS(context) {
    let css = EMPTY_STRING;

    let target;

    ({ target } = context);

    if (target === WEB_TARGET) {
      target = this.target(context);

      if (target === WEB_TARGET) {
        const content = this.content(context);

        css = content;  ///
      }
    }

    return css;
  }

  static fromNothing() { return CSSNode.fromNothing(VerbatimCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(VerbatimCSSNode, outerNode); }
}
