"use strict";

import MarkdownNode from "../../../node/markdown";
import PathMarkdownNode from "../../../node/markdown/path";
import IncludeDirectiveMarkdownTransform from "../../../transform/markdown/directive/include";

import { divisionMarkdownNodeFromNode } from "../../../utilities/markdown";

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

        const node = importedNode,  ///
              divisionMarkdownNode = divisionMarkdownNodeFromNode(node);

        if (divisionMarkdownNode !== null) {
          const topmostMarkdownNode = node, ///
                divisionClassName = importedClassName,  ///
                tokens = importedTokens;  ///

          topmostMarkdownNode.removeDivisionMarkdownNode(divisionMarkdownNode);

          divisionMarkdownNode.setDivisionClassName(divisionClassName);

          includeDirectiveMarkdownTransform = IncludeDirectiveMarkdownTransform.fromDivisionMarkdownNodeAndTokens(divisionMarkdownNode, tokens);
        }
      }
    }

    return includeDirectiveMarkdownTransform;
  }

  static fromRuleNameChildNodesOpacityAndPrecedence(ruleName, childNodes, opacity, precedence) { return MarkdownNode.fromRuleNameChildNodesOpacityAndPrecedence(IncludeDirectiveMarkdownNode, ruleName, childNodes, opacity, precedence); }
}
