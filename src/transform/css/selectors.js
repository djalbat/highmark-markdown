"use strict";

import CSSTransform from "../../transform/css"

export default class SelectorsCSSTransform extends CSSTransform {
  getSelectorsCSSNode() {
    const cssNode = this.getCSSNode(),
          selectorsCSSNode = cssNode; ///

    return selectorsCSSNode;
  }

  appendToSelectorsListCSSNode(selectorsListCSSNode) {
    const parentCSSNode = selectorsListCSSNode; ///

    super.appendTo(parentCSSNode);
  }

  mergedWith(selectorsCSSNode) { return super.mergedWith(SelectorsCSSTransform, selectorsCSSNode); }

  clone() { return super.clone(SelectorsCSSTransform); }

  static fromSelectorsCSSNode(selectorsCSSNode) {
    const cssNode = selectorsCSSNode, ///
          selectorsCSSTransform = CSSTransform.fromCSSNode(SelectorsCSSTransform, cssNode);

    return selectorsCSSTransform;
  }
}
