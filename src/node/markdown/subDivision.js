"use strict";

import MarkdownNode from "../../node/markdown";
import EmbedDirectivesSubDivisionReplacement from "../../transform/subDivision/embedDirectives";
import IncludeDirectivesSubDivisionReplacement from "../../transform/subDivision/includeDirectives";

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

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(SubDivisionMarkdownNode, ruleName, childNodes, opacity); }
}
