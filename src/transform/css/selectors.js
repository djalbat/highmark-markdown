"use strict";

import CSSTransform from "../../transform/css"

export default class SelectorsCSSTransform extends CSSTransform {
  mergeWithSelectorsCSSNode(selectorsCSSNode) {
    const cssNode = selectorsCSSNode; ///

    this.mergeWith(cssNode);
  }

  static fromSelectorsCSSNode(selectorsCSSNode) {
    const cssNode = selectorsCSSNode, ///
          selectorsCSSTransform = CSSTransform.fromCSSNode(SelectorsCSSTransform, cssNode);

    return selectorsCSSTransform;
  }
}
