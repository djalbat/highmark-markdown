"use strict";

import FootnotesListMarkdownNode from "../node/markdown/list/footnotes";

import { footnoteLinkMarkdownNodesFromNode } from "../utilities/query";

export function renumberFootnoteLinkMarkdownNodes(divisionMarkdownNode, footnoteReplacementMap, context) {
  const node = divisionMarkdownNode,  ///
        footnoteLinkMarkdownNodes = footnoteLinkMarkdownNodesFromNode(node);

  footnoteLinkMarkdownNodes.forEach((footnoteLinkMarkdownNode) => {
    const identifier = footnoteLinkMarkdownNode.identifier(context),
          footnoteReplacement = footnoteReplacementMap[identifier] || null,
          number = (footnoteReplacement !== null) ?
                     footnoteReplacement.getNumber() :
                        null;

    footnoteLinkMarkdownNode.renumber(number);
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
