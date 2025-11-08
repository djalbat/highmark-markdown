"use strict";

import CSSNode from "../../node/css";

import { WEB_TARGET } from "../../targets";
import { EMPTY_STRING } from "../../constants";

export default class VerbatimCSSNode extends CSSNode {
  getTarget() {
    const target = this.fromFirstChildNode((firstChildNode) => {
      const targetCSSNode = firstChildNode, ///
            target = targetCSSNode.getTarget();

      return target;
    });

    return target;
  }

  asCSS(context) {
    let css = EMPTY_STRING;

    let target;

    ({ target } = context);

    if (target === WEB_TARGET) {
      css = super.asCSS(context);
    }

    return css;
  }

  static fromNothing() { return CSSNode.fromNothing(VerbatimCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(VerbatimCSSNode, outerNode); }
}
