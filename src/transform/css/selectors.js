"use strict";

import CSSTransform from "../../transform/css"
import WhitespaceCSSNode from "../../node/css/whitespace";

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

  mergedWithSelectorsCSSNode(selectorsCSSNode) {
    const cssNode = selectorsCSSNode, ///
          whitespaceCSSNode = WhitespaceCSSNode.fromNothing(),
          selectorsCSSTransform = super.mergedWith(SelectorsCSSTransform, cssNode, whitespaceCSSNode);

    return selectorsCSSTransform;
  }

  clone() { return super.clone(SelectorsCSSTransform); }

  static fromSelectorsCSSNode(selectorsCSSNode) {
    const cssNode = selectorsCSSNode, ///
          selectorsCSSTransform = CSSTransform.fromCSSNode(SelectorsCSSTransform, cssNode);

    return selectorsCSSTransform;
  }
}
