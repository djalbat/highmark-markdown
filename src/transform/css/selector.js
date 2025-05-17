"use strict";

import CSSTransform from "../../transform/css"

export default class SelectorCSSTransform extends CSSTransform {
  mergeWithSelectorCSSNode(selectorCSSNode) {
    const cssNode = selectorCSSNode, ///
          clone = true;

    this.mergeWith(cssNode, clone);
  }

  static fromSelectorCSSNode(selectorCSSNode) {
    const cssNode = selectorCSSNode, ///
          selectorCSSTransform = CSSTransform.fromCSSNode(SelectorCSSTransform, cssNode);

    return selectorCSSTransform;
  }
}
