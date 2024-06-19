"use strict";

import { linkMarkdownNodesFromNode } from "../utilities/query";

export function renumberLinkMarkdownNodes(divisionMarkdownNode, footnotesListReplacement, callback, context) {
  const node = divisionMarkdownNode,  ///
        start = footnotesListReplacement.getStart(),
        identifiers = footnotesListReplacement.getIdentifiers(),
        linkMarkdownNodes = linkMarkdownNodesFromNode(node);

  linkMarkdownNodes.forEach((linkMarkdownNode) => {
    const identifier = linkMarkdownNode.identifier(context),
          index = identifiers.indexOf(identifier),
          number = start + index;

    linkMarkdownNode.setNumber(number);

    callback(linkMarkdownNode);
  });
}

export default {
  renumberLinkMarkdownNodes
};
