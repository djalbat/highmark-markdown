"use strict";

import { arrayUtilities } from "necessary";

const { first, last } = arrayUtilities;

function removeChildNodes(removedChildNodes) {
  const childNodes = this.getChildNodes(),
        firstRemovedChildNode = first(removedChildNodes),
        lastRemovedChildNode = last(removedChildNodes),
        firstIndex = childNodes.indexOf(firstRemovedChildNode), ///
        lastIndex = childNodes.indexOf(lastRemovedChildNode), ///
        start = firstIndex,  ///
        end = lastIndex + 1,
        deleteCount = end - start;

  childNodes.splice(start, deleteCount);
}

function removeChildNode(removedChildNode) {
  const childNodes = this.getChildNodes(),
        index = childNodes.indexOf(removedChildNode),
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
  removeChildNodes,
  removeChildNode,
  appendChildNode,
  prependChildNode,
  replaceChildNodes,
  getDescendantNodes
};

export default nodeMixins;
