"use strict";

import MarkdownNode from "../../node/markdown";

export default class ImageMarkdownNode extends MarkdownNode {
  src(context) {
    const { pathToURL = null } = context,
          src = this.fromSecondLastChildNode((secondLastChildNode) => {
            const pathMarkdownNode = secondLastChildNode,  ///
                  path = pathMarkdownNode.path(context), ///
                  src = (pathToURL === null) ?
                           path :  ///
                             pathToURL(path);

            return src;
          });

    return src;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return MarkdownNode.fromRuleNameChildNodesPrecedenceAndOpacity(ImageMarkdownNode, ruleName, childNodes, precedence, opacity); }
}
