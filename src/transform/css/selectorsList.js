"use strict";

import CSSTransform from "../../transform/css"
import SelectorsCSSTransform from "./selectors";

export default class SelectorsListCSSTransform extends CSSTransform {
  constructor(cssNode, selectorsCSSTransforms) {
    super(cssNode);

    this.selectorsCSSTransforms = selectorsCSSTransforms;
  }

  getSelectorsCSSTransforms() {
    return this.selectorsCSSTransforms;
  }

  mergeWithSelectorsListCSSNode(selectorsListCSSNode) {
    const selectorsCSSNodes = selectorsListCSSNode.getSelectorsCSSNodes(),
          selectorsCSSTransforms = selectorsCSSTransformsFromSelectorsListCSSNode(selectorsListCSSNode);

    selectorsCSSNodes.forEach((selectorsCSSNode) => {
      this.selectorsCSSTransforms.forEach((selectorsCSSTransform) => {
        selectorsCSSTransform = selectorsCSSTransform.mergeWithSelectorsCSSNode(selectorsCSSNode);  ///

        selectorsCSSTransform.appendToSelectorsListCSSNode(selectorsListCSSNode);
      });
    });

    selectorsCSSTransforms.forEach((selectorsCSSTransform) => {
      selectorsCSSTransform.remove();
    });
  }

  static fromRuleSetCSSNode(ruleSetCSSNode) {
    const selectorsListCSSNode = ruleSetCSSNode.getSelectorsListCSSNode(),
          cssNode = null, ///
          selectorsCSSTransforms = selectorsCSSTransformsFromSelectorsListCSSNode(selectorsListCSSNode),
          selectorsListCSSTransform = CSSTransform.fromCSSNode(SelectorsListCSSTransform, cssNode, selectorsCSSTransforms);

    return selectorsListCSSTransform;
  }
}

function selectorsCSSTransformsFromSelectorsListCSSNode(selectorsListCSSNode) {
  const selectorsCSSNodes = selectorsListCSSNode.getSelectorsCSSNodes(),
        selectorsCSSTransforms = selectorsCSSNodes.map((selectorsCSSNode) => {
          const selectorsCSSTransform = SelectorsCSSTransform.fromSelectorsCSSNode(selectorsCSSNode);

          return selectorsCSSTransform;
        });

  return selectorsCSSTransforms;
}