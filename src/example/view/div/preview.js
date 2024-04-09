"use strict";

import withStyle from "easy-with-style";

import { Element } from "easy";

import { EMPTY_STRING } from "../../constants";

class PreviewDiv extends Element {
  clear() {
    const html = EMPTY_STRING;

    this.html(html);
  }

  update(domElement) {
    this.clear();

    const childDOMElement = domElement; ///

    domElement = this.getDOMElement();

    domElement.appendChild(childDOMElement);
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
