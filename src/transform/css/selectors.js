"use strict";

import CSSTransform from "../../transform/css"

export default class SelectorsCSSTransform extends CSSTransform {
  appendToSelectorsListCSSNode(selectorsListCSSNode) {
    const cssNode = selectorsListCSSNode; ///

    this.appendTo(cssNode);
  }

  mergeWithSelectorsCSSNode(selectorsCSSNode) {
    let cssNode = selectorsCSSNode; ///

    cssNode = this.mergeWith(cssNode);

    selectorsCSSNode = cssNode;  ///

    const selectorsCSSTransform = SelectorsCSSTransform.fromSelectorsCSSNode(selectorsCSSNode);

    return selectorsCSSTransform;
  }

  static fromSelectorsCSSNode(selectorsCSSNode) {
    const cssNode = selectorsCSSNode, ///
          selectorsCSSTransform = CSSTransform.fromCSSNode(SelectorsCSSTransform, cssNode);

    return selectorsCSSTransform;
  }
}
