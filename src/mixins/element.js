"use strict";

function getDescendantElements(descendantElements = []) {
  const domElement = this.getDOMElement();

  if (domElement !== null) {
    const descendantElement = this; ///

    descendantElements.push(descendantElement);
  }

  this.forEachChildNode((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode;  ///

      nonTerminalNode.getDescendantElements(descendantElements);
    }
  });

  return descendantElements;
}

const elementMixins = {
  getDescendantElements
};

export default elementMixins;
