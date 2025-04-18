"use strict";

import MarkdownNode from "../../../node/markdown";
import PathMarkdownNode from "../../../node/markdown/path";
import IncludeDirectiveTransform from "../../../transform/includeDirective";

export default class IncludeDirectiveMarkdownNode extends MarkdownNode {
  resolve(context) {
    let includeDirectiveTransform = null;

    const filePath = this.filePath(context);

    if (filePath !== null) {
      const { importer } = context;

      importer(filePath, context);

      const { importedNode = null,
              importedTokens = null,
              importedClassName = null } = context;

      if (importedNode !== null) {
        delete context.importedNode;
        delete context.importedTokens;
        delete context.importedClassName;

        const divisionMarkdownNode = importedNode,  ///
              divisionClassName = importedClassName,  ///
              tokens = importedTokens;  ///

        divisionMarkdownNode.setDivisionClassName(divisionClassName);

        includeDirectiveTransform = IncludeDirectiveTransform.fromDivisionMarkdownNodeAndTokens(divisionMarkdownNode, tokens);
      }
    }

    return includeDirectiveTransform;
  }

  filePath(context) {
    const filePath = this.fromFirstLastChildNode((firstLastChildNode) => {
      let filePath = null;

      const firstLastChildNodePathMarkdownNode = (firstLastChildNode instanceof PathMarkdownNode);

      if (firstLastChildNodePathMarkdownNode) {
        const pathMarkdownNode = firstLastChildNode, ///
              pathMarkdownNodePath = pathMarkdownNode.path(context);

        filePath = pathMarkdownNodePath; ///
      }

      return filePath;
    });

    return filePath;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(IncludeDirectiveMarkdownNode, ruleName, childNodes, opacity); }
}
