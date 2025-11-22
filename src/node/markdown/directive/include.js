"use strict";

import MarkdownNode from "../../../node/markdown";
import PathMarkdownNode from "../../../node/markdown/path";
import IncludeDirectiveMarkdownTransform from "../../../transform/markdown/directive/include";

export default class IncludeDirectiveMarkdownNode extends MarkdownNode {
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

  resolveInclude(context) {
    let includeDirectiveMarkdownTransform = null;

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

        const documentMarkdownNode = importedNode,  ///
              divisionMarkdownNode = documentMarkdownNode.getDivisionMarkdownNode();

        if (divisionMarkdownNode !== null) {
          const tokens = importedTokens,  ///
                divisionClassName = importedClassName;  ///

          divisionMarkdownNode.setDivisionClassName(divisionClassName);

          documentMarkdownNode.removeDivisionMarkdownNode(divisionMarkdownNode);

          includeDirectiveMarkdownTransform = IncludeDirectiveMarkdownTransform.fromDivisionMarkdownNodeAndTokens(divisionMarkdownNode, tokens);
        }
      }
    }

    return includeDirectiveMarkdownTransform;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(IncludeDirectiveMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
