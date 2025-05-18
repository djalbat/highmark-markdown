"use strict";

import CSSTransform from "../../transform/css"
import RuleSetCSSNode from "../../node/css/ruleSet";

export default class RuleSetCSSTransform extends CSSTransform {
  appendToTopmostCSSNode(topmostCSSNode) {
    const cssNode = topmostCSSNode; ///

    this.appendTo(cssNode);
  }

  static fromRuleSetCSSNode(ruleSetCSSNode) {
    const cssNode = ruleSetCSSNode, ///
          ruleSetCSSTransform = CSSTransform.fromCSSNode(RuleSetCSSTransform, cssNode);

    return ruleSetCSSTransform;
  }

  static fromDeclarationCSSNodes(declarationCSSNodes) {
    const ruleSetCSSNode = RuleSetCSSNode.fromDeclarationCSSNodes(declarationCSSNodes),
          cssNode = ruleSetCSSNode,
          ruleSetCSSTransform = CSSTransform.fromCSSNode(RuleSetCSSTransform, cssNode);

    return ruleSetCSSTransform;
  }
}
