"use strict";

import Replacement from "../replacement";

export default class ImportedReplacement extends Replacement {
  replaceEmbedDirectiveMarkdownNode(embedDirectiveMarkdownNode, parentNode, context) {
    const replacedNode = embedDirectiveMarkdownNode; ///

    super.replace(replacedNode, parentNode, context);
  }

  static fromNodeAndTokens(node, tokens) { return Replacement.fromNodeAndTokens(ImportedReplacement, node, tokens); }
}
