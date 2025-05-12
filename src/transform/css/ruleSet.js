"use strict";

import CSSTransform from "../../transform/css"

export default class RuleSetCSSTransform extends CSSTransform {
  getRuleSetCSSNode() {
    const cssNode = this.getCSSNode(),
          ruleSetCSSNode = cssNode; ///

    return ruleSetCSSNode;
  }

  resolve(context) {
    const ruleSetCSSNode = this.getRuleSetCSSNode();

    ruleSetCSSNode.resolve(context);
  }

  static fromRuleSetCSSNode(ruleSetCSSNode) {
    const cssNode = ruleSetCSSNode, ///
          paragraphCSSTransform = CSSTransform.fromCSSNode(RuleSetCSSTransform, cssNode);

    return paragraphCSSTransform;
  }
}
