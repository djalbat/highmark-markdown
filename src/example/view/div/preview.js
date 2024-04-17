"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";

import { EMPTY_STRING } from "../../constants";

class PreviewDiv extends Element {
  getParentDOMElement() {
    const domElement = this.getDOMElement(),
          parentDOMElement = domElement;  ///

    return parentDOMElement;
  }

  clear() {
    const html = EMPTY_STRING;

    this.html(html);
  }

  update(domElement) {
    this.clear();

    const parentDOMElement = this.getParentDOMElement();

    parentDOMElement.appendChild(domElement);
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
  padding: 1.6rem;
  font-size: 1.6rem;
  
`;
