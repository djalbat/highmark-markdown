"use strict";

import { linkMarkdownNodesFromNode } from "../utilities/query";

export function renumberLinkMarkdownNodes(documentMarkdownNode, footnotesListMarkdownNode, context) {
  let number = 1;

  const identifiers = footnotesListMarkdownNode.identifiers(),
        linkMarkdownNodes = linkMarkdownNodesFromNode(documentMarkdownNode);

  linkMarkdownNodes.forEach((linkMarkdownNode) => {
    const identifier = linkMarkdownNode.identifier(context),
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
