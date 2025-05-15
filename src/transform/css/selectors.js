"use strict";

import CSSTransform from "../../transform/css"

export default class SelectorsCSSTransform extends CSSTransform {
  mergeWithSelectorsCSSNode(selectorsListCSSNode) {
    const cssNode = selectorsListCSSNode, ///
          clone = true;

    this.mergeWith(cssNode, clone);
  }

  static fromSelectorsCSSNode(selectorsCSSNode) {
    const cssNode = selectorsCSSNode, ///
          selectorsCSSTransform = CSSTransform.fromCSSNode(SelectorsCSSTransform, cssNode);

    return selectorsCSSTransform;
  }
}
