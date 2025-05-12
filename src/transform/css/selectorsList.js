"use strict";

import CSSTransform from "../../transform/css"

export default class SelectorsListCSSTransform extends CSSTransform {
  mergeWithRuleSetCSSTransform(ruleSetCSSTransform) {
    const ruleSetCSSNode = ruleSetCSSTransform.getRuleSetCSSNode(),
          selectorsListCSSNode = ruleSetCSSNode.getSelectorsListCSSNode(),
          cssNode = selectorsListCSSNode; ///

    this.mergeWith(cssNode);
  }

  static fromRuleSetCSSNode(ruleSetCSSNode) {
    const selectorsListCSSNode = ruleSetCSSNode.getSelectorsListCSSNode(),
          cssNode = selectorsListCSSNode, ///
          paragraphCSSTransform = CSSTransform.fromCSSNode(SelectorsListCSSTransform, cssNode);

    return paragraphCSSTransform;
  }
}
