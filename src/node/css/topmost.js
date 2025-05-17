"use strict";

import CSSNode from "../../node/css";
import RuleSetCSSTransform from "../../transform/css/ruleSet";

import { CSS_MARKDOWN_STYLE_RULE_NAME } from "../../ruleNames/markdownStyle";
import { ruleSetCSSNodesFromNode, nestedRuleSetCSSNodesFromNode } from "../../utilities/css";

export default class TopmostCSSNode extends CSSNode {
  getRuleName() {
    const ruleNme = CSS_MARKDOWN_STYLE_RULE_NAME;

    return ruleNme;
  }

  resolve(context) {
    this.resolveSelectors(context);

    this.flatten(context);
  }

  resolveSelectors(context) {
    const node = this,  ///
          ruleSetCSSNodes = ruleSetCSSNodesFromNode(node);

    ruleSetCSSNodes.forEach((ruleSetCSSNode) => {
      ruleSetCSSNode.resolveSelectors(context);
    });
  }

  flatten(context) {
    const node = this,  ///
          topmostCSSNode = this,  ///
          nestedRuleSetCSSNodes = nestedRuleSetCSSNodesFromNode(node);

    nestedRuleSetCSSNodes.forEach((nestedRuleSetCSSNode) => {
      const ruleSetCSSNode = nestedRuleSetCSSNode,  ///
            ruleSetCSSTransform = RuleSetCSSTransform.fromRuleSetCSSNode(ruleSetCSSNode);

      ruleSetCSSTransform.remove();

      ruleSetCSSTransform.appendToTopmostCSSNode(topmostCSSNode);
    });
  }

  asString() {
    const ruleName = this.getRuleName(),
          string = ruleName;  ///

    return string;
  }

  static fromNothing() { return CSSNode.fromNothing(TopmostCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(TopmostCSSNode, outerNode); }
}
