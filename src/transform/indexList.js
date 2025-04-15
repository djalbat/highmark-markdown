"use strict";

import Replacement from "./";
import IndexItemReplacement from ".//indexItem";
import IndexListMarkdownNode from "../node/markdown/indexList";

export default class IndexListReplacement extends Replacement {
  static fromIndexListAndLetter(indexList, letter, context) {
    let indexListReplacement = null;

    const indexItemReplacements = indexList.reduceIndexItemByLetter(letter, (indexItem) => {
            const indexItemReplacement = IndexItemReplacement.fromIndexItem(indexItem, context);

            return indexItemReplacement;
          }),
          indexItemReplacementsLength = indexItemReplacements.length;

    if (indexItemReplacementsLength > 0) {
      const indexListMarkdownNode = IndexListMarkdownNode.fromIndexItemReplacements(indexItemReplacements),
            node = indexListMarkdownNode, ///
            tokens = [];

      indexItemReplacements.forEach((indexItemReplacement) => {
        indexItemReplacement.getTokens(tokens);
      });

      indexListReplacement = Replacement.fromNodeAndTokens(IndexListReplacement, node, tokens);
    }

    return indexListReplacement;
  }
}
