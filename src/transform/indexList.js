"use strict";

import { Transform } from "occam-dom";

import IndexItemTransform from "../transform/indexItem";
import IndexListMarkdownNode from "../node/markdown/indexList";

export default class IndexListTransform extends Transform {
  static fromIndexListAndLetter(indexList, letter, context) {
    let indexListTransform = null;

    const indexItemTransforms = indexList.reduceIndexItemByLetter(letter, (indexItem) => {
            const indexItemTransform = IndexItemTransform.fromIndexItem(indexItem, context);

            return indexItemTransform;
          }),
          indexItemTransformsLength = indexItemTransforms.length;

    if (indexItemTransformsLength > 0) {
      const indexListMarkdownNode = IndexListMarkdownNode.fromIndexItemTransforms(indexItemTransforms),
            node = indexListMarkdownNode, ///
            tokens = [];

      indexItemTransforms.forEach((indexItemTransform) => {
        indexItemTransform.getTokens(tokens);
      });

      indexListTransform = Transform.fromNodeAndTokens(IndexListTransform, node, tokens);
    }

    return indexListTransform;
  }
}
