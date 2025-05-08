"use strict";

import HTMLTransform from "../../../transform/html";
import IndexItemHTMLNode from "../../../node/html/item";

export default class IndexItemHTMLTransform extends HTMLTransform {
  getIndexItemHTMLNode() {
    const htmlNode = this.getHTMLNode(),
          indexItemHTMLNode = htmlNode; ///

    return indexItemHTMLNode;
  }

  static fromIndexItem(indexItem) {
    const indexItemHTNLMode = IndexItemHTMLNode.fromIndexItem(indexItem),
          htmlNode = indexItemHTNLMode, ///
          indexItemHTMLTransform = HTMLTransform.fromHTMLNode(IndexItemHTMLTransform, htmlNode);

    return indexItemHTMLTransform;
  }
}
