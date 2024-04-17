"use strict";

import { EMPTY_STRING } from "../constants";
import { linkMarkdownNodesFromNode } from "../utilities/query";

export function renumberLinkMarkdownNodes(divisionMarkdownNode, footnotesListMarkdownNode, context) {
  let number = 1;

  const identifiers = footnotesListMarkdownNode.identifiers(),
        linkMarkdownNodes = linkMarkdownNodesFromNode(divisionMarkdownNode);

  linkMarkdownNodes.forEach((linkMarkdownNode) => {
    const identifier = linkMarkdownNode.identifier(context),
          linkMarkdownNodeDOMElement = linkMarkdownNode.getDOMElement(),
          identifiersIncludesIdentifier = identifiers.includes(identifier);

    let innerHTML;

    if (identifiersIncludesIdentifier) {
      innerHTML = `${number}`;

      number++;
    } else {
      innerHTML = EMPTY_STRING;
    }

    Object.assign(linkMarkdownNodeDOMElement, {
      innerHTML
    });
  });
}

export default {
  renumberLinkMarkdownNodes
};
