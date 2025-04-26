"use strict";

import { Transform } from "occam-dom";

import FootnotesItemTransform from "../transform/footnotesItem";
import FootnotesListMarkdownNode from "../node/markdown/list/footnotes";

import { footnoteLinkMarkdownNodesFromNode } from "../utilities/query";

export default class FootnotesListTransform extends Transform {
  replaceFootnotesDirectiveSubDivisionTransform(footnotesDirectiveSubDivisionTransform, divisionMarkdownNode, context) {
    const subDivisionMarkdownNode = footnotesDirectiveSubDivisionTransform.getSubDivisionMarkdownNode(),
          replacedNode = subDivisionMarkdownNode, ///
          parentNode = divisionMarkdownNode;  ///

    super.replace(replacedNode, parentNode, context)
  }

  static fromDivisionMarkdownNodeAndFootnoteTransformMap(divisionMarkdownNode, footnoteTransformMap, context) {
    let footnotesListTransform = null;

    const node = divisionMarkdownNode,  ///
          start = startFromFootnoteTransformMap(footnoteTransformMap),
          footnoteLinkMarkdownNodes = footnoteLinkMarkdownNodesFromNode(node),
          footnotesItemTransforms = [];

    let number = start;

    footnoteLinkMarkdownNodes.forEach((footnoteLinkMarkdownNode) => {
      const identifier = footnoteLinkMarkdownNode.identifier(context),
            footnoteTransform = footnoteTransformMap[identifier] || null;

      if (footnoteTransform !== null) {
        const footnoteTransformUnnumbered = footnoteTransform.isUnnumbered();

        if (footnoteTransformUnnumbered) {
          const footnotesItemTransform = FootnotesItemTransform.fromFootnoteTransformAndIdentifier(footnoteTransform, identifier, context);

          footnotesItemTransforms.push(footnotesItemTransform);

          footnoteTransform.setNumber(number);

          number++;
        }
      }
    });

    const footnotesItemTransformsLength = footnotesItemTransforms.length;

    if (footnotesItemTransformsLength > 0) {
      const footnotesListMarkdownNode = FootnotesListMarkdownNode.fromFootnotesItemTransformsAndStart(footnotesItemTransforms, start),
            node = footnotesListMarkdownNode, ///
            tokens = [];

      footnotesItemTransforms.forEach((footnotesItemTransform) => {
        footnotesItemTransform.getTokens(tokens);
      });

      footnotesListTransform = Transform.fromNodeAndTokens(FootnotesListTransform, node, tokens);
    }

    return footnotesListTransform;
  }
}

function startFromFootnoteTransformMap(footnoteTransformMap) {
  const footnoteTransforms = Object.values(footnoteTransformMap),  ///
        numberedFootnoteTransforms = footnoteTransforms.filter((footnoteTransform) => {
          const footnoteTransformNumbered = footnoteTransform.isNumbered();

          if (footnoteTransformNumbered) {
            return true;
          }
        }),
        numberedFootnoteTransformsLength = numberedFootnoteTransforms.length,
        start = numberedFootnoteTransformsLength + 1;

  return start;
}
