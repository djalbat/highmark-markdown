"use strict";

import { linkMarkdownNodesFromNode } from "../utilities/query";

export function renumberLinkMarkdownNodes(divisionMarkdownNode, callback, context) {
  const { footnoteNumberMap } = context,
        node = divisionMarkdownNode,  ///
        linkMarkdownNodes = linkMarkdownNodesFromNode(node);

  linkMarkdownNodes.forEach((linkMarkdownNode) => {
    const identifier = linkMarkdownNode.identifier(context),
          footnoteNumber = footnoteNumberMap[identifier] || null,
          number = footnoteNumber;  ///

    linkMarkdownNode.setNumber(number);

    callback(linkMarkdownNode);
  });
}

export default {
  renumberLinkMarkdownNodes
};
