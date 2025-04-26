"use strict";

import { arrayUtilities } from "necessary";

import MarkdownNode from "../../node/markdown";
import FootnoteTransform from "../../transform/footnote";
import FootnotesListTransform from "../../transform/footnotesList";
import FootnoteDivisionTransform from "../../transform/subDivision/footnote";

import { embedDirectiveMarkdownNodesFromNode } from "../../utilities/query";

const { backwardsForEach } = arrayUtilities;

export default class SubDivisionMarkdownNode extends MarkdownNode {
  resolveEmbeddings(divisionMarkdownNode, context) {
    let embeddingsResolved = false;

    const node = this,  ///
          embedDirectiveMarkdownNodes = embedDirectiveMarkdownNodesFromNode(node),
          embedDirectiveTransforms = embedDirectiveMarkdownNodes.reduce((embedDirectiveTransforms, embedDirectiveMarkdownNode) => {
            const embedDirectiveTransform = embedDirectiveMarkdownNode.resolveEmbedding(context);

            if (embedDirectiveTransform !== null) {
              embedDirectiveTransforms.push(embedDirectiveTransform);
            }

            return embedDirectiveTransforms;
          }, []),
          embedDirectiveTransformsLength = embedDirectiveTransforms.length;

    if (embedDirectiveTransformsLength > 0) {
      const subDivisionMarkdownNode = this; ///

      backwardsForEach(embedDirectiveTransforms, (embedDirectiveTransform) => {
        embedDirectiveTransform.addAfterSubDivisionMarkdownNode(subDivisionMarkdownNode, divisionMarkdownNode, context);
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
