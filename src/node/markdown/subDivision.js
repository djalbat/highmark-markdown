"use strict";

import MarkdownNode from "../../node/markdown";
import EmbedDirectivesSubDivisionTransform from "../../transform/subDivision/embedDirectives";
import IncludeDirectivesSubDivisionTransform from "../../transform/subDivision/includeDirectives";

export default class SubDivisionMarkdownNode extends MarkdownNode {
  resolveEmbeddings(divisionMarkdownNode, context) {
    const subDivisionMarkdownNode = this, ///
          embedDirectivesSubDivisionTransform = EmbedDirectivesSubDivisionTransform.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);

    if (embedDirectivesSubDivisionTransform !== null) {
      const subDivisionMarkdownNodes = embedDirectivesSubDivisionTransform.replaceSubDivisionMarkdownNode(divisionMarkdownNode, context);

      subDivisionMarkdownNodes.forEach((subDivisionMarkdownNode) => {
        subDivisionMarkdownNode.resolveEmbeddings(divisionMarkdownNode, context);
      });
    }
  }

  resolveIncludes(divisionMarkdownNode, context) {
    const subDivisionMarkdownNode = this, ///
          includeDirectivesSubDivisionTransform = IncludeDirectivesSubDivisionTransform.fromSubDivisionMarkdownNode(subDivisionMarkdownNode, context);

    if (includeDirectivesSubDivisionTransform !== null) {
      includeDirectivesSubDivisionTransform.removeSubDivisionMarkdownNode(divisionMarkdownNode, context);
    }
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(SubDivisionMarkdownNode, ruleName, childNodes, opacity); }
}
