"use strict";

import { linkMarkdownNodesFromNode } from "../utilities/query";

export function renumberLinkMarkdownNodes(divisionMarkdownNode, footnotesListMarkdownNode, context) {
  const node = divisionMarkdownNode,  ///
        linkMarkdownNodes = linkMarkdownNodesFromNode(node),
        identifierToNumberNap = footnotesListMarkdownNode.identifierToNumberMap();

  linkMarkdownNodes.forEach((linkMarkdownNode) => {
    const identifier = linkMarkdownNode.identifier(context),
          number = identifierToNumberNap[identifier] || null;

    linkMarkdownNode.setNumber(number);
  });
}
