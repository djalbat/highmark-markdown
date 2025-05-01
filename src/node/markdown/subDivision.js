"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";

import { embedDirectiveMarkdownNodesFromNode } from "../../utilities/markdown";

const { backwardsForEach } = arrayUtilities;

export default class SubDivisionMarkdownNode extends MarkdownNode {
  resolveEmbeddings(divisionMarkdownNode, context) {
    let embeddingsResolved = false;

    const node = this,  ///
          embedDirectiveMarkdownNodes = embedDirectiveMarkdownNodesFromNode(node),
          embedDirectiveMarkdownTransforms = embedDirectiveMarkdownNodes.reduce((embedDirectiveMarkdownTransforms, embedDirectiveMarkdownNode) => {
            const embedDirectiveTransform = embedDirectiveMarkdownNode.resolveEmbedding(context);

            if (embedDirectiveTransform !== null) {
              embedDirectiveMarkdownTransforms.push(embedDirectiveTransform);
            }

            return embedDirectiveMarkdownTransforms;
          }, []),
          embedDirectiveMarkdownTransformsLength = embedDirectiveMarkdownTransforms.length;

    if (embedDirectiveMarkdownTransformsLength > 0) {
      const subDivisionMarkdownNode = this; ///

      backwardsForEach(embedDirectiveMarkdownTransforms, (embedDirectiveTransform) => {
        embedDirectiveTransform.addAfterSubDivisionMarkdownNode(subDivisionMarkdownNode, context);
      });

      embeddingsResolved = true;
    }

    return embeddingsResolved;
  }

  createFootnotesListTransform(footnoteTransformMap, context) {
    const footnoteDivisionTransforms = this.findDivisionTransforms(FootnoteDivisionTransform, context);

    footnoteDivisionTransforms.forEach((footnoteDivisionTransform) => {
      const footnoteTransform = FootnoteTransform.fromFootnoteDivisionTransform(footnoteDivisionTransform),
            identifier = footnoteDivisionTransform.identifier(context);

      footnoteTransformMap[identifier] = footnoteTransform;
    });

    const divisionMarkdownNode = this,  ///
          footnotesListDivisionTransform = FootnotesListTransform.fromDivisionMarkdownNodeAndFootnoteTransformMap(divisionMarkdownNode, footnoteTransformMap, context);

    return footnotesListDivisionTransform;
  }

  static fromRuleNameChildNodesAndOpacity(ruleName, childNodes, opacity) { return MarkdownNode.fromRuleNameChildNodesAndOpacity(SubDivisionMarkdownNode, ruleName, childNodes, opacity); }
}
