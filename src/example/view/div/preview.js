"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";

import { EMPTY_STRING } from "../../constants";

class PreviewDiv extends Element {
  getParentDOMElement() {
    const domElement = this.getDOMElement(),
          parentDOMElement = domElement;  ///

    return parentDOMElement;
  }

  clear() {
    const parentDOMElement = this.getParentDOMElement(),
          innerHTML = EMPTY_STRING; ///

    Object.assign(parentDOMElement, {
      innerHTML
    });
  }

  update(domElements) {
    const parentDOMElement = this.getParentDOMElement();

    this.clear();

    domElements.forEach((domElement) => {
      parentDOMElement.appendChild(domElement);
    });
  }

  parentContext() {
    const clearPreviewDiv = this.clear.bind(this), ///
          updatePreviewDiv = this.update.bind(this);  ///

    return ({
      clearPreviewDiv,
      updatePreviewDiv
    });
  }

  static tagName = "div";

  static defaultProperties = {
    className: "preview"
  };
}

export default withStyle(PreviewDiv)`

  border: 1px solid darkgrey;
  
`;
