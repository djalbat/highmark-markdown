"use strict";

import CSSTransform from "../../transform/css"
import SelectorsListCSSTransform from "./selectorsList";

export default class RuleSetCSSTransform extends CSSTransform {
  constructor(cssNode, selectorsListCSSTransform) {
    super(cssNode);

    this.selectorsListCSSTransform = selectorsListCSSTransform;
  }

  getSelectorsListCSSTransform() {
    return this.selectorsListCSSTransform;
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
    const selectorsListCSSNode = ruleSetCSSNode.getSelectorsListCSSNode();

    this.selectorsListCSSTransform.mergeWithSelectorsListCSSNode(selectorsListCSSNode);
  }

  static fromRuleSetCSSNode(ruleSetCSSNode) {
    const cssNode = ruleSetCSSNode, ///
          selectorsListCSSNode = ruleSetCSSNode.getSelectorsListCSSNode(),
          selectorsListCSSTransform = SelectorsListCSSTransform.fromSelectorsListCSSNode(selectorsListCSSNode),
          ruleSetCSSTransform = CSSTransform.fromCSSNode(RuleSetCSSTransform, cssNode, selectorsListCSSTransform);

    return ruleSetCSSTransform;
  }
}
