"use strict";

import { linkMarkdownNodesFromNode } from "../utilities/query";

export function renumberLinkMarkdownNodes(divisionMarkdownNode, footnoteMap, callback, context) {
  const node = divisionMarkdownNode,  ///
        linkMarkdownNodes = linkMarkdownNodesFromNode(node);

  linkMarkdownNodes.forEach((linkMarkdownNode) => {
    const identifier = linkMarkdownNode.identifier(context),
          footnoteReplacement = footnoteMap[identifier] || null;

    if (footnoteReplacement !== null) {
      const number = footnoteReplacement.getNumber();

      linkMarkdownNode.setNumber(number);

      callback(linkMarkdownNode);
    }
  });
}

export default {
  renumberLinkMarkdownNodes
};
