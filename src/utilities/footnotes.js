"use strict";

import FootnotesListHTMLNode from "../node/html/list/footnotes";

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

export function footnotesListHTMLNodeFromFootnotesListDOMElement(footnotesListDOMElement) {
  const domElement = footnotesListDOMElement, ///
        footnotesListHTMLNode = FootnotesListHTMLNode.fromDOMElement(domElement);

  return footnotesListHTMLNode;
}

export default {
  renumberFootnoteLinkMarkdownNodes,
  footnotesListHTMLNodeFromFootnotesListDOMElement
};
