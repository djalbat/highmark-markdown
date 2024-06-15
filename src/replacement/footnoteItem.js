"use strict";

import { arrayUtilities } from "necessary";

import Replacement from "../replacement";

import FootnoteItemMarkdownNode from "../node/markdown/footnoteItem";

const { extract } = arrayUtilities;

export default class FootnoteItemReplacement extends Replacement {
  appendToFootnotesListMarkdownNode(footnotesListMarkdownNode, context) {
    const parentNode = footnotesListMarkdownNode; ///

    super.appendTo(parentNode, context);
  }

  static fromFootnoteReplacementsAndIdentifier(footnoteReplacements, identifier, context) {
    let footnoteItemReplacement = null;

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
            footnoteItemMarkdownNode = FootnoteItemMarkdownNode.fromFootnotesMarkdownNodeAndIdentifier(footnoteMarkdownNode, identifier),
            ascendantNode = footnoteItemMarkdownNode; ///

      footnoteItemReplacement = footnoteReplacement.expand(FootnoteItemReplacement, ascendantNode);
    }

    return footnoteItemReplacement;
  }
}
