"use strict";

import CSSTransform from "../../transform/css"
import SelectorsCSSTransform from "./selectors";

export default class SelectorsListCSSTransform extends CSSTransform {
  constructor(cssNode, selectorsCSSTransforms, ancestorSelectorsCSSTransforms) {
    super(cssNode);

    this.selectorsCSSTransforms = selectorsCSSTransforms;
    this.ancestorSelectorsCSSTransforms = ancestorSelectorsCSSTransforms;
  }

  getSelectorsCSSTransforms() {
    return this.selectorsCSSTransforms;
  }

  getAncestorSelectorsCSSTransforms() {
    return this.ancestorSelectorsCSSTransforms;
  }

  getSelectorsListCSSNode() {
    const cssNode = this.getCSSNode(),
          selectorsListcSSNode = cssNode; ///

    return selectorsListcSSNode;
  }

  replaceSelectorsCSSNodes() {
    const selectorsCSSTransforms = [];

    if (this.ancestorSelectorsCSSTransforms !== null) {
      this.ancestorSelectorsCSSTransforms.forEach((ancestorSelectorsCSSTransform) => {
        this.selectorsCSSTransforms.forEach((selectorsCSSTransform) => {
          const selectorsCSSNode = selectorsCSSTransform.getSelectorsCSSNode();

          selectorsCSSTransform = ancestorSelectorsCSSTransform.mergedWithSelectorsCSSNode(selectorsCSSNode);  ///

          selectorsCSSTransforms.push(selectorsCSSTransform);
        });
      });
    } else {
      this.selectorsCSSTransforms.forEach((selectorsCSSTransform) => {
        selectorsCSSTransform = selectorsCSSTransform.clone();  ///

        selectorsCSSTransforms.push(selectorsCSSTransform);
      });
    }

    const selectorsListCSSNode = this.getSelectorsListCSSNode();

    selectorsListCSSNode.removeChildNodes();

    selectorsCSSTransforms.forEach((selectorsCSSTransform) => {
      selectorsCSSTransform.appendToSelectorsListCSSNode(selectorsListCSSNode);
    });
  }

  static fromSelectorsListCSSNode(selectorsListCSSNode) {
    const cssNode = selectorsListCSSNode, ///
          selectorsCSSNodes = selectorsListCSSNode.getSelectorsCSSNodes(),
          selectorsCSSTransforms = selectorsCSSTransformsFromSelectorsCSSNodes(selectorsCSSNodes),
          ancestorSelectorsCSSTransforms = null,
          selectorsListCSSTransform = CSSTransform.fromCSSNode(SelectorsListCSSTransform, cssNode, selectorsCSSTransforms, ancestorSelectorsCSSTransforms);

    return selectorsListCSSTransform;
  }

  static fromSelectorsListCSSNodeAndAncestorSelectorsCSSNodes(selectorsListCSSNode, ancestorsSelectorsCSSNodes) {
    const cssNode = selectorsListCSSNode, ///
          selectorsCSSNodes = selectorsListCSSNode.getSelectorsCSSNodes(),
          selectorsCSSTransforms = selectorsCSSTransformsFromSelectorsCSSNodes(selectorsCSSNodes),
          ancestorSelectorsCSSTransforms = selectorsCSSTransformsFromSelectorsCSSNodes(ancestorsSelectorsCSSNodes),
          selectorsListCSSTransform = CSSTransform.fromCSSNode(SelectorsListCSSTransform, cssNode, selectorsCSSTransforms, ancestorSelectorsCSSTransforms);

    return selectorsListCSSTransform;
  }
}

function selectorsCSSTransformsFromSelectorsCSSNodes(selectorsCSSNodes) {
  const selectorsCSSTransforms = selectorsCSSNodes.map((selectorsCSSNode) => {
          const selectorsCSSTransform = SelectorsCSSTransform.fromSelectorsCSSNode(selectorsCSSNode);

          return selectorsCSSTransform;
        });

  return selectorsCSSTransforms;
}
