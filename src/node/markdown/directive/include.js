"use strict";

import MarkdownNode from "../../../node/markdown";
import PathMarkdownNode from "../../../node/markdown/path";
import IncludeDirectiveTransform from "../../../transform/includeDirective";

import { divisionMarkdownNodeFromNode } from "../../../utilities/query";

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

        const node = importedNode,  ///
              divisionMarkdownNode = divisionMarkdownNodeFromNode(node);

        if (divisionMarkdownNode !== null) {
          const topmostMarkdownNode = node, ///
                divisionClassName = importedClassName,  ///
                tokens = importedTokens;  ///

          topmostMarkdownNode.removeDivisionMarkdownNode(divisionMarkdownNode);

          divisionMarkdownNode.setDivisionClassName(divisionClassName);

          includeDirectiveTransform = IncludeDirectiveTransform.fromDivisionMarkdownNodeAndTokens(divisionMarkdownNode, tokens);
        }
      }
    }

    return includeDirectiveTransform;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(IncludeDirectiveMarkdownNode, ruleName, childNodes, opacity); }
}
