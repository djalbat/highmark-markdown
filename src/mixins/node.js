"use strict";

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
  getDescendantNodes
};

export default nodeMixins;
