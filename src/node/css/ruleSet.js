"use strict";

import CSSNode from "../../node/css";
import RuleSetCSSTransform from "../../transform/css/ruleSet";

import { EMPTY_STRING } from "../../constants";
import { ruleSetCSSNodesFromNode } from "../../utilities/css";

export default class RuleSetCSSNode extends CSSNode {
  getSelectorsListCSSNode() {
    const selectorsListCSSNode = this.fromFirstChildNode((firstChildNode) => {
      const selectorsListCSSNode = firstChildNode;  ///

      return selectorsListCSSNode;
    });

    return selectorsListCSSNode;
  }

  resolve(context) {
    const node = this,  ///
          parentNCSSNode = this.getParentCSSNode(),  ///
          ruleSetCSSNodes = ruleSetCSSNodesFromNode(node);

    ruleSetCSSNodes.forEach((ruleSetCSSNode) => {
      const ruleSetCSSTransform = RuleSetCSSTransform.fromRuleSetCSSNode(ruleSetCSSNode);

      ruleSetCSSTransform.resolve(context);

      ruleSetCSSTransform.remove();

      ruleSetCSSTransform.appendTo(parentNCSSNode);
    });

    const ruleSetCSSNode = this,  ///
          ruleSetCSSTransform = RuleSetCSSTransform.fromRuleSetCSSNode(ruleSetCSSNode);

    ruleSetCSSNodes.forEach((ruleSetCSSNode) => {
      ruleSetCSSTransform.mergeWithRuleSetCSSNode(ruleSetCSSNode);
    });
  }

  asCSS(context) {
    let css;

    const multiplicity = this.getMultiplicity(),
          firstIndex = 0,
          lastIndex = multiplicity - 1;

    css = this.reduceChildNode((css, childNode, index) => {
      const childNodeCSS = childNode.asCSS(context);

      css = `${css}${childNodeCSS}`;

      if (index === firstIndex) {
        css = `${css} {
`;
      }

      if (index === lastIndex) {
        css = `${css}}

`;
      }

      return css;
    }, EMPTY_STRING);

    return css;
  }

  static fromNothing() { return CSSNode.fromNothing(RuleSetCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(RuleSetCSSNode, outerNode); }
}
