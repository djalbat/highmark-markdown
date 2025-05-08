"use strict";

import HTMLTransform from "../../../transform/html";
import IndexListHTMLNode from "../../../node/html/list/index";
import IndexItemHTMLTransform from "../../../transform/html/item/index";

export default class IndexListHTMLTransform extends HTMLTransform {
  static fromIndexListAndLetter(indexList, letter) {
    let indexListHTMLTransform = null;

    const indexItemHTMLTransforms = indexList.reduceIndexItemByLetter(letter, (indexItem) => {
            const indexItemHTMLTransform = IndexItemHTMLTransform.fromIndexItem(indexItem);

            return indexItemHTMLTransform;
          }),
          indexItemHTMLTransformsLength = indexItemHTMLTransforms.length;

    if (indexItemHTMLTransformsLength > 0) {
      const indexListHTMLNode = IndexListHTMLNode.fromIndexItemHTMLTransforms(indexItemHTMLTransforms),
            htmlNode = indexListHTMLNode; ///

      indexListHTMLTransform = HTMLTransform.fromHTMLNode(IndexListHTMLTransform, htmlNode);
    }

    return indexListHTMLTransform;
  }
}
