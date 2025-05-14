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

    selectorsCSSNodes.forEach((selectorsCSSNode) => {
      this.selectorsCSSTransforms.forEach((selectorsCSSTransform) => {
        // selectorsCSSTransform.mergeWithSelectorsCSSNode(selectorsCSSNode);
      });
    });
  }

  prependToRuleSetCSSNode(ruleSetCSSNode) {
    const parentCSSNode = ruleSetCSSNode, ///
          clone = true;

    this.prependTo(parentCSSNode, clone);
  }

  static fromSelectorsListCSSNode(selectorsListCSSNode) {
    const cssNode = selectorsListCSSNode, ///
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