"use strict";

import { arrayUtilities } from "necessary";

import Replacement from "../replacement";

import FootnotesItemMarkdownNode from "../node/markdown/footnotesItem";

const { extract } = arrayUtilities;

export default class FootnotesItemReplacement extends Replacement {
  appendToFootnotesListMarkdownNode(footnotesListMarkdownNode, context) {
    const parentNode = footnotesListMarkdownNode; ///

    super.appendTo(parentNode, context);
  }

  static fromNode(node, context) { return Replacement.fromNode(FootnotesItemReplacement, node, context); }

  static fromFootnoteReplacementsAndIdentifier(footnoteReplacements, identifier, context) {
    let footnotesItemReplacement = null;

    const footnoteReplacement = extract(footnoteReplacements, (footnoteReplacement) => {
      const node = footnoteReplacement.getNode(),
            footnoteMarkdownNode = node,  ///
            footnoteMarkdownNodeIdentifier = footnoteMarkdownNode.identifier(context);

      if (footnoteMarkdownNodeIdentifier === identifier) {
        return true;
      }
    }) || null;

    if (footnoteReplacement !== null) {
      const node = footnoteReplacement.getNode(),
            footnoteMarkdownNode = node,  ///
            footnotesItemMarkdownNode = FootnotesItemMarkdownNode.fromFootnotesMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier),
            ascendantNode = footnotesItemMarkdownNode; ///

      footnotesItemReplacement = footnoteReplacement.expand(FootnotesItemReplacement, ascendantNode);
    }

    return footnotesItemReplacement;
  }
}
