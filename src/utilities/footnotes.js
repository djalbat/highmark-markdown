"use strict";

import { footnoteLinkMarkdownNodesFromNode } from "../utilities/query";

export function renumberFootnoteLinkMarkdownNodes(divisionMarkdownNode, footnoteReplacementMap, callback, context) {
  const node = divisionMarkdownNode,  ///
        footnoteLinkMarkdownNodes = footnoteLinkMarkdownNodesFromNode(node);

  footnoteLinkMarkdownNodes.forEach((footnoteLinkMarkdownNode) => {
    const identifier = footnoteLinkMarkdownNode.identifier(context),
          footnoteReplacement = footnoteReplacementMap[identifier] || null;

    if (footnoteReplacement !== null) {
      const number = footnoteReplacement.getNumber();

      footnoteLinkMarkdownNode.setNumber(number);

      callback(footnoteLinkMarkdownNode);
    }
  });
}

export default {
  renumberFootnoteLinkMarkdownNodes
};
