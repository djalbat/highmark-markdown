"use strict";

export function parentNodeFromNodeAndChildNode(node, childNode) {
  let parentNode = null

  const nodeNonTerminalNode = node.isNonTerminalNode();

  if (nodeNonTerminalNode) {
    const nonTerminalNode = node, ///
          childNodes = nonTerminalNode.getChildNodes(),
          index = childNodes.indexOf(childNode);

    if (index !== -1) {
      parentNode = node;  ///
    } else {
      childNodes.some((childNode) => {
        const node = childNode; ///

        parentNode = parentNodeFromNodeAndChildNode(node, childNode);

        if (parentNode !== null) {
          return true;
        }
      });
    }
  }

  return parentNode;
}
