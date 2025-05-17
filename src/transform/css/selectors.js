"use strict";

import CSSTransform from "../../transform/css"
import SelectorCSSTransform from "../../transform/css/selector";

export default class SelectorsCSSTransform extends CSSTransform {
  constructor(cssNode, selectorCSSTransforms) {
    super(cssNode);

    this.selectorCSSTransforms = selectorCSSTransforms;
  }

  getSelectorCSSTransforms() {
    return this.selectorCSSTransforms;
  }

  mergeWithSelectorsCSSNode(selectorsCSSNode) {
    const selectorCSSNodes = selectorsCSSNode.getSelectorCSSNodes();

    this.selectorCSSTransforms.forEach((selectorCSSTransform) => {
      selectorCSSNodes.forEach((selectorCSSNode) => {
        selectorCSSTransform.mergeWithSelectorCSSNode(selectorCSSNode);
      });
    });
  }

  static fromSelectorsCSSNode(selectorsCSSNode) {
    const cssNode = selectorsCSSNode, ///
          selectorCSSTransforms = selectorCSSTransformsFromSelectorsCSSNode(selectorsCSSNode),
          selectorsCSSTransform = CSSTransform.fromCSSNode(SelectorsCSSTransform, cssNode, selectorCSSTransforms);

    return selectorsCSSTransform;
  }
}

function selectorCSSTransformsFromSelectorsCSSNode(selectorsCSSNode) {
  const selectorCSSNodes = selectorsCSSNode.getSelectorCSSNodes(),
        selectorCSSTransforms = selectorCSSNodes.map((selectorCSSNode) => {
          const selectorCSSTransform = SelectorCSSTransform.fromSelectorCSSNode(selectorCSSNode);

          return selectorCSSTransform;
        });

  return selectorCSSTransforms;
}