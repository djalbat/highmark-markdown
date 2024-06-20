"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { arrayUtilities } from "necessary";

import PageButtonsDiv from "../div/pageButtons";

const { first } = arrayUtilities;

class PreviewDiv extends Element {
  getPageButtonsDivDOMElement() {
    const childElements = this.getChildElements(),
          firstChildElement = first(childElements),
          pageButtonsDiv = firstChildElement, ///
          pageButtonsDivDOMElement = pageButtonsDiv.getDOMElement();

    return pageButtonsDivDOMElement;
  }

  getParentDOMElement() {
    const domElement = this.getDOMElement(),
          parentDOMElement = domElement;  ///

    return parentDOMElement;
  }

  getDOMElements() {
    const parentDOMElement = this.getParentDOMElement(),
          { childNodes } = parentDOMElement,
          domElements = [ ///
            ...childNodes
          ];

    return domElements;
  }

  clear() {
    const domElements = this.getDOMElements(),
          pageButtonsDivDOMElement = this.getPageButtonsDivDOMElement();

    domElements.forEach((domElement) => {
      if (domElement !== pageButtonsDivDOMElement) {
        domElement.remove();
      }
    });
  }

  update(domElement) {
    this.clear();

    const parentDOMElement = this.getParentDOMElement();

    parentDOMElement.appendChild(domElement);
  }

  childElements() {
    const { onCustomPageUpdate } = this.properties,
          pageUpdateCustomHandler = onCustomPageUpdate; ///

    return (

      <PageButtonsDiv onCustomPageUpdate={pageUpdateCustomHandler} />

    );
  }

  parentContext() {
    const context = this.getContext(),
          clearPreviewDiv = this.clear.bind(this), ///
          updatePreviewDiv = this.update.bind(this);  ///

    return ({
      ...context,
      clearPreviewDiv,
      updatePreviewDiv
    });
  }

  static tagName = "div";

  static ignoredProperties = [
    "onCustomPageUpdate"
  ];

  static defaultProperties = {
    className: "preview"
  };
}

export default withStyle(PreviewDiv)`

  height: 48rem;
  border: 1px solid darkgrey;
  overflow: scroll;
  position: relative;
  
`;
