"use strict";

import CSSNode from "../../node/css";
import RuleSetCSSTransform from "../../transform/css/ruleSet";
import SelectorsListCSSTransform from "../../transform/css/selectorsList";

import { EMPTY_STRING } from "../../constants";
import { ruleSetCSSNodesFromNode, selectorsListCSSNodesFromNode } from "../../utilities/css";

export default class RuleSetCSSNode extends CSSNode {
  getSelectorsListCSSNode() {
    const selectorsListCSSNode = this.fromFirstChildNode((firstChildNode) => {
      const selectorsListCSSNode = firstChildNode;  ///

      return selectorsListCSSNode;
    });

    return selectorsListCSSNode;
  }

  resolve(context) {
    const node = this,
          ruleSetCSSNodes = ruleSetCSSNodesFromNode(node);

    ruleSetCSSNodes.forEach((ruleSetCSSNode) => {
      ruleSetCSSNode.resolve(context);
    });

    const ruleSetCSSNode = this,  ///
          selectorsListCSSNodes = selectorsListCSSNodesFromNode(node),
          selectorsListCSSTransform = SelectorsListCSSTransform.fromRuleSetCSSNode(ruleSetCSSNode);

    selectorsListCSSNodes.forEach((selectorsListCSSNode) => {
      selectorsListCSSTransform.mergeWithSelectorsListCSSNode(selectorsListCSSNode);
    });

    // const parentCSSNode = this.getParentCSSNode();
    //
    // ruleSetCSSNodes.forEach((ruleSetCSSNode) => {
    //   const ruleSetCSSTransform = RuleSetCSSTransform.fromRuleSetCSSNode(ruleSetCSSNode);
    //
    //   ruleSetCSSTransform.remove();
    //
    //   ruleSetCSSTransform.appendTo(parentCSSNode);
    // });
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
