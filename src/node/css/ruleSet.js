"use strict";

import CSSNode from "../../node/css";
import RuleSetCSSTransform from "../../transform/css/ruleSet";
import SelectorsListCSSTransform from "../../transform/css/selectorsList";

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
          ruleSetCSSNodes = ruleSetCSSNodesFromNode(node);

    ruleSetCSSNodes.forEach((ruleSetCSSNode) => {
      const parentNCSSNode = this.getParentCSSNode(),  ///
            ruleSetCSSTransform = RuleSetCSSTransform.fromRuleSetCSSNode(ruleSetCSSNode),
            selectorsListCSSTTransform = SelectorsListCSSTransform.fromRuleSetCSSNode(ruleSetCSSNode);

      ruleSetCSSTransform.resolve(context);

      ruleSetCSSTransform.remove();

      ruleSetCSSTransform.appendTo(parentNCSSNode);

      selectorsListCSSTTransform.mergeWithRuleSetCSSTransform(ruleSetCSSTransform);
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
