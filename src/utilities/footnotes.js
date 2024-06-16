"use strict";

import { linkMarkdownNodesFromNode } from "../utilities/query";

export function renumberLinkMarkdownNodes(divisionMarkdownNode, context) {
  const { footnoteNumberMap } = context,
        node = divisionMarkdownNode,  ///
        linkMarkdownNodes = linkMarkdownNodesFromNode(node);

  linkMarkdownNodes.forEach((linkMarkdownNode) => {
    const identifier = linkMarkdownNode.identifier(context),
          footnoteNumber = footnoteNumberMap[identifier] || null,
          number = footnoteNumber;  ///

    linkMarkdownNode.setNumber(number);
  });
}

export default {
  renumberLinkMarkdownNodes
};
