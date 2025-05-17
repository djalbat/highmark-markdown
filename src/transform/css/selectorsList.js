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
    const selectorsCSSNodes = selectorsListCSSNode.getSelectorsCSSNodes();

    this.selectorsCSSTransforms.forEach((selectorsCSSTransform) => {
      selectorsCSSNodes.forEach((selectorsCSSNode) => {
        selectorsCSSTransform.mergeWithSelectorsCSSNode(selectorsCSSNode);
      });
    });
  }

  static fromRuleSetCSSNode(ruleSetCSSNode) {
    let selectorsListCSSNode;

    selectorsListCSSNode = ruleSetCSSNode.getSelectorsListCSSNode();

    selectorsListCSSNode = selectorsListCSSNode.clone();  ///

    const selectorsCSSTransforms = selectorsCSSTransformsFromSelectorsListCSSNode(selectorsListCSSNode),
          cssNode = null, ///
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