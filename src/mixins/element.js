"use strict";

import {EMPTY_STRING} from "../constants";

function addDOMElement(domElement) {
  const parentDOMElement = this.domElement; ///

  parentDOMElement.appendChild(domElement);
}

function removeDOMElements() {
  const innerHTML = EMPTY_STRING; ///

  Object.assign(this.domElement, {
    innerHTML
  });
}

function getDescendantElements(descendantElements = []) {
  const domElement = this.getDOMElement();

  if (domElement !== null) {
    const descendantElement = this; ///

    descendantElements.push(descendantElement);
  }

  const childNodes = this.getChildNodes();

  childNodes.forEach((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode;  ///

      nonTerminalNode.getDescendantElements(descendantElements);
    }
  });

  return descendantElements;
}

const elementMixins = {
  addDOMElement,
  removeDOMElements,
  getDescendantElements
};

export default elementMixins;
