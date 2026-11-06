"use strict";

import CSSNode from "../../node/css";
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

  getRemainingCSSNodes() {
    const remainingCSSNodes = this.reduceChildNode((remainingCSSNodes, childNode, index) => {
      if (index > 0) {
        const remamingChildNode = childNode;  ///

        remainingCSSNodes.push(remamingChildNode);
      }

      return remainingCSSNodes;
    }, []);

    return remainingCSSNodes;
  }

  resolveSelectors(context) {
    const node = this,  ///
          ruleSetCSSNodes = ruleSetCSSNodesFromNode(node);

    ruleSetCSSNodes.forEach((ruleSetCSSNode) => {
      ruleSetCSSNode.resolveSelectors(context);
    });

    const ruleSetCSSNode = this,  ///
          selectorsListCSSNodes = selectorsListCSSNodesFromNode(node),
          selectorsListCSSTransform = SelectorsListCSSTransform.fromRuleSetCSSNode(ruleSetCSSNode);

    selectorsListCSSNodes.forEach((selectorsListCSSNode) => {
      selectorsListCSSTransform.mergeWithSelectorsListCSSNode(selectorsListCSSNode);
    });
  }

  isEmpty() {
    const multiplicity = this.getMultiplicity(),
          empty = (multiplicity === 1);

    return empty;
  }

  asCSS(context) {
    let css;

    const empty = this.isEmpty();

    if (!empty) {
      const selectorsListCSS = this.selectorsListCSS(context),
            remainingCSS = this.remainingCSS(context);

      css = `${selectorsListCSS} {
${remainingCSS}}`;
    } else {
      css = EMPTY_STRING;
    }

    return css;
  }

  remainingCSS(context) {
    const remainingCSSNodes = this.getRemainingCSSNodes(),
          remainingCSS = remainingCSSNodes.reduce((remainingCSS, remainingCSSNode) => {
            const remainingCSSNodeCSS = remainingCSSNode.asCSS(context);

            remainingCSS = `${remainingCSS}${remainingCSSNodeCSS}`;

            return remainingCSS;
          }, EMPTY_STRING);

    return remainingCSS;
  }

  selectorsListCSS(context) {
    const selectorsListCSSNode = this.getSelectorsListCSSNode(),
          selectorsListCSSNodeCSS = selectorsListCSSNode.asCSS(context),
          selectorsListCSS = selectorsListCSSNodeCSS; ///

    return selectorsListCSS;
  }

  static fromNothing() { return CSSNode.fromNothing(RuleSetCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(RuleSetCSSNode, outerNode); }
}
