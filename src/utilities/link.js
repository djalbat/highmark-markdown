"use strict";

import { stringUtilities } from "necessary";

import { EMPTY_STRING } from "../constants";
import { chop, splice } from "../utilities/string";
import { linkMarkdownNodesFromNode } from "../utilities/query";

const { strlen, indexOf } = stringUtilities;

export function renumberLinkMarkdownNodesHTML(childNodesHTML, divisionMarkdownNode, footnotesListMarkdownNode, context) {
  let number = 1;

  const identifiers = footnotesListMarkdownNode.identifiers(),
        linkMarkdownNodes = linkMarkdownNodesFromNode(divisionMarkdownNode);

  linkMarkdownNodes.forEach((linkMarkdownNode) => {
    const indent = null,
          identifier = linkMarkdownNode.identifier(context),
          identifiersIncludesIdentifier = identifiers.includes(identifier),
          linkMarkdownNodeHTML = linkMarkdownNode.asHTML(indent, context),
          index = indexOf(childNodesHTML, linkMarkdownNodeHTML),
          length = strlen(linkMarkdownNodeHTML),
          start = index,  ///
          deleteCount = length; ///

    if (identifiersIncludesIdentifier) {
      const linkMarkdownNodeHTML = linkMarkdownNode.asHTML(indent, context, number);

      childNodesHTML = splice(childNodesHTML, start, deleteCount, linkMarkdownNodeHTML);

      number++;
    } else {
      childNodesHTML = chop(childNodesHTML, start, deleteCount);
    }
  });

  return childNodesHTML;
}

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
