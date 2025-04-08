"use strict";

import MarkdownNode from "../../node/markdown";

export default class ImageMarkdownNode extends MarkdownNode {
  alt(context) {
    const alt = this.fromSecondChildNode((secondChildNode) => {
      const inlineTextMarkdownNode = secondChildNode,  ///
            inlineTextMarkdownNodeContent = inlineTextMarkdownNode.content(context),
            alt = inlineTextMarkdownNodeContent; ///

      return alt;
    });

    return alt;
  }

  src(context) {
    const { pathToURL = null } = context,
          src = this.fromSecondLastChildNode((secondLastChildNode) => {
            const pathMarkdownNode = secondLastChildNode,  ///
                  pathMarkdownNodeContent = pathMarkdownNode.getContent(),
                  path = pathMarkdownNodeContent, ///
                  src = (pathToURL === null) ?
                           path :  ///
                             pathToURL(path);

            return src;
          });

    return src;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(ImageMarkdownNode, ruleName, childNodes, opacity); }
}
