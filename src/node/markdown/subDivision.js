"use strict";

import MarkdownNode from "../../node/markdown";
import EmbedDirectivesSubDivisionReplacement from "../../replacement/subDivision/embedDirectives";
import IncludeDirectivesSubDivisionReplacement from "../../replacement/subDivision/includeDirectives";

export default class SubDivisionMarkdownNode extends MarkdownNode {
  resolveEmbeddings(divisionMarkdownNode, context) {
    const subDivisionMarkdownNode = this, ///
          embedDirectivesSubDivisionReplacement = EmbedDirectivesSubDivisionReplacement.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);

    if (embedDirectivesSubDivisionReplacement !== null) {
      const subDivisionMarkdownNodes = embedDirectivesSubDivisionReplacement.replaceSubDivisionMarkdownNode(divisionMarkdownNode, context);

      subDivisionMarkdownNodes.forEach((subDivisionMarkdownNode) => {
        subDivisionMarkdownNode.resolveEmbeddings(divisionMarkdownNode, context);
      });
    }
  }

  resolveIncludes(divisionMarkdownNode, context) {
    const subDivisionMarkdownNode = this, ///
          includeDirectivesSubDivisionReplacement = IncludeDirectivesSubDivisionReplacement.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);

    if (includeDirectivesSubDivisionReplacement !== null) {
      includeDirectivesSubDivisionReplacement.removeSubDivisionMarkdownNode(divisionMarkdownNode, context);
    }
  }

  lines(context) {
    const lines = this.fromSecondChildNode((secondChildNode) => {
      const secondMarkdownNode = secondChildNode, ///
            lines = secondMarkdownNode.lines(context);

      return lines;
    });

    return lines;
  }

  asPlainText(context) {
    const plainText = this.fromSecondChildNode((secondChildNode) => {
      const secondMarkdownNode = secondChildNode, ///
            plainText = secondMarkdownNode.asPlainText(context);

      return plainText;
    });

    return plainText;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(SubDivisionMarkdownNode, ruleName, childNodes, opacity); }
}
