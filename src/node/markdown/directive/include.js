"use strict";

import { arrayUtilities } from "necessary";

import PathMarkdownNode from "../path";
import DirectiveMarkdownNode from "../../../node/markdown/directive";
import IncludeDirectiveReplacement from "../../../replacement/includeDirective";

const { last } = arrayUtilities;

export default class IncludeDirectiveMarkdownNode extends DirectiveMarkdownNode {
  resolve(context) {
    let includeDirectiveReplacement = null;

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

        includeDirectiveReplacement = IncludeDirectiveReplacement.fromDivisionMarkdownNodeAndTokens(divisionMarkdownNode, tokens);
      }
    }

    return includeDirectiveReplacement;
  }

  filePath(context) {
    let filePath = null;

    const childNodes = this.getChildNodes(),
          lastChildNode = last(childNodes),
          lastChildNodePathMarkdownNode = (lastChildNode instanceof PathMarkdownNode);

    if (lastChildNodePathMarkdownNode) {
      const pathMarkdownNode = lastChildNode, ///
            pathMarkdownNodeContent = pathMarkdownNode.getContent();

      filePath = pathMarkdownNodeContent; ///
    }

    return filePath;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return DirectiveMarkdownNode.fromRuleNameChildNodesAndOpacity(IncludeDirectiveMarkdownNode, ruleName, childNodes, opacity); }
}
