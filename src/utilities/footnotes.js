"use strict";

import FootnotesListMarkdownNode from "../node/markdown/footnotesList";

import { footnoteLinkMarkdownNodesFromNode } from "../utilities/query";

export function renumberFootnoteLinkMarkdownNodes(divisionMarkdownNode, footnoteReplacementMap, callback, context) {
  const node = divisionMarkdownNode,  ///
        footnoteLinkMarkdownNodes = footnoteLinkMarkdownNodesFromNode(node);

  footnoteLinkMarkdownNodes.forEach((footnoteLinkMarkdownNode) => {
    const identifier = footnoteLinkMarkdownNode.identifier(context),
          footnoteReplacement = footnoteReplacementMap[identifier] || null;

    if (footnoteReplacement !== null) {
      const number = footnoteReplacement.getNumber();

      footnoteLinkMarkdownNode.setNumber(number);

      callback(footnoteLinkMarkdownNode);
    }
  });
}

export function footnotesListMarkdownNodeFromFootnotesListDOMElement(footnotesListDOMElement) {
  const domElement = footnotesListDOMElement, ///
        footnotesListMarkdownNode = FootnotesListMarkdownNode.fromDOMElement(domElement);

  return footnotesListMarkdownNode;
}

export default {
  renumberFootnoteLinkMarkdownNodes,
  footnotesListMarkdownNodeFromFootnotesListDOMElement
};
