"use strict";

import { linkMarkdownNodesFromNode } from "../utilities/query";

export function renumberLinkMarkdownNodes(markdownNode, footnotesListMarkdownNode, context) {
  const node = markdownNode,  ///
        linkMarkdownNodes = linkMarkdownNodesFromNode(node),
        identifierToNumberNap = footnotesListMarkdownNode.identifierToNumberMap();

  linkMarkdownNodes.forEach((linkMarkdownNode) => {
    const identifier = linkMarkdownNode.identifier(context),
          number = identifierToNumberNap[identifier] || null;

    linkMarkdownNode.setNumber(number);
  });
}
