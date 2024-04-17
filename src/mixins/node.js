"use strict";

function addChildNode(childNode) {
  const childNodes = this.getChildNodes();

  childNodes.push(childNode);
}

function removeChildNode(childNode) {
  const childNodes = this.getChildNodes(),
        index = childNodes.indexOf(childNode),
        start = index,  ///
        deleteCount = 1;

  childNodes.splice(start, deleteCount);
}

function replaceChildNode(replacedChildNode, replacementChildNode) {
  const childNodes = this.getChildNodes(),
        index = childNodes.indexOf(replacedChildNode),
        start = index,  ///
        deleteCount = 1;

  childNodes.splice(start, deleteCount, replacementChildNode);
}

function getDescendantNodes(descendantNodes = []) {
  const descendantNode = this; ///

  descendantNodes.push(descendantNode);

  const childNodes = this.getChildNodes();

  childNodes.forEach((childNode) => {
    const childNodeNonTerminalNode = childNode.isNonTerminalNode();

    if (childNodeNonTerminalNode) {
      const nonTerminalNode = childNode;  ///

      nonTerminalNode.getDescendantNodes(descendantNodes);
    }
  });

  return descendantNodes;
}

const nodeMixins = {
  addChildNode,
  removeChildNode,
  replaceChildNode,
  getDescendantNodes
};

export default nodeMixins;
