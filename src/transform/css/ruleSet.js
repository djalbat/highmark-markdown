"use strict";

import CSSTransform from "../../transform/css"
import SelectorsListCSSTransform from "../../transform/css/selectorsList";

export default class RuleSetCSSTransform extends CSSTransform {
  getSelectorsListCSSNode() {
    const ruleSetCSSNode = this.getRuleSetCSSNode(),
          selectorsListCSSNode = ruleSetCSSNode.getSelectorsListCSSNode();

    return selectorsListCSSNode;
  }

  getRuleSetCSSNode() {
    const cssNode = this.getCSSNode(),
          ruleSetCSSNode = cssNode; ///

    return ruleSetCSSNode;
  }

  resolve(context) {
    const ruleSetCSSNode = this.getRuleSetCSSNode();

    ruleSetCSSNode.resolve(context);
  }

  mergeWithRuleSetCSSNode(ruleSetCSSNode) {
    let selectorsListCSSNode,
        selectorsListCSSTransform;

    selectorsListCSSNode = ruleSetCSSNode.getSelectorsListCSSNode();

    selectorsListCSSTransform = SelectorsListCSSTransform.fromSelectorsListCSSNode(selectorsListCSSNode);

    selectorsListCSSTransform.remove();

    selectorsListCSSNode = this.getSelectorsListCSSNode();

    selectorsListCSSTransform.mergeWithSelectorsListCSSNode(selectorsListCSSNode);

    selectorsListCSSTransform = SelectorsListCSSTransform.fromSelectorsListCSSNode(selectorsListCSSNode);

    selectorsListCSSTransform.prependToRuleSetCSSNode(ruleSetCSSNode);
  }

  static fromRuleSetCSSNode(ruleSetCSSNode) {
    const cssNode = ruleSetCSSNode, ///
          ruleSetCSSTransform = CSSTransform.fromCSSNode(RuleSetCSSTransform, cssNode);

    return ruleSetCSSTransform;
  }
}
