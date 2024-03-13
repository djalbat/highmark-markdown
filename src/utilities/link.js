"use strict";

import { linkMarkdownNodesFromNode } from "../utilities/query";

export function renumberLinkMarkdownNodes(documentMarkdownNode, footnotesListMarkdownNode) {
  let number = 1;

  const identifiers = footnotesListMarkdownNode.getIdentifiers(),
        linkMarkdownNodes = linkMarkdownNodesFromNode(documentMarkdownNode);

  linkMarkdownNodes.forEach((linkMarkdownNode) => {
    const identifier = linkMarkdownNode.getIdentifier(context),
          identifiersIncludesIdentifier = identifiers.includes(identifier);

    if (identifiersIncludesIdentifier) {
      linkMarkdownNode.setNumber(number);

      number++;
    } else {
      linkMarkdownNode.clear();
    }
  });
}

export default {
  renumberLinkMarkdownNodes
};
