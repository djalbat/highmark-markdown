"use strict";

function removeChildNode(childNode) {
  const childNodes = this.getChildNodes(),
        index = childNodes.indexOf(childNode),
        start = index,  ///
        deleteCount = 1;

  childNodes.splice(start, deleteCount);
}

function prependChildNode(childNode) {
  const childNodes = this.getChildNodes();

  childNodes.unshift(childNode);
}

function appendChildNode(childNode) {
  const childNodes = this.getChildNodes();

  childNodes.push(childNode);
}

function replaceChildNodes(replacedChildNode, replacementChildNodes) {
  const childNodes = this.getChildNodes(),
        index = childNodes.indexOf(replacedChildNode),
        start = index,  ///
        deleteCount = 1;

  childNodes.splice(start, deleteCount, ...replacementChildNodes);
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
  removeChildNode,
  appendChildNode,
  prependChildNode,
  replaceChildNodes,
  getDescendantNodes
};

export default nodeMixins;
