"use strict";

function addDOMElement(parentDOMElement, siblingDOMElement = null) {
  if ((parentDOMElement !== null ) && (this.domElement !== null)) {
    parentDOMElement.insertBefore(this.domElement, siblingDOMElement);
  }
}

function removeDOMElement(parentDOMElement) {
  if ((parentDOMElement !== null ) && (this.domElement !== null)) {
    parentDOMElement.removeChild(this.domElement);

    this.domElement = null;
  }
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
  removeDOMElement,
  getDescendantElements
};

export default elementMixins;
