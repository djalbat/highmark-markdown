"use strict";

import { EMPTY_STRING } from "../constants";
import { linkMarkdownNodesFromNode } from "../utilities/query";

export function renumberLinkMarkdownNodes(divisionMarkdownNode, footnotesListMarkdownNode, context) {
  const node = divisionMarkdownNode,  ///
        linkMarkdownNodes = linkMarkdownNodesFromNode(node),
        identifierToNumberNap = footnotesListMarkdownNode.identifierToNumberMap();

  linkMarkdownNodes.forEach((linkMarkdownNode) => {
    const linkMarkdownNodeDOMElement = linkMarkdownNode.getDOMElement(),
          identifier = linkMarkdownNode.identifier(context),
          number = identifierToNumberNap[identifier] || null,
          innerHTML = (number === null) ?
                        EMPTY_STRING :
                         `${number}`;

    Object.assign(linkMarkdownNodeDOMElement, {
      innerHTML
    });
  });
}

export default {
  renumberLinkMarkdownNodes
};
