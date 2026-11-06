"use strict";

import CSSNode from "../../node/css";
import SelectorsListCSSTransform from "../../transform/css/selectorsList";

import { EMPTY_STRING } from "../../constants";
import { ruleSetCSSNodesFromNode } from "../../utilities/css";

export default class RuleSetCSSNode extends CSSNode {
  isEmpty() {
    const multiplicity = this.getMultiplicity(),
          empty = (multiplicity === 1);

    return empty;
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

  getSelectorsCSSNodes() {
    const selectorsListCSSNode = this.getSelectorsListCSSNode(),
          selectorsCSSNodes = selectorsListCSSNode.getSelectorsCSSNodes();

    return selectorsCSSNodes;
  }

  getSelectorsListCSSNode() {
    const selectorsListCSSNode = this.fromFirstChildNode((firstChildNode) => {
      const selectorsListCSSNode = firstChildNode;  ///

      return selectorsListCSSNode;
    });

    return selectorsListCSSNode;
  }

  resolveSelectors(ancestorsSelectorsCSSNodes, context) {
    const selectorsListCSSNode = this.getSelectorsListCSSNode(),
          selectorsListCSSTransform = (ancestorsSelectorsCSSNodes !== null) ?
                                        SelectorsListCSSTransform.fromSelectorsListCSSNodeAndAncestorSelectorsCSSNodes(selectorsListCSSNode, ancestorsSelectorsCSSNodes) :
                                          SelectorsListCSSTransform.fromSelectorsListCSSNode(selectorsListCSSNode);

    selectorsListCSSTransform.replaceSelectorsCSSNodes();

    const node = this,  ///
          ruleSetCSSNodes = ruleSetCSSNodesFromNode(node),
          selectorsCSSNodes = this.getSelectorsCSSNodes();

    ancestorsSelectorsCSSNodes = selectorsCSSNodes; ///

    ruleSetCSSNodes.forEach((ruleSetCSSNode) => {
      ruleSetCSSNode.resolveSelectors(ancestorsSelectorsCSSNodes, context);
    });
  }

  asCSS(context) {
    let css;

    const empty = this.isEmpty();

    if (!empty) {
      const selectorsListCSSNodeCSS = this.selectorsListCSSNodeAsCSS(context),
            remainingCSSNodesCSS = this.remainingCSSNodesAsCSS(context);

      css = `${selectorsListCSSNodeCSS} {
${remainingCSSNodesCSS}}

`;
    } else {
      css = EMPTY_STRING;
    }

    return css;
  }

  remainingCSSNodesAsCSS(context) {
    const remainingCSSNodes = this.getRemainingCSSNodes(),
          remainingCSSNodesCSS = remainingCSSNodes.reduce((remainingCSSNodesCSS, remainingCSSNode) => {
            const remainingCSSNodeCSS = remainingCSSNode.asCSS(context);

            remainingCSSNodesCSS = `${remainingCSSNodesCSS}${remainingCSSNodeCSS}`;

            return remainingCSSNodesCSS;
          }, EMPTY_STRING);

    return remainingCSSNodesCSS;
  }

  selectorsListCSSNodeAsCSS(context) {
    const selectorsListCSSNode = this.getSelectorsListCSSNode(),
          selectorsListCSSNodeCSS = selectorsListCSSNode.asCSS(context),
          selectorsListNodeCSS = selectorsListCSSNodeCSS; ///

    return selectorsListNodeCSS;
  }

  static fromNothing() { return CSSNode.fromNothing(RuleSetCSSNode); }

  static fromOuterNode(outerNode) { return CSSNode.fromOuterNode(RuleSetCSSNode, outerNode); }
}
