"use strict";

function addDOMElement(domElement) {
  const parentDOMElement = this.domElement; ///

  parentDOMElement.appendChild(domElement);
}

function removeDOMElement(domElement) {
  domElement.remove();
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
